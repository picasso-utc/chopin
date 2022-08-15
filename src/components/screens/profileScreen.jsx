import React, { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';

import Ionic from 'react-native-vector-icons/Ionicons';

import Credits from '../molecules/credits';
import Charte from '../molecules/charte';
import Feedback from '../molecules/feedback';

function ProfileScreen() {
    const [connected, setConnected] = useState(false);

    return (
        <ScrollView
            style={{
                backgroundColor: '#000223',
                height: '100%',
            }}
            contentContainerStyle={{
                alignItems: 'center',
            }}
        >
            {connected && (
                <View>
                    <View
                        style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}
                    >
                        <Text style={{ color: 'white', fontSize: 20 }}>BIENVENUE Eliott !</Text>
                        <Pressable
                            style={{
                                position: 'absolute',
                                right: 0,
                            }}
                            onPress={() => {
                                setConnected((current) => !current);
                            }}
                        >
                            <Ionic name="log-out-outline" color="white" size="30" />
                        </Pressable>
                    </View>

                    <Charte />
                    <Feedback />
                </View>
            )}
            {!connected && (
                <View
                    style={{
                        marginTop: 20,
                        backgroundColor: 'rgba(255, 255, 255, 0.33)',
                        width: 330,
                        height: 250,
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                    }}
                >
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 20,
                            textAlign: 'center',
                            width: 250,
                        }}
                    >
                        Cette partie est réservée aux étudiants de l’UTC, veuillez vous connecter.
                    </Text>
                    <Pressable
                        style={{
                            backgroundColor: '#B22132',
                            padding: 20,
                            borderRadius: 30,
                            width: 250,
                            alignItems: 'center',
                        }}
                        onPress={() => {
                            setConnected((current) => !current);
                        }}
                    >
                        <Text style={{ fontSize: 20, color: 'white' }}>Connexion CAS</Text>
                    </Pressable>
                </View>
            )}
            <Credits />
        </ScrollView>
    );
}

export default ProfileScreen;
