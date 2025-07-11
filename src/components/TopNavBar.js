import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Poppins_400Regular } from '@expo-google-fonts/poppins';

export default function TopNavbar() {
    return (
            <View style={styles.container}>
            <Image
                source={require("../../assets/UFABContent_logo.png")}
                style={styles.logo}
                resizeMode="contain"
            />
            <Text style={styles.title}>UFABContent</Text>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        backgroundColor: "#F0F4F9",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingTop: 15,
    },
    title: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: "Poppins_400Regular"
    },
    logo: {
        width: 30,
        height: 30,
        marginRight: 8,
    }
});
