import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import color from 'color';

import styles from './styles';

const InputWithButton = (props) => {

    const { editable = true, onPress, buttonText } = props;

    const underlayColor = color(styles.$buttonBackgroundColorTint);

    const containerStyles = [styles.container];
    if (!editable) {
        containerStyles.push(styles.containerDisabled);
    }
    return (
        <View style={containerStyles}>
            <TouchableHighlight
                underlayColor={underlayColor}
                style={styles.buttonContainer}
                onPress={onPress}
            >
                <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableHighlight>
            <View style={styles.border} />
            <TextInput style={styles.input} underlineColorAndroid="transparent" {...props} />
        </View>
    )
};

InputWithButton.propTypes = {
    onPress: PropTypes.func,
    editable: PropTypes.bool,
    buttonText: PropTypes.string,
};

export default InputWithButton;