import React from 'react';
import { Modal, Pressable, ScrollView, Text, View } from 'react-native';
import MoleculeStyle from '../style/moleculeStyle';
import NewsPopUpHeader from '../atoms/newsPopUpHeader';
import NewsPopUpPhoto from '../atoms/newsPopUpPhoto';
import NewsPopUpText from '../atoms/newsPopUpText';
import NewsPopUpCredit from '../atoms/newsPopUpCredit';

const NewsPopUp = ({ modalVisible, setModalVisible, newsInfo }) => (
    <Modal
        style={MoleculeStyle.popUpPosition}
        animationType="fade"
        transparent
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
    >
        <View style={MoleculeStyle.popUpBackground}>
            <View style={MoleculeStyle.newsPopUpContainer}>
                <View style={MoleculeStyle.newsExitCrossContainer}>
                    <NewsPopUpHeader title={newsInfo.title} />
                    <Pressable onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={MoleculeStyle.exitCrossText}>X</Text>
                    </Pressable>
                </View>
                <ScrollView>
                    <NewsPopUpPhoto image={{ uri: newsInfo.image }} />
                    <NewsPopUpText text={newsInfo.content} />
                    <NewsPopUpCredit date={newsInfo.publication_date} />
                </ScrollView>
            </View>
        </View>
    </Modal>
);

export default NewsPopUp;
