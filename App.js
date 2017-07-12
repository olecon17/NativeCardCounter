import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import GameView from "./gameview";



export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <GameView></GameView>
            </View>

        )
    }

    componentDidMount() {
        console.log("mounted");

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: '#644B62',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
