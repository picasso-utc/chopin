import React, { useState } from 'react';
import { Pressable, View, Text } from 'react-native';

import Checkbox from 'expo-checkbox';

import CharteText from '../atoms/charteText';
import MoleculeStyle from '../style/moleculeStyle';

const Charte = () => {
    const [Pressed, setPressed] = useState(false);
    const [isChecked, setChecked] = useState(false);

    return (
        <Pressable
            onPress={() => {
                setPressed(true);
            }}
            style={MoleculeStyle.charteComponent}
        >
            <Text style={MoleculeStyle.charteEntete}>CHARTE DU PERMANENCIER</Text>
            {Pressed && (
                <View style={MoleculeStyle.charteTextContainer}>
                    <CharteText />
                    <View style={MoleculeStyle.charteCheckboxContainer}>
                        <Checkbox
                            color="white"
                            style={MoleculeStyle.charteCheckbox}
                            value={isChecked}
                            onValueChange={setChecked}
                        />
                        <Text style={MoleculeStyle.charteCheckboxText}>Accepter la charte</Text>
                    </View>
                    <Pressable
                        onPress={() => {
                            setPressed(false);
                            setChecked(false);
                        }}
                        style={MoleculeStyle.charteConfrimContainer}
                    >
                        <Text style={MoleculeStyle.charteConfirmText}>Valider</Text>
                    </Pressable>
                </View>
            )}
        </Pressable>
    );
};

export default Charte;
