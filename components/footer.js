import React, { Component } from 'react';
import { Text,View, Linking } from 'react-native';
import styles from '../stylesheet';

export default class Footer extends Component {
  render() {
    return (
      <View style={styles.footer}>
        <Text
         style={{color:'#FFF',marginTop:20}}
         onPress={()=> Linking.openURL('https://mohammadhunan.com/')}
         >Developed by Mohammad Chughtai</Text>
        <Text 
        style={{color:'#FFF'}}
        onPress={()=> Linking.openURL('https://newsapi.org/')}
        >Powered by News API</Text>
      </View>
    );
  }
}


