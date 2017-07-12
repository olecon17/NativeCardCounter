import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DealerView from "./dealerView";
import PlayerView from "./playerView";
import SettingsView from "./settingsView";

export default class GameView extends React.Component {
    render() {
        return (
        <View style={styles.container}>
            <SettingsView/>
            <DealerView/>
            <PlayerView/>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'column',
        backgroundColor: 'transparent',
        alignItems: 'center'
    },
});

module.exports = GameView;