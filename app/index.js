import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import RootNavigation from './navigation/RootNavigation';

import movieStore from './stores/movieStore';
import {AppColors} from './theme';

class App extends Component {
  state = {
    isLoadingComplete: false,
    favourites: []
  };

  componentWillMount() {
    movieStore.load().then(fav => {
      if(fav.movies.length) {
        this.setState({
          favourites: fav.movies
        });
      }
    });
  }

  saveFavourite = (movie) => {
    movieStore.save(movie).then((movies) => {
      this.setState({
        favourites: movies
      });
      console.log(this.state.favourites);
    });
  }

  removeFavourite = (movie) => {
    movieStore.remove(movie).then((movies) => {
      this.setState({
        favourites: movies
      });
    });
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
          {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
          <RootNavigation favourites={this.state.favourites} saveFavourite={(movie) => this.saveFavourite(movie)} removeFavourite={(movie) => this.removeFavourite(movie)} />
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        // require('./assets/images/robot-dev.png'),
        require('../assets/images/no_img.jpg'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        // 'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        'dosis-regular': require('../assets/fonts/Dosis-Regular.ttf'),
        'dosis-medium': require('../assets/fonts/Dosis-Medium.ttf'),
        'dosis-bold': require('../assets/fonts/Dosis-Bold.ttf'),
        'dosis-extraBold': require('../assets/fonts/Dosis-ExtraBold.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.backgroundColor,
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});

export default App;
