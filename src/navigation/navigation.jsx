import React from 'react'

import Ionic from 'react-native-vector-icons/Ionicons';

import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/homeScreen";
import CalendarScreen from "../screens/calendarScreen";
import ViedupicScreen from "../screens/viedupicScreen";
import CarteScreen from "../screens/carteScreen";
import ProfileScreen from "../screens/profileScreen";

const Navigation = () => {
    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route}) => ({
                    // eslint-disable-next-line react/prop-types,react/no-unstable-nested-components
                    "tabBarIcon": ({focused, color}) => {
                        let iconName;
                        if (route.name === "ACCUEIL") {
                            iconName = focused ? "home" : "home-outline"
                        } else if (route.name === "CALENDRIER") {
                            iconName = focused ? "calendar" : "calendar-outline"
                        } else if (route.name === "VIE DU PIC") {
                            iconName = focused ? "flower" : "flower-outline"
                        } else if (route.name === "CARTE") {
                            iconName = focused ? "beer" : "beer-outline"
                        } else if (route.name === "PROFIL") {
                            iconName = focused ? "person" : "person-outline"
                        }
                        const trueSize = focused ? 36 : 24;
                        return <Ionic name={iconName} size={trueSize} color={color}/>;
                    },
                    "tabBarActiveTintColor": "white",
                    "tabBarInactiveTintColor": "white",
                    "tabBarShowLabel": false,
                    "tabBarStyle": [
                        {
                            backgroundColor: "#B22132",
                            borderTopColor: "#B22132",
                            height: 76,
                            paddingTop: 10,
                            paddingLeft: 10,
                            paddingRight: 10
                        }, null
                    ],
                    "headerStyle": [
                        {
                            backgroundColor: "#000223",
                            shadowColor: "transparent",
                        }, null
                    ],
                    "headerTitleStyle": [
                        {
                            color: "white",
                            fontSize: 28,
                        }, null
                    ],
                })}
            >
                <Tab.Screen name="ACCUEIL" component={HomeScreen}/>
                <Tab.Screen name="CALENDRIER" component={CalendarScreen}/>
                <Tab.Screen name="VIE DU PIC" component={ViedupicScreen}/>
                <Tab.Screen name="CARTE" component={CarteScreen}/>
                <Tab.Screen name="PROFIL" component={ProfileScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;