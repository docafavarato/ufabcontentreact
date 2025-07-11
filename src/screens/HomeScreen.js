import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Poppins_400Regular } from '@expo-google-fonts/poppins';
import { useFonts } from '@expo-google-fonts/poppins/useFonts';
import Icon from 'react-native-vector-icons/FontAwesome';
import TopNavbar from '../components/TopNavBar';
import SearchableSelect from '../components/SearchableSelect';

export default function HomeScreen({ navigation }) {
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
                <View style={styles.containerPresentation}>
                    <Text style={styles.ufabcontent}>UFABContent</Text>
                    <View style={styles.hr}></View>
                    <Text style={styles.ufabcontentDescription}>O UFABContent é um repositório (não oficial) de conteúdos dos professores da UFABC. Aqui os alunos podem fazer o upload de provas e atividades de seus professores, permitindo que outros alunos utilizem esses materiais em seus estudos. Comece acessando a página ao lado para pesquisar por um professor ou pesquisando por um arquivo:</Text>
                </View>

                <View style={styles.containerForms}>

                    <View style={styles.containerSearchFile}>
                        <TextInput style={styles.fileInput} placeholder='Pesquisar por arquivo'></TextInput>
                        <TouchableOpacity style={styles.btnSearchFile}>
                            <Icon name='search' size={16} color={"white"}></Icon>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.containerSearchSubject}>
                        <SearchableSelect></SearchableSelect>
                        <TouchableOpacity style={styles.btnSearchSubject}>
                            <Icon name='search' size={16} color={"white"}></Icon>
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

    containerPresentation: {
        backgroundColor: "#F0F4F9",
        borderRadius: 10,
        padding: 20,
        marginTop: 30
    },

    ufabcontent: {
        fontWeight: "bold",
        fontSize: 26,
    },

    ufabcontentDescription: {
        fontFamily: "Poppins_400Regular",
    },

    hr: {
        borderBottomColor: '#ccc',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginVertical: 10,
    },

    containerForms: {
        marginTop: 40,
    },

    containerSearchDocente: {

    },

    docenteInput: {
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
        marginTop: 10,
    },

    containerSearchFile: {
        display: "flex",
        flexDirection: "row",
        marginTop: 0,
    },

    fileInput: {
        width: "90%",
        borderColor: "grey",
        borderWidth: 0.5,
        height: 40,
        borderRadius: 20,
        paddingLeft: 10,
    },

    btnSearchFile: {
        backgroundColor: "#0D6EFD",
        borderRadius: "50%",
        height: 40,
        width: 40,
        marginLeft: 8,
        alignItems: "center",
        justifyContent: "center"
    },

    containerSearchSubject: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 30,
    },

    btnSearchSubject: {
        backgroundColor: "#0D6EFD",
        borderRadius: "50%",
        height: 40,
        width: 40,
        marginLeft: -8,
        alignItems: "center",
        justifyContent: "center"
    },

});