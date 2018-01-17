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
    const {movies, height, width, navigate} = this.props;
    movies.map(movie => movie.favourite = true);
    return (
        <FlatList
            style={[AppStyles.listView, {minHeight: height-160}]}
            data={movies}
            renderItem={({ item, index }) => (
                <CardHolder 
                    movie={item} 
                    width={width}
                    row={index}
                    setFavourite={(isFavourite) => {
                        // TODO remove favourite on click
                    }}
                    onSelect={() => {
                        navigate('Detail', {
                            movie: item, 
                            favourite: movies.find(fm => fm.id === item.id),
                            setFavourite: (isFavourite) => this.setFavourite(isFavourite, item)
                        });
                    }}
                />
            )}
            keyExtractor={item => item.id}
        />
    );
  }
};

export default SavedMovie;