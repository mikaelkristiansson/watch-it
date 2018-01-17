import React, {Component} from 'react';
import {
    View, 
    Text, 
    FlatList, 
    Image
} from 'react-native';

import {POSTER} from '../constants/api';

import {AppStyles, AppColors} from '../theme';

import CardHolder from './cardHolder';

class SavedMovie extends Component {

  render() {
    const {movies, height, width} = this.props;
    return (
        <FlatList
            style={[AppStyles.listView, {minHeight: height}]}
            data={movies}
            renderItem={({ item }) => (
                <CardHolder movie={item} width={width} />
                // <View style={AppStyles.savedCardHolder}>
                //     <Image source={{uri: POSTER+item.poster_path}} style={AppStyles.savedImage} />
                //     <View style={[AppStyles.savedTextHolder, {width: width/1.7}]}>
                //         <Text style={AppStyles.savedTitle}>{item.title}</Text>
                //     </View>
                // </View>
            )}
            keyExtractor={item => item.id}
        />
    );
  }
};

export default SavedMovie;