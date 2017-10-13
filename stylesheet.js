import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex:1

  },
  header: {
    display: 'flex'
  },
  logo: {
    flex: 1,
    textAlign: 'center',
    fontSize: 28,
    color: '#410099',
    fontWeight: "400",
    position: 'relative',
    width:200,
    left:100,
    bottom: 30,
    zIndex: 10
  },
  menu: {
    width: 42,
    height:42
  },
  background: {
    flex: 1,
    width: 411,
    height: 250
  },
  mainText: {
    textAlign: 'center',
    color: '#000',
    fontSize: 18,
    marginTop: 20,
    marginLeft: 60,
    marginRight: 60
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#272222',
    height: 80
  },
  topics: {
    backgroundColor:'#410099',
    alignItems: 'center',
    height:580
  },
  topic: {
    color: '#FFF',
    fontSize: 32,
    margin: 5,
    marginTop:10
  },
  title: {
    textAlign: 'center',
    backgroundColor: '#FFF',
    fontSize: 18,
    marginTop:5,
    marginBottom: 5,
    color: '#000'
  },
  articleImage: {
    width: 250,
    height: 200,
    marginLeft: 80
  },
  author: {
    textAlign: 'center',
    color: '#000'
  },
  article: {
    backgroundColor: '#EEE'
  },
  description: {
    textAlign: 'justify',
    marginLeft: 50,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    color: '#000'
  },
  url: {
    color: 'blue',
    textAlign: 'center'
  }
});

module.exports = styles;