import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

const Header = ({ onPress }) => (
    <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Image resizeMode='contain' style={styles.icon} source={require('./images/gear.png')} />
        </TouchableOpacity>
    </SafeAreaView>
);

Header.propTypes = {
    onPress: PropTypes.func,
};

export default Header;