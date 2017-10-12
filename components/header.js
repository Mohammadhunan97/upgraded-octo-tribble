import React, { Component } from 'react';
import { Text,View, Image,TouchableHighlight,ScrollView } from 'react-native';
import styles from '../stylesheet';

export default class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      menuOverlay: false
    }
  }
  componentDidMount(){
   
  }
  adjustMenu(){
    this.setState({menuOverlay:!this.state.menuOverlay})
    this.props.setMenuOverlay()
  }
  render() {
    let menu = () => {
      if(this.state.menuOverlay === false){
        return(<Image 
        source={require('../assets/menu.png')} 
        style={styles.menu}
        />)
      }else{
        return(<Text style={{fontSize:32,color:'#000',marginLeft:10}}>X</Text>)
      }
    }
    return (
    <ScrollView>
      <View style={styles.header}>
        <TouchableHighlight 
        onPress={() => this.adjustMenu()}
        style={{flex:1}}
        >
        {menu()}
        </TouchableHighlight>
        <Text style={styles.logo}>Explore News</Text>
      </View>
    </ScrollView>
    );
  }
}


