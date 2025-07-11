import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import subjects from '../data/subjects.json';

export default function SearchableSelect({ style }) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState(
        subjects.map((item, index) => ({
        label: `${item.name} (${item.formattedName})`,
        value: `${item.formattedName}_${index}`,
        }))
    );

    return (
        <View style={styles.container}>
            <DropDownPicker style={[styles.searchable, style]}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                searchable={true}
                placeholder="Selecione uma matéria"
                searchPlaceholder="Pesquisar por matérias"
                listMode='MODAL'
                textStyle={{ fontSize: 14, lineHeight: 40 }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        zIndex: 1000,
    },

    searchable: {
        width: "95%",
        borderRadius: 30,
        borderWidth: StyleSheet.hairlineWidth
    }
});
