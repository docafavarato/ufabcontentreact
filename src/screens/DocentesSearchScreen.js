import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import docentes from '../data/docentes_data.json';
import TopNavbar from '../components/TopNavBar';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function DocentesSearchScreen({ navigation }) {
    const [busca, setBusca] = useState("");
    const [pressed, setPressed] = useState(false);

    const professoresFiltrados = docentes.filter((prof) =>
        prof.name.toString().toLowerCase().includes(busca.toString().toLowerCase())
    );

    return (
        <View style={{ flex: 1 }}>
            <TopNavbar></TopNavbar>
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Icon name='search' size={16} color={"black"} style={{marginLeft: 10}}></Icon>
                    <TextInput
                        placeholder="Digite o nome do professor.."
                        value={busca}
                        onChangeText={setBusca}
                        style={styles.input}
                    />
                </View>
                <FlatList contentContainerStyle={{alignItems: "center"}}
                    data={professoresFiltrados}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("DocenteDetailedScreen", { docente: item.name })} onPressIn={() => setPressed(true)} onPressOut={() => setPressed(false)}>
                            <Text style={{fontSize: 18, color: "#0D6EFD"}}>{item.name}</Text>
                            <Text style={{fontSize: 14}}>{item.area}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "white"
    },
    input: {
        marginLeft: 8,
        width: "100%"
    },
    card: {
        padding: 16,
        marginBottom: 25,
        backgroundColor: "#F0F4F9",
        borderRadius: 8,
        minHeight: 140,
        minWidth: "90%",
        maxWidth: "90%"
    },
    inputContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        marginBottom: 16,
    }
})