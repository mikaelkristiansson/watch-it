import React, {Component} from 'react';
import {
    View, 
    Text, 
    FlatList, 
    Image
} from 'react-native';

import {POSTER} from '../constants/api';

import {AppStyles, AppColors} from '../theme';


class SavedMovie extends Component {

  render() {
    const {movies, height, width} = this.props;
    return (
        <View style={{marginLeft: 10, width: width-20, flexDirection: 'column'}}>
            <FlatList
                style={[AppStyles.listView, {minHeight: height}]}
                data={movies}
                renderItem={({ item }) => (
                    <View style={AppStyles.savedCardHolder}>
                        <Image source={{uri: POSTER+item.poster_path}} style={AppStyles.savedImage} />
                        <View style={[AppStyles.savedTextHolder, {width: width/1.7}]}>
                            <Text style={AppStyles.savedTitle}>{item.title}</Text>
                        </View>
                    </View>
                )}
                keyExtractor={item => item.id}
            />
        </View>
    );
  }
};

export default SavedMovie;