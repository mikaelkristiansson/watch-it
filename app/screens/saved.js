import React, {Component} from 'react';
import { View, Text, Dimensions } from 'react-native';

import { AppStyles } from '../theme';

import SavedMovie from '../components/savedMovie';

const {height, width} = Dimensions.get('window');

class SavedScreen extends Component {

    render() {
        const { favourites } = this.props.screenProps;
        return (
            <View style={AppStyles.container}>
            <SavedMovie movies={favourites} width={width} height={height} />
            </View>
        );
    }

}

export default SavedScreen;