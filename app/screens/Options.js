import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
    ScrollView, StatusBar, Platform, Linking,
} from 'react-native';
import { ListItem, Separator } from '../components/List';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Options extends Component {
    static propTypes = {
        navigation: PropTypes.object,
        alertWithType: PropTypes.func,
    };

    handlePressThemes = () => {
        const { navigation } = this.props;
        navigation.navigate('Themes');
    };

    handlePressSite = () => {
        Linking.openURL('http://handlebarlabs.com').catch(() => alert("Fixer.io can't be opened right now."));
    };

    render() {
        return (
            <ScrollView>
                <StatusBar translucent={false} barStyle="default" />
                <ListItem
                    text="Themes"
                    onPress={this.handlePressThemes}
                    customIcon={null}
                />
                <Separator />
                <ListItem
                    text="Handlebar Labs"
                    onPress={this.handlePressSite}
                    customIcon={null}
                />
                <Separator />
            </ScrollView>
        );
    }
}
export default Options;