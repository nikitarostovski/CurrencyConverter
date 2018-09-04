import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import color from 'color';

import styles from './styles';

const InputWithButton = (props) => {

    const { editable = true, onPress, buttonText, textColor } = props;

    const underlayColor = color(styles.$buttonBackgroundColorTint);

    const buttonTextStyles = [styles.buttonText];
    if (textColor) {
        buttonTextStyles.push({ color: textColor });
    }
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
                <Text style={buttonTextStyles}>{buttonText}</Text>
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
    textColor: PropTypes.string,
};

export default InputWithButton;