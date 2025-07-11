import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Poppins_400Regular } from '@expo-google-fonts/poppins';
import { useFonts } from '@expo-google-fonts/poppins/useFonts';
import Icon from 'react-native-vector-icons/FontAwesome';
import TopNavbar from '../components/TopNavBar';

export default function ReportScreen() {
    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
    });

    if (!fontsLoaded) {
        return;
    }

    return (
        <View style={{ flex: 1 }}>
        <TopNavbar></TopNavbar>
            <View style={styles.containerMain}>
                    <View style={{marginTop: 60}}>
                        <Text style={{fontSize: 21, fontFamily: "Poppins_400Regular", fontWeight: "bold", marginBottom: 40}}>Utilize o formulário abaixo para denunciar algum arquivo:</Text>
                        <View>
                            <Text style={{fontSize: 16}}>Nome do professor:</Text>
                            <TextInput style={styles.formInput}></TextInput>
                            <Text style={{fontSize: 16, marginTop: 20}}>Nome do arquivo:</Text>
                            <TextInput style={styles.formInput}></TextInput>
                            <TouchableOpacity style={styles.btnPrimary}>
                                <Text style={{color: "white"}}>Enviar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        padding: 20,
        fontFamily: "Poppins_400Regular",
        backgroundColor: "white",
    },

    formInput: {
        borderColor: "grey",
        borderWidth: 0.5,
        height: 38,
        borderRadius: 6,
        marginTop: 5
    },

    btnPrimary: {
        backgroundColor: "#0D6EFD",
        borderRadius: 6,
        height: 38,
        width: 80,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        width: "100%"
    },
});