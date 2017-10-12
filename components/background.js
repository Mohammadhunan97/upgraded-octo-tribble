import React, { Component } from 'react';
import { Image } from 'react-native';
import styles from '../stylesheet';

export default class Background extends Component {
  render() {
    return (
        <Image 
        source={require('../assets/space.jpg')}
        style={styles.background}
        />
    );
  }
}


