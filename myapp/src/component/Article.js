import React ,{ Component } from 'react';
import {View,Image,Text,StyleSheet} from 'react-native';

export default class Article extends Component{
  render(){
    const{image,title,text}=this.props;
    return(
      <View style={styles.container}>
          <Image source={image} style={styles.img}/>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.body} numberOfLines={4}>{text}</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container :{
    margin :5,
    padding :10,
    shadowColor : '#000000',
    elevation : 5,
    shadowOpacity :2,
    shadowOffset :{width :10,height:10},
    flex:.5,
  },
  img :{
    width :'100%',
    height :250,
  },
  title:{
    fontFamily : 'vazir',
    fontSize :18,
  },
  body :{
    fontFamily : 'vazir',
    fontSize :16,
  }
})
