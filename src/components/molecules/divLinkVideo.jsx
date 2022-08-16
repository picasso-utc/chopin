import React from 'react';
import { Image, TouchableOpacity, Text, Linking } from 'react-native';

const DivLinkVideo = () => {
    return (
        <TouchableOpacity
            style={{
                width: 350,
                height: 68,
                borderRadius: 20,
                display: 'flex',
                flexDirection: 'row',
                backgroundColor: 'rgba(256,256,256,0.33)',
                alignItems: 'center',
                justifyContent: 'flex-start',
                marginTop: 20,
            }}
            onPress={() => Linking.openURL('https://www.youtube.com/watch?v=91bKukiTL8s')}
        >
            <Image
                source={require('../../../assets/vieDuPicImages/LogoYoutube.png')}
                style={{ width: 93, height: 56 }}
            />
            <Text
                style={{
                    fontSize: 14,
                    color: '#FFFFFF',
                    width: 266,
                }}
            >
                Video de présentation du Pic sur Youtube
            </Text>
        </TouchableOpacity>
    );
};

export default DivLinkVideo;
