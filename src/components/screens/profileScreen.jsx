import React, { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';

import Ionic from 'react-native-vector-icons/Ionicons';

import * as WebBrowser from 'expo-web-browser';

import Credits from '../molecules/credits';
import Charte from '../molecules/charte';
import Feedback from '../molecules/feedback';
import ScreenStyle from '../style/screenStyle';
import { API_BASE_URL } from '../../api/config';

function ProfileScreen() {
    const [connected, setConnected] = useState(false);

    const login = async () => {
        try {
            const result = await WebBrowser.openAuthSessionAsync(
                `${API_BASE_URL}/auth/login?redirect=exp://192.168.1.28:19000`,
                'exp://192.168.1.28:19000'
            );

            if (result && result.type !== 'success') {
                setConnected(false);
                console.log(result);
            } else if (result) {
                console.log(result);
                setConnected(true);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <ScrollView
            style={ScreenStyle.scrollScreenBackground}
            contentContainerStyle={ScreenStyle.ScreenScrollContainer}
        >
            {connected && (
                <View>
                    <View style={ScreenStyle.profileHeaderContainer}>
                        <Text style={ScreenStyle.profileHeaderText}>BIENVENUE Eliott !</Text>
                        <Pressable
                            style={ScreenStyle.profileLogOutButton}
                            onPress={() => {
                                setConnected((current) => !current);
                                WebBrowser.openBrowserAsync('http://127.0.0.1:8000/api/auth/me');
                            }}
                        >
                            <Ionic name="log-out-outline" color="white" size={30} />
                        </Pressable>
                    </View>

                    <Charte />
                    <Feedback />
                </View>
            )}
            {!connected && (
                <View style={ScreenStyle.profileConnectionContainer}>
                    <Text style={ScreenStyle.profileAlertText}>
                        Cette partie est réservée aux étudiants de l’UTC, veuillez vous connecter.
                    </Text>

                    <Pressable
                        style={ScreenStyle.profileConnectionButtonContainer}
                        onPress={() => {
                            login();
                        }}
                    >
                        <Text style={ScreenStyle.profileConnectionButtonText}>Connexion CAS</Text>
                    </Pressable>
                </View>
            )}
            <Credits />
        </ScrollView>
    );
}

export default ProfileScreen;
