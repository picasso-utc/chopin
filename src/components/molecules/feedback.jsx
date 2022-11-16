import React, { useState } from 'react';
import { TextInput, View, Text } from 'react-native';

import MoleculeStyle from '../style/moleculeStyle';

const Feedback = () => {
    const [text, onChangeText] = useState('');

    return (
        <View style={MoleculeStyle.feedbackContainer}>
            <Text style={MoleculeStyle.feedbackHeader}>FEEDBACK</Text>
            <Text style={MoleculeStyle.feedbackSubHeader}>
                Un retour à faire ? C&apos;est anonyme !
            </Text>

            <TextInput
                onChangeText={onChangeText}
                value={text}
                placeholder="Un mot à nous dire ?"
                style={MoleculeStyle.feedbackInput}
                multiline
                placeholderTextColor="#8C8C8C"
                autoFocus={false}
            />
        </View>
    );
};

export default Feedback;
