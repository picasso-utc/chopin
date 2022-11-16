import React, { useEffect, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PopUp from './popUp';

import MoleculeStyle from '../style/moleculeStyle';

const BeerProducts = ({ products }) => {
    const [beerInfo, setBeerInfo] = useState([]);
    const [info, setInfo] = useState({});

    const [modalVisible, setModalVisible] = useState(false);

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const PressManagement = (pressName, pressPrice, pressBeerInfo, id, pressModalVisible) => {
        setName(pressName);
        setPrice(pressPrice);
        let infos = pressBeerInfo.find((item) => item.weez_id === id);
        if (infos === undefined) {
            infos = {
                description: "Cette biere n'a pas encore de description, nous en sommes désolés.",
                acidite: 0,
                amertume: 0,
                fruite: 0,
                sucre: 0,
                undef: true,
            };
        }
        setInfo(infos);
        setModalVisible(!pressModalVisible);
    };

    useEffect(() => {
        const getBeerInfo = async () => {
            const beerInfoFetched = await AsyncStorage.getItem('beerInfo');
            setBeerInfo(JSON.parse(beerInfoFetched));
        };
        getBeerInfo();
    }, []);

    return (
        <View style={MoleculeStyle.productListContainer}>
            {products.map((item, key) => (
                <Pressable
                    onPress={() => {
                        PressManagement(item.name, item.price, beerInfo, item.id, modalVisible);
                    }}
                    key={[item.id, key]}
                    style={
                        key % 2 === 0
                            ? MoleculeStyle.productContainerRed
                            : MoleculeStyle.productContainerWhite
                    }
                >
                    <View style={MoleculeStyle.productHeaderContainer}>
                        <Text style={MoleculeStyle.productHeaderText}>{item.name}</Text>
                        <Ionicons name="arrow-forward" color="white" size={26} />
                    </View>
                </Pressable>
            ))}

            <PopUp
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                name={name}
                price={price}
                info={info}
            />
        </View>
    );
};

export default BeerProducts;
