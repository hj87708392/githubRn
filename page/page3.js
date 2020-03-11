import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class page2 extends Component {
    
    render() {
        const {navigation}=this.props
        return (
            <View style={styles.container}>
                <Text>  Welcome TO Page3 </Text>
                <Button title={'go back'} onPress={() =>{
                    navigation.goBack();
                }}></Button>
                <Button title={'go page1'} onPress={() =>{
                    navigation.navigate('page1');
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
