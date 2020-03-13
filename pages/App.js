import React,{Component} from 'react';
import {Provider} from 'react-redux'
import AppStackNavigator from './navigator/AppStackNavigator'
import store from './store'
// import {createAppContainer} from 'react-navigation'
export default class App extends Component{
    render(){
        return <Provider store={store}>
            <AppStackNavigator />
        </Provider>
    }
}

// export default createAppContainer(AppStackNavigator)
