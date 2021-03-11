import React ,{ Component } from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default class Header extends Component{
  render(){
    return(
      <View style={styles.view_header}>
        <Text style={styles.text_header}>
          هدر صفحه
        </Text>
      </View>
    )
  }
}
const styles =StyleSheet.create({
  view_header:{
    width :'100%',
    height :50,
    backgroundColor :'#3c3232',
    alignItems :'center',
    justifyContent :'center'
  },
  text_header:{
    fontFamily : 'vazir',
    fontSize :16,

    color:'white',

  }
})
