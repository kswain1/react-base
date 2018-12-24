// Import a libray that will help create a Component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
//just want access Text and App Registry

// Create Component produces content on the device component nesting
const App = () => (
    <View style={{flex: 1}}>
      <Header headerText={'Records'} />
      <AlbumList />
    </View>
);

// render it to the device
AppRegistry.registerComponent('albums', () => App);
