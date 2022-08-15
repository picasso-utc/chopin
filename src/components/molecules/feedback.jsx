import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const Feedback = () => {
    const [text, onChangeText] = useState('');

    return (
        <View
            style={{
                backgroundColor: 'rgba(255, 255, 255, 0.33)',
                alignItems: 'center',
                justifyContent: 'center',
                height: 230,
                width: 330,
                borderRadius: 20,
            }}
        >
            <Text style={{ color: 'white', fontSize: 20 }}>Feedback</Text>
            <Text style={{ color: 'white', fontSize: 14, marginBottom: 20 }}>
                Un retour à faire ? C&apos;est anonyme !
            </Text>
            <TextInput
                onChangeText={onChangeText}
                value={text}
                placeholder="Un mot à nous dire ?"
                style={{
                    paddingTop: 20,
                    padding: 20,
                    backgroundColor: '#000223',
                    width: 300,
                    height: 140,
                    borderRadius: 20,
                    color: 'white',
                    fontSize: 14,
                    textAlignVertical: 'top',
                }}
                multiline
                placeholderTextColor="#8C8C8C"
                autoFocus={false}
            />
        </View>
    );
};

export default Feedback;
