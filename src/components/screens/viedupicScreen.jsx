import React from 'react';
import { View } from 'react-native';

import DivLinkVideo from '../molecules/divLinkVideo';
import HowTo from '../molecules/howTo';
import Events from '../molecules/events';

function ViedupicScreen() {
    return (
        <View
            style={{
                backgroundColor: '#000223',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <DivLinkVideo />
            <Events />
            <HowTo />
        </View>
    );
}

export default ViedupicScreen;
