import React, {Component} from 'react';
import { View, FlatList, Text, ActivityIndicator, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

// API
import { fetchMoviePopular } from '../api/tmdb';

// COMPONENTS
import CardHolder from '../components/cardHolder';

import { AppStyles, AppColors } from '../theme';

const {height, width} = Dimensions.get('window');

class MoviesScreen extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        headerRight:(
            <TouchableOpacity 
                onPress={() => {navigation.navigate('Search')}}
                style={{marginRight: 10}}
            >
                <Ionicons name={'ios-search'} size={26} color={AppColors.topbar.icon} />
            </TouchableOpacity>
        ),
    });

    constructor() {
        super();
        this.state = {
            movies: [],
            moviesLoaded: false,
            pagePending: true,
            next: 0,
        };

        this.onEndReached = this.onEndReached.bind(this);
    }

    componentWillMount() {
        // LOAD MOVIES
        this.getMovies();
    }

    getMovies(page) {
        fetchMoviePopular(page).then((movies) => {
            this.processsResults(movies);
        });
    }

    processsResults(data) {
        if (!data.results.length) return;
        let newMovies = this.state.movies.concat(data.results);
        newMovies.map(movie => {
            let fav = this.props.screenProps.favourites.find(fm => fm.id === movie.id);
            if(fav) {
                movie.favourite = true;
            } else {
                movie.favourite = false;
            }
        });
        this.setState({
            movies: newMovies,
            moviesLoaded: true,
            pagePending: false,
            next: parseInt(data.page)+1
        });
      }

    getDataSource(movies) {
        return this.state.dataSource.cloneWithRows(movies);
    }

    renderFooter() {
        if (!this.state.next && !this.state.pagePending) {
          return (
            <View>
              <Text>Bottom</Text>
            </View>
          );
        }
    
        return <ActivityIndicator />;
    }

    onEndReached() {
        console.log('onEndReached', this.state.next);
    
        if (this.state.next && !this.state.pagePending) {
          this.getMovies(this.state.next);
        }
    }

    setFavourite = (isFavourite, movie) => {
        if(isFavourite) {
            this.props.screenProps.removeFavourite(movie);
        } else {
            this.props.screenProps.saveFavourite(movie);
        }
        const movies = this.state.movies;
        const idx = movies.findIndex(m => m.id === movie.id);
        let newMovies = movies.slice();
        newMovies[idx] = {
        ...movies[idx],
        favourite: !isFavourite,
        };

        this.setState({
            movies: newMovies,
        });
    }

    render() {
        const { navigate } = this.props.navigation;
        const { favourites } = this.props.screenProps;
        if (!this.state.moviesLoaded) {
            return (
                <View style={AppStyles.container}>
                    <ActivityIndicator />
                </View>
            );
        }
        return (
            <View style={AppStyles.container}>
                <FlatList
                    style={AppStyles.listView}
                    data={this.state.movies}
                    renderItem={({ item, index }) => (
                        <CardHolder 
                            movie={item} 
                            width={width}
                            row={index}
                            setFavourite={(isFavourite) => {
                                this.setFavourite(isFavourite, item);
                            }}
                            onSelect={() => {
                                navigate('Detail', {
                                    movie: item, 
                                    favourite: this.state.movies.find(fm => fm.id === item.id),
                                    setFavourite: (isFavourite) => this.setFavourite(isFavourite, item)
                                });
                            }}
                        />
                    )}
                    onEndReached={this.onEndReached}
                    keyExtractor={item => item.id}
                />
            </View>
        );
    }

}

export default MoviesScreen;