import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'RUB';
const TEMP_BASE_PRICE = '10';
const TEMP_QUOTE_PRICE = '679';
const TEMP_CONVERSION_RATE = 67.9;
const TEMP_CONVERSION_DATE = new Date();

class Home extends Component {

    handlePressBaseCurrency = () => {
        console.log("BASE")
    }

    handlePressQuoteCurrency = () => {
        console.log("QUOTE")
    }

    handleTextChange = (text) => {
        console.log("text changed", text);
    }

    handlePressReverseCurrencies = () => {
        console.log("reverse");
    }

    render() {
        return (
            <Container>
                <StatusBar translucent={false} barStyle='light-content' />
                <Logo />
                <InputWithButton
                    defaultValue={TEMP_BASE_PRICE}
                    buttonText={TEMP_BASE_CURRENCY}
                    onPress={this.handlePressBaseCurrency}
                    onChangeText={this.handleTextChange}
                    keyboardType="numeric"
                />
                <InputWithButton
                    buttonText={TEMP_QUOTE_CURRENCY}
                    onPress={this.handlePressQuoteCurrency}
                    editable={false}
                />
                <LastConverted
                    base={TEMP_BASE_CURRENCY}
                    quote={TEMP_QUOTE_CURRENCY}
                    conversionRate={TEMP_CONVERSION_RATE}
                    date={TEMP_CONVERSION_DATE}
                />
                <ClearButton
                    text="Reverse Currencies"
                    onPress={this.handlePressReverseCurrencies}
                />
            </Container>)
    }

}

export default Home;