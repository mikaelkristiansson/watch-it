import React, {Component} from 'react';
import { View, ListView, Text, ActivityIndicator, TouchableOpacity, Dimensions } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

// API
import { fetchMoviePopular } from '../api/tmdb';

// COMPONENTS
import CardHolder from '../components/cardHolder';

import { AppStyles, AppColors } from '../theme';

const {height, width} = Dimensions.get('window');

class MoviesScreen extends Component {
    static navigationOptions = {
        headerRight:(
            <TouchableOpacity 
                onPress={() => {alert('gg')} }
                style={{marginRight: 10}}
            >
                <Ionicons name={'ios-search'} size={26} color={AppColors.topbar.icon} />
            </TouchableOpacity>
        ),
    };

    constructor() {
        super();
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
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
            dataSource: this.getDataSource(newMovies),
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
            dataSource: this.state.dataSource.cloneWithRows(newMovies),
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
                <ListView
                    style={AppStyles.listView}
                    ref='listview'
                    dataSource={this.state.dataSource}
                    renderFooter={() => this.renderFooter()}
                    renderRow={(movie) => (
                        <CardHolder
                            movie={movie}
                            width={width}
                            setFavourite={(isFavourite) => {
                                this.setFavourite(isFavourite, movie);
                            }}
                            onSelect={() => {
                                navigate('Detail', {
                                    movie: movie, 
                                    favourite: favourites.find(fm => fm.id === movie.id), 
                                    setFavourite: (isFavourite) => this.setFavourite(isFavourite, movie)
                                });
                            }}
                        />
                    )}
                    onEndReached={this.onEndReached}
                    automaticallyAdjustContentInsets={false}
                    keyboardDismissMode='on-drag'
                    showsVerticalScrollIndicator={true}
                />
            </View>
        );
    }

}

export default MoviesScreen;