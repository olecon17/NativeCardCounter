import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class PlayerView extends React.Component{
    render() {
        return (
            <View style={styles.container}>
                <Text>SETTINGS</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'column',
        backgroundColor: 'white',
        alignItems: 'center'
    },
});