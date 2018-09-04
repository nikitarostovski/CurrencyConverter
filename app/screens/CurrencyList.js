import React, { Component } from 'react';
import { FlatList, View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ListItem, Separator } from '../components/List';
import currencies from '../data/currencies';
import { changeBaseCurrency, changeQuoteCurrency } from '../actions/currencies';

const TEMP_CURRENT_CURRENCY = 'CAD';

class CurrencyList extends Component {

    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func,
        baseCurrency: PropTypes.string,
        quoteCurrency: PropTypes.string,
        primaryColor: PropTypes.string,
    };

    handlePress = (currency) => {
        const { type } = this.props.navigation.state.params;
        if (type === 'base') {
            this.props.dispatch(changeBaseCurrency(currency));
        } else if (type === 'quote') {
            this.props.dispatch(changeQuoteCurrency(currency));
        }
        this.props.navigation.goBack(null);
    };

    render() {
        const { type } = this.props.navigation.state.params;
        let currentCurrency = this.props.baseCurrency;
        if (type === 'quote') {
            currentCurrency = this.props.quoteCurrency;
        };
        return (
            <View style={{ flex: 1 }}>
                <StatusBar translucent={false} barStyle="default" />
                <FlatList
                    data={currencies}
                    renderItem={({ item }) => (
                        <ListItem
                            text={item}
                            selected={item === currentCurrency}
                            iconBackground={this.props.primaryColor}
                            onPress={() => this.handlePress(item)}
                        />
                    )}
                    keyExtractor={item => item}
                    ItemSeparatorComponent={Separator}
                />
            </View>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        baseCurrency: state.currencies.baseCurrency,
        quoteCurrency: state.currencies.quoteCurrency,
        primaryColor: state.theme.primaryColor,
    };
};

export default connect(mapStateToProps)(CurrencyList);