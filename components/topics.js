import React, { Component } from 'react';
import { Text,View, Linking, ScrollView } from 'react-native';
import styles from '../stylesheet';
import Feed from './feed';



export default class Topics extends Component {
  constructor(props){
    super(props);
    this.state = {
      topicActive: false,
      topic: null
    }
  }
  setTopic(topic){
    this.setState({topicActive:true,topic,})
  }
  render() {
    topics = () => {
      if(this.state.topicActive === false){
        return(<View style={{marginTop:60}}>
        <Text 
        onPress={()=>this.setTopic('news')}
        style={styles.topic}>News</Text>
        <Text 
        onPress={()=>this.setTopic('tech')}
        style={styles.topic}>Tech</Text>
        <Text 
        onPress={()=>this.setTopic('sports')}
        style={styles.topic}>Sports</Text>
        <Text 
        onPress={()=>this.setTopic('entertainment')}
        style={styles.topic}>Entertainment</Text>
        <Text 
        onPress={()=>this.setTopic('finance')}
        style={styles.topic}>Finance</Text>
        </View>)
      }else{
        return(<Feed topic={this.state.topic} />)
      }
    }
    return (
      <ScrollView>
      <View style={styles.topics}>
      {topics()}
      </View>
      </ScrollView>
    );
  }
}


