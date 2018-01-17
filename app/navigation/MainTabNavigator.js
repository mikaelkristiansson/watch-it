import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation';

// SCREENS
import MoviesScreen from '../screens/movies';
import SavedScreen from '../screens/saved';
import DetailScreen from '../screens/detail';

// THEME
import { AppColors, AppStyles } from '../theme';

const movieStack = StackNavigator({
  Movies: {
    screen: MoviesScreen,
  },
  Detail: {
    screen: DetailScreen,
  },
},
{
  navigationOptions: ({ navigation }) => ({
    title: `${navigation.state.routeName.toUpperCase()}`,
    headerStyle: AppStyles.headerStyle,
    headerTintColor: AppColors.topbar.title,
    headerTitleStyle: {
      fontFamily: 'dosis-bold'
    }
  }),
})

const savedStack = StackNavigator({
  Saved: {
    screen: SavedScreen,
  },
},
{
  navigationOptions: ({ navigation }) => ({
    title: `${navigation.state.routeName.toUpperCase()}`,
    headerStyle: AppStyles.headerStyle,
    headerTintColor: AppColors.topbar.title,
    headerTitleStyle: {
      fontFamily: 'dosis-bold'
    }
  }),
})

export default TabNavigator(
  {
    Movies: {
      screen: movieStack,
    },
    Saved: {
      screen: savedStack
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Movies':
            iconName = 'movie-roll';//`ios-film${focused ? '' : '-outline'}`;
            color = AppColors.brand.primary;
            break;
          case 'Saved':
            iconName = 'heart';//`ios-heart${focused ? '' : '-outline'}`;
            color = AppColors.brand.secondary;
            break;
        }
        return (
          <MaterialCommunityIcons
            name={iconName}
            size={34}
            color={focused ? AppColors.tabbar.iconSelected : AppColors.tabbar.iconDefault}//{color}//
          />
        );
      },
      title: `${navigation.state.routeName.toUpperCase()}`,
      header: null,
    }),
    tabBarOptions: {
      style: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: AppColors.tabbar.background, 
        borderTopColor: AppColors.tabbar.border,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 40
      },
      showLabel: false,
    },
    //tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
  }
);
