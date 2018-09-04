import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';

import styles from './styles';

const Container = ({ children, backgroundColor }) => {
    let containerStyles = [styles.container];
    if (backgroundColor) {
        containerStyles.push({ backgroundColor: backgroundColor });
    }
    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={containerStyles}>
                {children}
            </View>
        </TouchableWithoutFeedback >
    );
};

Container.propTypes = {
    children: PropTypes.any,
    backgroundColor: PropTypes.string,
};

export default Container;