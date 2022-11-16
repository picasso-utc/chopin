import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import NestedCarteScreen from '../components/screens/nestedCarteScreen';
import CarteScreen from '../components/screens/carteScreen';
import BeerCarteScreen from '../components/screens/beerCarteScreen';
import { styleConstants } from '../components/style/styleConstants';

const Stack = createStackNavigator();

function MenuNavigation() {
    return (
        <Stack.Navigator
            screenOptions={() => ({
                headerTitleAlign: 'center',
                headerStyle: [
                    {
                        backgroundColor: styleConstants.color_general,
                        shadowColor: 'transparent',
                        height: 110,
                    },
                ],
                headerTitleStyle: [
                    {
                        color: styleConstants.color_details,
                        fontSize: 28,
                        fontFamily: 'RobotoSlab-bold',
                        textTransform: 'uppercase',
                    },
                ],
                headerTintColor: styleConstants.color_details,
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
