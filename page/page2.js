import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class page2 extends Component {

    render() {
        const {navigation}=this.props
        return (
            <View style={styles.container}>
                <Text>  Welcome TO Page2 </Text>
                <Button title={'go back'} onPress={() =>{
                    navigation.goBack();
                }}></Button>
                <Button title={'go page3'} onPress={() =>{
                    navigation.navigate('page3');
                }}></Button>
            </View>
                   
        );
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
