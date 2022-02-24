/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import Config from 'react-native-config';

const App = () => {
  return (
    <SafeAreaView style={styles.area}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.container}>
        <Text style={styles.label}>{Config.TEST}</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: '#000000',
  },
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: '#ffffff',
    fontSize: 26,
  },
});
