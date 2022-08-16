import React, { useState } from 'react';
import { Text, Pressable, View, Button } from 'react-native';

import Checkbox from 'expo-checkbox';

import CharteText from '../atoms/charteText';

const Charte = () => {
    const [Pressed, setPressed] = useState(false);
    const [isChecked, setChecked] = useState(false);

    return (
        <Pressable
            onPress={() => {
                setPressed(true);
            }}
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 330,
                marginBottom: 20,
                overflow: 'hidden',
                borderRadius: 20,
            }}
        >
            <Text
                style={{
                    color: 'white',
                    textAlign: 'center',
                    backgroundColor: '#B22132',
                    fontSize: 20,
                    padding: 20,
                    width: '100%',
                    height: 65,
                }}
            >
                CHARTE DU PERMANENCIER
            </Text>
            {Pressed && (
                <View
                    style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.33)',
                        padding: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <CharteText />
                    <View
                        style={{
                            flexDirection: 'row',
                            margin: 20,
                            alignItems: 'center',
                        }}
                    >
                        <Checkbox
                            color={'white'}
                            style={{ marginRight: 10, width: 15, height: 15 }}
                            value={isChecked}
                            onValueChange={setChecked}
                        />
                        <Text style={{ color: 'white', fontSize: 14 }}>Accepter la charte</Text>
                    </View>
                    <Pressable
                        onPress={() => {
                            setPressed(false);
                            setChecked(false);
                        }}
                        style={{
                            backgroundColor: '#B22132',
                            borderRadius: 20,
                            width: 100,
                        }}
                    >
                        <Text
                            style={{
                                color: 'white',
                                padding: 10,
                                textAlign: 'center',
                                fontSize: 16,
                            }}
                        >
                            Valider
                        </Text>
                    </Pressable>
                </View>
            )}
        </Pressable>
    );
};

export default Charte;
