import React, { Component } from 'react';
import { Text,View, Linking, Image, ScrollView } from 'react-native';
import styles from '../stylesheet';
import apikey from '../apikey';
export default class Feed extends Component {
	constructor(props) {
		super(props);
		this.state = {
			articles: []
		}
		if(this.props.topic == "news") {
			this.setArticles("https://newsapi.org/v1/articles?source=the-new-york-times&sortBy=top&apiKey=");
		}else if(this.props.topic == "tech") {
			this.setArticles("https://newsapi.org/v1/articles?source=techcrunch&sortBy=latest&apikey=");
		}else if(this.props.topic == "sports") {
			this.setArticles("https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=");
		}else if(this.props.topic == "entertainment") {
			this.setArticles("https://newsapi.org/v1/articles?source=entertainment-weekly&sortBy=top&apiKey=");
		}else if(this.props.topic == "finance") {
			this.setArticles("https://newsapi.org/v1/articles?source=financial-times&sortBy=top&apiKey=");
		}
	}
	setArticles(url){
		fetch(url + apikey).then((res)=>{
			res.json().then((data)=>{
				let articles = data.articles;
				this.setState({articles,})
			})
		})
	}
  render() {
  	let articles = this.state.articles.map((article,i)=>{
		  		return(<View key={i+'view'}>
		  			<Text key={i+'title'} style={styles.title}>{article.title}</Text>
		  			<Image key={i+'image'} style={styles.articleImage} source={{uri: article.urlToImage}} />
		  			<Text key={i+'author'} style={styles.author}>Written by {article.author || "unknown"}</Text>
		  			</View>)
		})
  	
    return (
     <View style={{flex: 1}}>
 	 <ScrollView style={{flex: 1}}>
      {articles}
      </ScrollView>
      </View>
    )
  }
}


