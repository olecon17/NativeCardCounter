import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class PlayerView extends React.Component{
    render() {
        return(
            <View style={styles.container}>
                <Text>PLAYERS</Text>
                <View style={styles.player}/>
            </View>

        )
    }
    componentDidMount() {
    console.log("player mount");
    }
};

const styles = StyleSheet.create({
    hand: {
        width: 100,
        height: 100,

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    },
    container: {
        flex: 5,
        alignSelf: 'stretch',
        flexDirection: 'row',
        backgroundColor: 'yellow'
    },
    player: {
        width: 150,
        height: 100,

        backgroundColor: 'blue'
    }
});