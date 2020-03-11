import React from 'react';
// import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import page1 from '../page1';
import page2 from '../page2';
import page3 from '../page3';
import HomePage from '../HomePage';

export const AppStackNavigator = createStackNavigator(
    {
        HomePage: {
            screen: HomePage,
        },
        page1: {
            screen: page1,
        },
        page2: {
            screen: page2,
        },
        page3: {
            screen: page3,
        },
    },
    {
        defaultNavigationOptions:{

        }
    }
);

// export default createAppContainer(createSwitchNavigator({
//     Init: InitNavigator,
//     Main: MainNavigator,
// }, {
//     navigationOptions: {
//         header: null,
//     },
// }));