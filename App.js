/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import codePush from 'react-native-code-push';

import {View, Text, StyleSheet, ImageBackground} from 'react-native';

const bg = require('./bg/background.png');

class App extends Component<{}> {
  codePushStatusDidChange(status) {
    switch(status) {
      case codePush.SyncStatus.CHECKING_FOR_UPDATE:
        console.log("Checking for updates.");
        break;
      case codePush.SyncStatus.DOWNLOADING_PACKAGE:
        console.log("Downloading package.");
        break;
      case codePush.SyncStatus.INSTALLING_UPDATE:
        console.log("Installing update.");
        break;
      case codePush.SyncStatus.UP_TO_DATE:
        console.log("Up-to-date.");
        break;
      case codePush.SyncStatus.UPDATE_INSTALLED:
        console.log("Update installed.");
        break;
    }
  }

  codePushDownloadDidProgress(progress) {
    console.log(progress.receivedBytes + " of " + progress.totalBytes + " received.");
  }

  async componentDidMount() {
    const meta = await codePush.getUpdateMetadata();
    console.log('Meta', meta);
  }

  render() {
    return (
      <ImageBackground source={bg} style={styles.container}>
        <Text style={styles.title}>React Native from CodePush</Text>
        <Text>Game has now loaded</Text>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
  },
})

export default codePush(App);
