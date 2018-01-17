import React, {Component} from 'react';
import {
    View,
} from 'react-native';

import {AppStyles, AppColors} from '../theme';

class Triangle extends Component {

  render() {
      const {extraStyle, width} = this.props;
    return (
        <View>
            <View style={[AppStyles.triangle, {...extraStyle}]} />
            {/* <View style={[AppStyles.triangleBack, {width: width, top: (width/2)+55}]} /> */}
        </View>
    );
  }
};

export default Triangle;