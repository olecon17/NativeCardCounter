import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class DealerView extends React.Component {
    render() {
        return (
            <View style={styles.dealer}>
                <Text>DEALER</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    dealer: {
        flex: 3,
        alignSelf: 'stretch',
        backgroundColor: 'orange',
    },
});

module.exports = DealerView;