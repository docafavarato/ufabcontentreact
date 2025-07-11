import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { useFonts } from '@expo-google-fonts/poppins/useFonts';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import * as DocumentPicker from 'expo-document-picker';
import SearchableSelect from '../components/SearchableSelect';

export default function DocenteDetailedScreen({ route }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const { docente } = route.params;

    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_600SemiBold
    });

    if (!fontsLoaded) {
        return null;
    }

    const pickDocument = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync({
                type: '*/*',
                copyToCacheDirectory: true,
                multiple: false
            });

            if (result.assets && result.assets.length > 0 && result.assets[0].uri) {
                setSelectedFile(result.assets[0]);
                console.log("Arquivo selecionado:", result.assets[0]);
            } else {
                console.log("Seleção cancelada");
            }
        } catch (err) {
            console.error("Erro ao selecionar o documento:", err);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 22, fontFamily: "Poppins_600SemiBold" }}>{docente}</Text>
            <View style={styles.alertSucess}>
                <Text style={{ fontSize: 20, color: "#0A3622", fontFamily: "Poppins_400Regular" }}>Colabore!</Text>
                <Text style={{ fontSize: 16, fontFamily: "Poppins_400Regular", color: "black" }}>
                    Utilize o formulário abaixo para enviar arquivos relacionados ao(a) docente
                    <Text style={{ fontFamily: "Poppins_600SemiBold" }}> {docente}.</Text>
                </Text>
                <View style={styles.hr}></View>
                <View>
                    <Text style={{ fontFamily: "Poppins_400Regular", fontSize: 16 }}>
                        <Icon name='exclamation-circle' size={16} color={"red"} /> O envio de arquivos maliciosos atrapalha uma ferramenta gratuita que foi desenvolvida apenas para ajudar os outros. Não o faça.
                    </Text>
                </View>
            </View>

            <View style={{ width: "80%", marginTop: 30 }}>
                <Text style={{ fontFamily: "Poppins_400Regular", fontSize: 16 }}>Adicionar arquivos</Text>
                <TouchableOpacity style={styles.attachFile} onPress={() => setModalVisible(true)}>
                    <Text style={{ fontFamily: "Poppins_400Regular", marginLeft: 10, fontSize: 16 }}>Enviar arquivo</Text>
                </TouchableOpacity>
            </View>

            <SafeAreaProvider>
                <SafeAreaView style={styles.centeredView}>
                    <Modal
                        animationType='slide'
                        transparent={true} 
                        visible={modalVisible}
                        onRequestClose={() => setModalVisible(!modalVisible)}
                        >
                        <View style={styles.modalOverlay}>
                            <View style={styles.modalContainer}>
                                <View style={styles.modalHeader}>
                                    <Text style={{ fontSize: 20, fontFamily: "Poppins_400Regular", marginTop: 0 }}>Enviar arquivo</Text>
                                    <TouchableOpacity
                                    style={styles.closeIcon}
                                    onPress={() => setModalVisible(false)}
                                    >
                                    <Icon name="close" size={24} color="#000" />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.hr}></View>
                                <View style={styles.modalBody}>
                                    <TextInput style={styles.nameInput} placeholder='Nome do arquivo' />
                                    <Text style={{ fontSize: 14, color: "#212529BF", fontFamily: "Poppins_400Regular", marginTop: -2 }}>
                                    Exemplo: "P1 - IEDO (2025)", "Lista - FVV (2023)"
                                    </Text>
                                    <Text style={{ fontSize: 16, fontFamily: "Poppins_400Regular", marginTop: 20 }}>Adicionar arquivo</Text>

                                    <TouchableOpacity onPress={pickDocument} style={styles.attachFile}>
                                    <Text style={{ fontFamily: "Poppins_400Regular", fontSize: 16, marginLeft: 10 }}>
                                        Escolher arquivo
                                    </Text>
                                    </TouchableOpacity>

                                    {selectedFile && (
                                    <Text style={{ marginTop: 5, fontFamily: "Poppins_400Regular" }}>
                                        Selecionado: {selectedFile.name}
                                    </Text>
                                    )}

                                    <View style={{marginTop: 30}}><SearchableSelect style={{width: "100%"}}></SearchableSelect></View>
                                </View>
                                
                                <View style={styles.buttonGroup}>
                                    <TouchableOpacity style={styles.fileTypeButton}>
                                        <Text style={{color: "white", fontFamily: "Poppins_400Regular"}}>Prova</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.fileTypeButton}>
                                        <Text style={{color: "white", fontFamily: "Poppins_400Regular"}}>Atividade</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.fileTypeButton}>
                                        <Text style={{color: "white", fontFamily: "Poppins_400Regular"}}>Outro</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.hr}></View>
                                <View style={styles.modalFooter}>
                                    <TouchableOpacity style={styles.sendButton}>
                                        <Text style={{color: "white", fontFamily: "Poppins_400Regular"}}>Enviar</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        </Modal>

                </SafeAreaView>
            </SafeAreaProvider>
        </View>
    );
}

const styles = StyleSheet.create({
    sendButton: {
        backgroundColor: "#0D6EFD",
        borderRadius: 6,
        height: 38,
        width: 74,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonGroup: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20    
    },
    fileTypeButton: {
        height: 38,
        backgroundColor: "#0D6EFD",
        alignItems: "center",
        justifyContent: "center",
        minWidth: 90,
        borderRadius: 6,
        marginRight: 10
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // fundo escuro translúcido
        justifyContent: 'center',
        alignItems: 'center',
    },

    modalContainer: {
        width: '90%',
        height: 468,
        backgroundColor: 'white', // apenas no conteúdo, não no overlay
        borderRadius: 12,
        padding: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    closeIcon: {
        position: 'absolute',
        right: 10,
        top: 0,
        padding: 8,
    },
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "white",
        alignItems: "center",
    },
    alertSucess: {
        backgroundColor: "#D1E7DD",
        maxWidth: "80%",
        borderRadius: 6,
        borderColor: "#0A3622",
        borderWidth: StyleSheet.hairlineWidth,
        padding: 15,
        marginTop: 20
    },
    hr: {
        borderBottomColor: '#0A3622',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginVertical: 14,
    },
    attachFile: {
        justifyContent: "center",
        alignItems: "flex-start",
        borderColor: "#212529",
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 6,
        height: 38,
        marginTop: 10
    },
    nameInput: {
        height: 38,
        borderColor: "#0A3622",
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 6,
        paddingHorizontal: 8,
        marginBottom: 10,
    },
    modalHeader: {
        justifyContent: "center",
        marginTop: 5,
        marginLeft: 20
    },
    modalBody: {
        paddingHorizontal: 20,
        marginTop: 10,
    },
    modalFooter: {
        alignItems: 'center',
    },
});
