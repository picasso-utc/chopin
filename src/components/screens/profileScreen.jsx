import React, { useRef } from 'react';
import { Animated, Easing, ScrollView, Text, View } from 'react-native';

import Credits from '../molecules/credits';
import ScreenStyle from '../style/screenStyle';

function ProfileScreen() {
    const fadeAnim = useRef(new Animated.ValueXY({ x: -200, y: 50 })).current;

    Animated.timing(fadeAnim, {
        toValue: { x: 0, y: 0 },
        duration: 1500,
        useNativeDriver: true,
        easing: Easing.elastic(1.3),
    }).start();

    return (
        <ScrollView
            style={ScreenStyle.scrollScreenBackground}
            contentContainerStyle={ScreenStyle.ScreenScrollContainer}
        >
            <View style={ScreenStyle.profileConnectionContainer}>
                <View style={ScreenStyle.profileConnectionTextContainer}>
                    <Text style={ScreenStyle.profileAlertText}>Section en travaux...</Text>
                    <Text style={ScreenStyle.profileAlertText}>
                        Plein de nouvelles choses arrivent, soyez patients !
                    </Text>
                </View>
                <Animated.Image
                    style={[
                        { transform: fadeAnim.getTranslateTransform() },
                        ScreenStyle.profileTeddyImage,
                    ]}
                    source={require('../../../assets/generalImages/teddy.png')}
                />
            </View>
            <Credits />
        </ScrollView>
    );
}

export default ProfileScreen;
