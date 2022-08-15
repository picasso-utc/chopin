import React from 'react';
import { View, Text } from 'react-native';

import Constants from 'expo-constants';

const Credits = () => (
    <View style={{ alignItems: 'center', marginTop: 200 }}>
        <Text style={{ color: 'white', fontSize: 14, marginBottom: 10 }}>
            Chopin v{Constants.manifest.version}
        </Text>
        <Text style={{ color: 'white', fontSize: 14 }}>Développé avec passion par le</Text>
        <Text style={{ color: '#B22132', fontSize: 14 }}>Pic&apos;Asso A22</Text>
    </View>
);

export default Credits;
