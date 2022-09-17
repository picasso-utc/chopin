import PopUp from './popUp';
import React, { useEffect, useState } from 'react';
import { View, Text, Pressable } from 'react-native';

import MoleculeStyle from '../style/moleculeStyle';
import { getBeerInfo } from '../../api/apiCalls';

const BeerProducts = ({ products }) => {
    const [beerInfo, setBeerInfo] = useState([]);
    const [info, setInfo] = useState({});

    const [modalVisible, setModalVisible] = useState(false);

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const PressManagement = (name, price, beerInfo, id, modalVisible) => {
        setName(name);
        setPrice(price);
        setInfo(beerInfo.find((item) => item.weezId === id));
        setModalVisible(!modalVisible);
    };

    useEffect(() => {
        getBeerInfo()
            .then((res) => {
                setBeerInfo(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .done();
    }, []);

    return (
        <View style={MoleculeStyle.productListContainer}>
            {products.map(({ name, price, id }, key) => (
                <Pressable
                    onPress={() => {
                        PressManagement(name, price, beerInfo, id, modalVisible);
                    }}
                    key={key}
                    style={
                        key % 2 === 0
                            ? MoleculeStyle.productContainerRed
                            : MoleculeStyle.productContainerWhite
                    }
                >
                    <View style={MoleculeStyle.productHeaderContainer}>
                        <Text style={MoleculeStyle.productHeaderText}>{name}</Text>
                        <Text style={MoleculeStyle.productHeaderPrice}>{`${(
                            Math.round(price) / 100
                        ).toFixed(2)}€`}</Text>
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
