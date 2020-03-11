import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class page1 extends Component {
    render() {
        const {navigation}=this.props
        return (
            <View style={styles.container}>
                <Text>  Welcome TO Page1 </Text>
                <Button title={'go back'} onPress={() =>{
                    navigation.goBack();
                }}></Button>
                <Button title={'go page2'} onPress={() =>{
                    navigation.navigate('page2');
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
