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
import { swapCurrency, changeCurrencyAmount, getInitialConversion } from '../actions/currencies';

class Home extends Component {

    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func,
        baseCurrency: PropTypes.string,
        quoteCurrency: PropTypes.string,
        amount: PropTypes.number,
        conversionRate: PropTypes.number,
        isFetching: PropTypes.bool,
        lastConversionDate: PropTypes.object,
        primaryColor: PropTypes.string,
    }

    componentWillMount() {
        this.props.dispatch(getInitialConversion());
    }

    handlePressBaseCurrency = () => {
        this.props.navigation.navigate('CurrencyList', { title: 'Base Currency', type: 'base', });
    }

    handlePressQuoteCurrency = () => {
        this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency', type: 'quote', });
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

        let quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2);

        if (this.props.isFetching) {
            quotePrice = '...';
        }

        return (
            <Container backgroundColor={this.props.primaryColor}>
                <StatusBar translucent={false} barStyle='light-content' />
                <Header
                    onPress={this.handlePressSettings}
                />
                <KeyboardAvoidingView behavior="padding">
                    <Logo tintColor={this.props.primaryColor} />
                    <InputWithButton
                        defaultValue={this.props.amount.toString()}
                        buttonText={this.props.baseCurrency}
                        onPress={this.handlePressBaseCurrency}
                        onChangeText={this.handleTextChange}
                        keyboardType="numeric"
                        textColor={this.props.primaryColor}
                    />
                    <InputWithButton
                        buttonText={this.props.quoteCurrency}
                        onPress={this.handlePressQuoteCurrency}
                        editable={false}
                        value={quotePrice}
                        textColor={this.props.primaryColor}
                    />
                    <LastConverted
                        base={this.props.baseCurrency}
                        quote={this.props.quoteCurrency}
                        conversionRate={this.props.conversionRate}
                        date={this.props.lastConversionDate}
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

    const conversionSelector = state.currencies.conversions[baseCurrency] || {};
    const rates = conversionSelector.rates || {};


    return {
        baseCurrency,
        quoteCurrency,
        amount,
        conversionRate: rates[quoteCurrency] || 0,
        isFetching: conversionSelector.isFetching,
        lastConversionDate: conversionSelector.date ? new Date(conversionSelector.date) : new Date(),
        primaryColor: state.theme.primaryColor,
    };
};

export default connect(mapStateToProps)(Home);