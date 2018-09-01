import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { KeyboardAvoidingView, StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'RUB';
const TEMP_BASE_PRICE = '10';
const TEMP_QUOTE_PRICE = '679';
const TEMP_CONVERSION_RATE = 67.9;
const TEMP_CONVERSION_DATE = new Date();

class Home extends Component {

    static propTypes = {
        navigation: PropTypes.object,
    }

    handlePressBaseCurrency = () => {
        this.props.navigation.navigate('CurrencyList', { title: 'Base Currency' });
    }

    handlePressQuoteCurrency = () => {
        this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency' });
    }

    handleTextChange = (text) => {
        console.log("text changed", text);
    }

    handlePressReverseCurrencies = () => {
        console.log("reverse");
    }

    handlePressSettings = () => {
        this.props.navigation.navigate('Options');
    }

    render() {
        return (
            <Container>
                <StatusBar translucent={false} barStyle='light-content' />
                <Header
                    onPress={this.handlePressSettings}
                />
                <KeyboardAvoidingView behavior="padding">
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
                </KeyboardAvoidingView>
            </Container>)
    }

}

export default Home;