import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar, View, AppState } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Navigation from './src/navigation/navigation';
import {
    getBeerInfo,
    getCalendar,
    getCarte,
    getEvenements,
    getNewsletter,
    getTrendingProduct,
} from './src/api/apiCalls';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
    const [appIsReady, setAppIsReady] = useState(false);

    const loadEvents = async () => {
        try {
            getEvenements()
                .then((res) => {
                    res.data.nextEvent = false;
                    const today = new Date().toISOString().split('T')[0];

                    if (res.data.length !== 0) {
                        res.data.sort((a, b) => (a.date > b.date ? 1 : -1));
                        const nextEvent = res.data.find((event) => event.date >= today);
                        nextEvent.nextEvent = true;
                        AsyncStorage.setItem('events', JSON.stringify(res.data));
                    } else {
                        AsyncStorage.setItem(
                            'events',
                            JSON.stringify([
                                {
                                    nextEvent: true,
                                    name: "Aucun évènement annoncé jusqu'ici pour ce semestre.",
                                    date: today,
                                    id: 1,
                                },
                            ])
                        );
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (e) {
            console.error(e);
        }
    };
    const loadCarte = async () => {
        try {
            getCarte()
                .then((res) => {
                    if (res.data !== []) AsyncStorage.setItem('carte', JSON.stringify(res.data));
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (e) {
            console.error(e);
        }
    };
    const loadTrending = async () => {
        try {
            getTrendingProduct()
                .then((res) => {
                    if (res.data !== [])
                        AsyncStorage.setItem('trending', JSON.stringify(res.data[0]));
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (e) {
            console.error(e);
        }
    };
    const loadCalendar = async () => {
        try {
            getCalendar()
                .then((res) => {
                    if (res.data !== [])
                        AsyncStorage.setItem('calendrier', JSON.stringify(res.data));
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (e) {
            console.error(e);
        }
    };
    const loadBeerInfo = async () => {
        try {
            getBeerInfo()
                .then((res) => {
                    if (res.data.length > 0)
                        AsyncStorage.setItem('beerInfo', JSON.stringify(res.data));
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (e) {
            console.error(e);
        }
    };
    const loadNews = async () => {
        try {
            getNewsletter()
                .then((res) => {
                    res.data.sort((a, b) => (a.publication_date < b.publication_date ? 1 : -1));

                    const today = new Date();
                    today.setHours(today.getHours() + 2);
                    const todayIso = today.toISOString();

                    const newsToStore = res.data.filter((a) => a.publication_date <= todayIso);
                    if (newsToStore.length > 0)
                        AsyncStorage.setItem('news', JSON.stringify(newsToStore));
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (e) {
            console.error(e);
        }
    };

    const load = async () => {
        await loadEvents();
        await loadCarte();
        await loadTrending();
        await loadCalendar();
        await loadBeerInfo();
        await loadNews();
    };

    useEffect(() => {
        const loadFonts = async () => {
            try {
                // Preload fonts, make any API calls you need to do here
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
        };

        loadFonts();
        load();

        const stateListener = AppState.addEventListener('change', (state) => {
            if (state === 'active') {
                load();
            }
        });

        return () => {
            stateListener.remove();
        };
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
            <StatusBar barStyle="light-content" translucent />
            <Navigation />
        </View>
    );
}
