import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

import Settings from './screens/Settings';

const initialState = {
  settings: [
    {
      type: 'Likes',
      active: 2,
      sample: 'marsalmurphy liked your photo.'
    },
    {
      type: 'Photos',
      active: 2,
      sample: 'marsalmurphy tagged you in a photo.'
    },
    {
      type: 'Comments',
      active: 2,
      sample: 'marsalmurphy commented: "Nice one!"'
    }
  ]
}

const store = createStore(rootReducer, initialState);

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.header}>
        <Text style={styles.title}>Posts, Stories and Comments</Text>
      </View>

      <Settings />
    </Provider>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#292929',
    height: 46,
    justifyContent: 'center',
    paddingHorizontal: 18
  },
  title: {
    color: '#fff',
    fontSize: 20
  }
});
