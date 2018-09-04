import React, { Component } from 'react';
import { ScrollView, StatusBar, Platform } from 'react-native';
import PropTypes from 'prop-types';
import { ListItem, Separator } from '../components/List';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';

import { changePrimaryColor } from '../actions/theme';

const ICON_SIZE = 23;
const ICON_COLOR = '#868686';

const styles = EStyleSheet.create({
    $blue: '$primaryBlue',
    $green: '$primaryGreen',
    $orange: '$primaryOrange',
    $purple: '$primaryPurple',
});

class Themes extends Component {

    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func,
    };

    handleThemeTap(color) {
        this.props.dispatch(changePrimaryColor(color));
        this.props.navigation.goBack(null);
    }

    render() {
        return (
            <ScrollView>
                <StatusBar barStyle="default" translucent={false} />
                <ListItem
                    text="Blue"
                    onPress={() => this.handleThemeTap(styles.$blue)}
                    selected
                    checkmark={false}
                    iconBackground={styles.$blue}
                />
                <Separator />
                <ListItem
                    text="Green"
                    onPress={() => this.handleThemeTap(styles.$green)}
                    selected
                    checkmark={false}
                    iconBackground={styles.$green}
                />
                <Separator />
                <ListItem
                    text="Orange"
                    onPress={() => this.handleThemeTap(styles.$orange)}
                    selected
                    checkmark={false}
                    iconBackground={styles.$orange}
                />
                <Separator />
                <ListItem
                    text="Purple"
                    onPress={() => this.handleThemeTap(styles.$purple)}
                    selected
                    checkmark={false}
                    iconBackground={styles.$purple}
                />
                <Separator />
            </ScrollView>
        );
    }
}

export default connect()(Themes);