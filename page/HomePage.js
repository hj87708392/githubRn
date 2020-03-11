import React, { Component } from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class HomePage extends Component {
    static navigationOptions={
        title:'HOME',
    }
    render() {
        const {navigation}=this.props
        return (
            <View style={styles.container}>
                <Text>  Welcome To HomePage </Text>
                <Button title={'go page1'} onPress={() => {
                    navigation.navigate('page1');
                }}></Button>
                <Button title={'go page2'} onPress={() => {
                    navigation.navigate('page2');
                }}></Button>
                 <Button title={'go page2'} onPress={() => {
                    navigation.navigate('page3');
                }}></Button>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
