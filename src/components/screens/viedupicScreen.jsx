import React from 'react';
import { ScrollView } from 'react-native';

import DivLinkVideo from '../molecules/divLinkVideo';
import HowTo from '../molecules/howTo';
import Events from '../molecules/events';
import TelVss from '../molecules/telVss';
import ScreenStyle from '../style/screenStyle';

function ViedupicScreen() {
    return (
        <ScrollView
            style={ScreenStyle.scrollScreenBackground}
            contentContainerStyle={ScreenStyle.ScreenScrollContainer}
        >
            <TelVss />
            <DivLinkVideo />
            <Events />
            <HowTo />
        </ScrollView>
    );
}

export default ViedupicScreen;
