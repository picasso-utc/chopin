import React from 'react';
import { Text } from 'react-native';
import atomsStyle from '../style/atomsStyle';

const NewsPopUpCredit = ({ date }) => {
    const [trimmedDate] = date.split('T');
    const [year, month, day] = trimmedDate.split('-');

    return (
        <Text style={atomsStyle.newsPopUpCredits}>
            Le {day} / {month} / {year} par la team Com&apos; du Pic&apos;Asso !
        </Text>
    );
};

export default NewsPopUpCredit;
