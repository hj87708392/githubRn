import React, { Component } from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import PopularPage from './PopularPage';
import FavoritePage from './FavoritePage';
import MyPage from './MyPage';
import TrendingPage from './TrendingPage';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DynamicTabNavigator from '../navigator/DynamicTabNavigator'
import NavigationUtil from '../navigator/NavigationUtil';
export default class HomePage extends Component {
    

    static navigationOptions={
        title:'HOME',
    }
    render() {
        NavigationUtil.navigation = this.props.navigation;//存储外层的navigation,方法嵌套top导航的跳转
        return (
           <DynamicTabNavigator/>
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
