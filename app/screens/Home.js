import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { KeyboardAvoidingView, StatusBar } from 'react-native';
import { connect } from 'react-redux';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';
import { swapCurrency, changeCurrencyAmount } from '../actions/currencies';

const TEMP_QUOTE_PRICE = '679';
const TEMP_CONVERSION_RATE = 67.9;
const TEMP_CONVERSION_DATE = new Date();

class Home extends Component {

    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func,
        baseCurrency: PropTypes.string,
        quoteCurrency: PropTypes.string,
        amount: PropTypes.number,
    }

    handlePressBaseCurrency = () => {
        this.props.navigation.navigate('CurrencyList', { title: 'Base Currency' });
    }

    handlePressQuoteCurrency = () => {
        this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency' });
    }

    handleTextChange = (text) => {
        this.props.dispatch(changeCurrencyAmount(text));
    }

    handlePressReverseCurrencies = () => {
        this.props.dispatch(swapCurrency());
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
                        defaultValue={this.props.amount.toString()}
                        buttonText={this.props.baseCurrency}
                        onPress={this.handlePressBaseCurrency}
                        onChangeText={this.handleTextChange}
                        keyboardType="numeric"
                    />
                    <InputWithButton
                        buttonText={this.props.quoteCurrency}
                        onPress={this.handlePressQuoteCurrency}
                        editable={false}
                    />
                    <LastConverted
                        base={this.props.baseCurrency}
                        quote={this.props.quoteCurrency}
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

const mapStateToProps = (state) => {
    const baseCurrency = state.currencies.baseCurrency;
    const quoteCurrency = state.currencies.quoteCurrency;
    const amount = state.currencies.amount;

    return {
        baseCurrency,
        quoteCurrency,
        amount,
    };
};

export default connect(mapStateToProps)(Home);