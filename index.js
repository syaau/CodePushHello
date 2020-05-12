/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

let App;
if (process.env.NOT_SHELL || __DEV__) {
  App = require('./App').default;
} else {
  App = require('./ShellApp').default;
}

AppRegistry.registerComponent(appName, () => App);
