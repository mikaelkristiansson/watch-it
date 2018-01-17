import React, {Component} from 'react';
import { 
    View, 
    TouchableOpacity, 
    ScrollView, 
    Text, 
    ActivityIndicator,
    Dimensions
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

// COMPONENTS
import LinearImage from '../components/linearImage';
import MovieInfo from '../components/movieInfo';

// API
import { fetchMovieDetail } from '../api/tmdb';
import {BACKDROP} from '../constants/api';

import { AppStyles } from '../theme';

const {height, width} = Dimensions.get('window');

class DetailScreen extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        headerStyle: [AppStyles.headerStyle, {backgroundColor: 'transparent'}],
        title: null,
        headerBackTitleStyle: {
            display: 'none'
        },
        headerRight:(
            <TouchableOpacity 
                onPress={() => {navigation.state.params.setFavourite(screenProps.favourites.find(fm => fm.id === navigation.state.params.movie.id));} }
                style={{marginRight: 10}}
            >
                <Ionicons name={`ios-heart${screenProps.favourites.find(fm => fm.id === navigation.state.params.movie.id) ? '' : '-outline'}`} size={32} color={'#fff'} />
            </TouchableOpacity>
        ),
    });

    constructor() {
        super();
        this.state = {
            movie: {},
            infoLoaded: false
        }
    }

    componentWillMount() {
        this.getMovieDetail(this.props.navigation.state.params.movie.id);
    }

    getMovieDetail(id) {
        fetchMovieDetail(id).then((movie) => {
            this.setState({
                movie: movie,
                infoLoaded: true
            })
        });
    }

    renderMovieInfo() {
        const { movie } = this.state;
        if(this.state.infoLoaded) {
            return (
                <MovieInfo movie={movie} height={height} width={width} />
            )
        } else {
            return <ActivityIndicator />;
        }
    }

    render() {
        const { movie } = this.props.navigation.state.params;
        return (
            <View style={AppStyles.detail}>
                <ScrollView style={{backgroundColor: 'transparent'}}>
                    <LinearImage image={BACKDROP + movie.backdrop_path} />
                    <View style={{zIndex: 10, paddingTop: (height-200)}}>
                        <Text style={AppStyles.movieTitle}>{movie.title.toUpperCase()}</Text>
                        {this.renderMovieInfo()}
                    </View>
                </ScrollView>
            </View>
        );
    }

}

export default DetailScreen;