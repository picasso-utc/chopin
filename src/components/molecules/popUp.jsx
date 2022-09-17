import React from 'react';
import { View, Modal, Pressable, Text } from 'react-native';
import PopUpHeader from '../atoms/popUpHeader';
import PopUpText from '../atoms/popUpText';
import PopUpLigne from '../atoms/popUpLigne';

import MoleculeStyle from '../style/moleculeStyle';

const PopUp = ({ modalVisible, setModalVisible, name, price, info }) => {
    return (
        <Modal
            style={MoleculeStyle.popUpPosition}
            transparent={true}
            animationType="fade"
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <View style={MoleculeStyle.popUpBackground}>
                <View style={MoleculeStyle.popUpContainer}>
                    <View style={MoleculeStyle.exitCrossContainer}>
                        <Pressable onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={MoleculeStyle.exitCrossText}>X</Text>
                        </Pressable>
                    </View>
                    <PopUpHeader
                        setModalVisible={setModalVisible}
                        modalVisible={modalVisible}
                        name={name}
                        price={price}
                        url={info.logoUrl}
                    />
                    <PopUpText text={info.description} />
                    <PopUpLigne name="amertume" rating={info.amertume} />
                    <PopUpLigne name="fruité" rating={info.fruite} />
                    <PopUpLigne name="acidité" rating={info.acidite} />
                    <PopUpLigne name="sucré" rating={info.sucre} />
                </View>
            </View>
        </Modal>
    );
};
export default PopUp;
