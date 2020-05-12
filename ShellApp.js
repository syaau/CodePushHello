/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import codePush from 'react-native-code-push';

import {View, Text, StyleSheet} from 'react-native';

class ShellApp extends Component<{}> {
  state = {
    meta: null,
    update: null,
    progress: 0,
  };

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
        codePush.restartApp();
        break;
    }
  }

  codePushDownloadDidProgress(progress) {
    this.setState({
      progress: progress.receivedBytes / progress.totalBytes,
    });
    console.log(progress.receivedBytes + " of " + progress.totalBytes + " received.");
  }

  async componentDidMount() {
    const update = await codePush.checkForUpdate();
    if (update) {
      this.setState({ update });
    }

    const meta = await codePush.getUpdateMetadata();
    this.setState({
      meta,
    });
    console.log('Meta', meta);
  }

  render() {
    const { meta, update, progress } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Call Break</Text>
        <Text>You will see this page only once</Text>
        { update && <Text>Update Available: {update.label}</Text>}
        <Text>Downloading: {Math.floor(progress * 100)}%</Text>
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
  title: {
    fontSize: 32,
  },
});

export default codePush(ShellApp);
