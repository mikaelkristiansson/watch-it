import React, {Component} from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View
} from 'react-native';
import {LinearGradient} from 'expo';
import {FontAwesome, Ionicons} from '@expo/vector-icons';

import {POSTER} from '../constants/api';

import {AppStyles, AppColors} from '../theme';

class CardHolder extends Component {

  // state = {
  //   favourite: this.props.favourite
  // }

  render() {
    let {movie} = this.props;
    return (
      <View style={AppStyles.cardItem}>
        <TouchableOpacity activeOpacity={0.9} onPress={this.props.onSelect}>
          <Image
            style={AppStyles.cardImage}
            source={{
            uri: POSTER + movie.poster_path
          }}/>
          <LinearGradient
            colors={[AppColors.linearColorOpacity, 'transparent']}
            start={[1, 0]}
            end={[1, 0.8]}
            style={AppStyles.linearGradiant}/>
          <View style={AppStyles.cardInfoHolder}>
            <View style={AppStyles.cardTextHolder}>
              <Text style={AppStyles.cardTitle}>{movie.title}</Text>
              <Text style={AppStyles.cardDate}>({movie.release_date.substring(0, 4)})</Text>
            </View>
            <View>
              <FontAwesome
                name={'star'}
                size={32}
                color={AppColors.brand.primary}
                style={AppStyles.starIcon}
              />
              <Text style={AppStyles.iconText}>{movie.vote_average.toFixed(1)}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
            this.props.setFavourite(movie.favourite ? true : false);
            //this.setState({favourite: this.state.favourite = !this.state.favourite})
            }} style={{position: 'absolute', zIndex: 4, right: 10, bottom: 10, backgroundColor: 'transparent'}}>
          <Ionicons 
            name={movie.favourite ? 'ios-heart' : 'ios-heart-outline'} 
            size={36}
            color={AppColors.brand.secondary}
          />
        </TouchableOpacity>
      </View>
    );
  }
};

export default CardHolder;