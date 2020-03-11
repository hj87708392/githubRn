import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomePage from '../HomePage'; 
import DetailPage from '../DetailPage';
import WelcomeHomPage from '../WelcomePage';

export const InitNavigator = createStackNavigator({
        WelcomeHomPage: {
            screen: WelcomeHomPage,
            navigationOptions: {
                        header: null,
                    },
        },
});
export const MainNavigator = createStackNavigator({
    HomePage: {
        screen: HomePage,
        navigationOptions: {
                    header: null,
                },
    },
    DetailPage: {
        screen: DetailPage,
        // navigationOptions: {
        //             header: null,
        //         },
    },
})

export default createAppContainer(createSwitchNavigator({
    Init: InitNavigator,
    Main: MainNavigator,
}, {
    navigationOptions: {
        header: null,
    },
}));