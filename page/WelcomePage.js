import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class WelcomePage extends Component {
    // componentDidMount() {
    //     this.timer = setTimeout(() => {
    //         //跳转到首页
    //         const {navigation}=this.props;
            
    //         navigation.navigate("Main")
    //        // NavigationUtil.resetToHomePage(this.props);
    //     }, 200);
    // }

    // componentWillMount() {
    //     //页面销毁时，清空计时器
    //     this.timer && clearTimeout(this.timer);
    // }

    render() {
        return (
            <View style={styles.container}>
                <Text>  Welcome TO Page1 </Text>
                <Button title={'go back'} onPress={() =>{
                    navigator.goBack();
                }}></Button>
                <Button title={'go back'} onPress={() =>{
                    navigator.navigate('page2');
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
