import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from 'react-navigation';

// SCREENS
import MoviesScreen from '../screens/movies';
import SavedScreen from '../screens/saved';

// THEME
import { AppColors, AppStyles } from '../theme';


export default createBottomTabNavigator(
  {
    Movies: {
      screen: MoviesScreen,
    },
    Saved: {
      screen: SavedScreen
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
      // title: `${navigation.state.routeName.toUpperCase()}`,
      // //header: null,
      // headerStyle: AppStyles.headerStyle,
      // headerTintColor: AppColors.topbar.title,
      // headerTitleStyle: {
      //   fontFamily: 'dosis-bold',
      // }
    }),
    tabBarOptions: {
      style: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: AppColors.tabbar.background, 
        borderTopColor: AppColors.tabbar.border,
        // position: 'absolute',
        // left: 0,
        // right: 0,
        // bottom: 0,
        // height: 40
      },
      showLabel: false,
    },
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
  }
);