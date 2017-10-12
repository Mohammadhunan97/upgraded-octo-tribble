import React, { Component } from 'react';
import { Image, View } from 'react-native';
import styles from '../stylesheet';

export default class Newssources extends Component {
  render() {
    return (
    	<View>
	    	<View style={{display:'flex',flexDirection:'row',marginTop:10}}>
		        <Image 
		        source={{uri: 'https://mobile.nytimes.com/vi-assets/apple-touch-icon-319373aaf4524d94d38aa599c56b8655.png'}}
		        style={{height:64,width:48,flex:1,resizeMode: 'contain'}}
		        />
		        <Image 
		        source={{uri: 'http://1.gravatar.com/blavatar/782bdf163168ca78e52d32d27b830793?s=114'}}
		        style={{height:64,width:48,flex:1,resizeMode: 'contain'}}
		        />
		        <Image 
		        source={{uri: 'http://a.espncdn.com/wireless/mw5/r1/images/bookmark-icons/espn_icon-152x152.min.png'}}
		        style={{height:64,width:48,flex:1,resizeMode: 'contain'}}
		        />
	        </View>
	        <View style={{display:'flex',flexDirection:'row',marginTop:10}}>
		        <Image 
		        source={{uri:'http://www.mtv.com/apple-touch-icon-precomposed.png'}}
		        style={{height:64,width:48,flex:1,resizeMode: 'contain'}}
		        />
		        <Image 
		        source={{uri: 'http://static.bbci.co.uk/onesport/2.11.232/images/web-icons/bbc-sport-180.png'}}
		        style={{height:64,width:48,flex:1,resizeMode: 'contain'}}
		        />
		        <Image 
		        source={{uri: 'http://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/1.2.0/apple-touch-icon.png'}}
		        style={{height:64,width:48,flex:1,resizeMode: 'contain'}}
		        />
	        </View>
        </View>
    );
  }
}


