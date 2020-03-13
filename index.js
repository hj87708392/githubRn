/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './pages/App';
import AppStackNavigator from './pages/navigator/AppStackNavigator'
import {name as appName} from './app.json';



AppRegistry.registerComponent(appName, () => App);
