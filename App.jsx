import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import Navigation from './src/navigation/navigation';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {
                // Pre-load fonts, make any API calls you need to do here
                await Font.loadAsync({
                    RobotoSlab: require('./assets/fonts/RobotoSlab-Regular.ttf'),
                    'RobotoSlab-bold': require('./assets/fonts/RobotoSlab-Bold.ttf'),
                    'RobotoSlab-medium': require('./assets/fonts/RobotoSlab-Medium.ttf'),
                });
            } catch (e) {
                console.warn(e);
            } finally {
                // Tell the application to render
                setAppIsReady(true);
            }
        }

        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }
    return (
        <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
            <Navigation />
        </View>
    );
}
