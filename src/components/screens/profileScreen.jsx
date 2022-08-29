import React, { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';

import Ionic from 'react-native-vector-icons/Ionicons';

import Credits from '../molecules/credits';
import Charte from '../molecules/charte';
import Feedback from '../molecules/feedback';
import ScreenStyle from '../style/screenStyle';

function ProfileScreen() {
    const [connected, setConnected] = useState(false);

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
                            setConnected((current) => !current);
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
