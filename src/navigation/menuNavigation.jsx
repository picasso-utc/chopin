import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import NestedCarteScreen from '../components/screens/nestedCarteScreen';
import CarteScreen from '../components/screens/carteScreen';
import BeerCarteScreen from '../components/screens/beerCarteScreen';

const Stack = createStackNavigator();

function MenuNavigation() {
    return (
        <Stack.Navigator
            screenOptions={() => ({
                headerStyle: [
                    {
                        backgroundColor: '#000223',
                        shadowColor: 'transparent',
                        height: 109,
                    },
                ],
                headerTitleStyle: [
                    {
                        color: 'white',
                        fontSize: 28,
                        fontFamily: 'RobotoSlab-bold',
                        textTransform: 'uppercase',
                    },
                ],
                headerTintColor: 'white',
                headerBackTitleVisible: false,
            })}
        >
            <Stack.Screen name="CARTE" component={CarteScreen} />
            <Stack.Screen name="nestedCarte" component={NestedCarteScreen} />
            <Stack.Screen name="nestedBeerCarte" component={BeerCarteScreen} />
        </Stack.Navigator>
    );
}
export default MenuNavigation;
