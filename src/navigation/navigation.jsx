import React from 'react';

import Ionic from 'react-native-vector-icons/Ionicons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Image } from 'react-native';
import HomeScreen from '../components/screens/homeScreen';
import CalendarScreen from '../components/screens/calendarScreen';
import ViedupicScreen from '../components/screens/viedupicScreen';
import MenuNavigation from './menuNavigation';
import ProfileScreen from '../components/screens/profileScreen';
import { styleConstants } from '../components/style/styleConstants';

function Navigation() {
    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color }) => {
                        let iconName;
                        if (route.name === 'ACCUEIL') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === 'CALENDRIER') {
                            iconName = focused ? 'calendar' : 'calendar-outline';
                        } else if (route.name === 'VIE DU PIC') {
                            return (
                                <Image
                                    source={require('../../assets/generalImages/logo_bottom_bar.png')}
                                    style={{
                                        width: focused ? 36 : 24,
                                        height: focused ? 36 : 24,
                                    }}
                                />
                            );
                        } else if (route.name === 'Carte') {
                            iconName = focused ? 'beer' : 'beer-outline';
                        } else if (route.name === 'PROFIL') {
                            iconName = focused ? 'person' : 'person-outline';
                        }
                        const trueSize = focused ? 36 : 24;
                        return <Ionic name={iconName} size={trueSize} color={color} />;
                    },
                    tabBarActiveTintColor: styleConstants.color_details,
                    tabBarInactiveTintColor: styleConstants.color_details,
                    tabBarShowLabel: false,
                    headerTitleAlign: 'center',
                    tabBarStyle: [
                        {
                            backgroundColor: styleConstants.color_enhance,
                            borderTopColor: styleConstants.color_enhance,
                            paddingVertical: 0,
                            height: '10%',
                        },
                        null,
                    ],
                    headerStyle: [
                        {
                            backgroundColor: styleConstants.color_general,
                            shadowColor: 'transparent',
                            height: 100,
                        },
                        null,
                    ],
                    headerTitleStyle: [
                        {
                            color: styleConstants.color_details,
                            fontSize: 28,
                            fontFamily: 'RobotoSlab-bold',
                            paddingVertical: 10,
                        },
                        null,
                    ],
                })}
            >
                <Tab.Screen name="ACCUEIL" component={HomeScreen} />
                <Tab.Screen name="CALENDRIER" component={CalendarScreen} />
                <Tab.Screen name="VIE DU PIC" component={ViedupicScreen} />
                <Tab.Screen
                    name="Carte"
                    options={{
                        headerShown: false,
                    }}
                    component={MenuNavigation}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
