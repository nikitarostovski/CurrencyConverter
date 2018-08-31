import React, { Component } from 'react';
import { ScrollView, StatusBar, Platform } from 'react-native';
import Icon from 'react-native-ionicons'
import { ListItem, Separator } from '../components/List';

const ICON_SIZE = 23;
const ICON_COLOR = '#868686';

class Settings extends Component {

    handleThemesTap() {
        console.log("Themes");
    }

    handleLinkTap() {
        console.log("Link");
    }

    render() {
        return (
            <ScrollView>
                <StatusBar barStyle="default" translucent={false} />
                <ListItem
                    text="Themes"
                    onPress={this.handleThemesTap}
                    customIcon={<Icon ios="ios-arrow-forward" android="md-arrow-forward" color={ICON_COLOR} size={ICON_SIZE} />}
                />
                <Separator />
                <ListItem
                    text="fixer.io"
                    onPress={this.handleLinkTap}
                    customIcon={<Icon ios="ios-link" android="md-link" color={ICON_COLOR} size={ICON_SIZE} />}
                />
                <Separator />
            </ScrollView>
        );
    }
}

export default Settings;