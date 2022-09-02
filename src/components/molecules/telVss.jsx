import React from 'react';
import { Linking, Pressable, Text } from 'react-native';

import Ionic from 'react-native-vector-icons/Ionicons';
import moleculeStyle from '../style/moleculeStyle';

const TelVss = () => (
    <Pressable
        style={moleculeStyle.telVSSContainer}
        onPress={() => Linking.openURL('tel:+33658358728')}
    >
        <Ionic name="call" color="white" size={36} />
        <Text style={moleculeStyle.telVSSText}>Appeler le Téléphone VSS</Text>
    </Pressable>
);

export default TelVss;
