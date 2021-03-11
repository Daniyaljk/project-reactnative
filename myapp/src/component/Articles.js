import React ,{ Component } from 'react';
import {FlatList,StatusBar,View,Text,SectionList} from 'react-native';
import Article from './Article';
import Header from "./Header";


export default class Articles extends Component{
  _renderArticle(articles){
    return articles.map( ( artticle ,index ) => <Article key={index} image={articles.img_uri_johnny} title={articles.title} text={articles.body}/>)
  }
  _renderFlatListArticle(articles){
    return <Article image={articles.img_uri_johnny} title={articles.title} text={articles.body}/>
  }

  render(){

    /*return(
      <View style={{ flex :1,}}>
        <StatusBar
          hidden
        />
        <FlatList
          data={this.props.articles}
          renderItem={({ item })=> this._renderFlatListArticle(item)}
          keyExtractor={( item,index )=> index}
          ListHeaderComponent={()=> <Header/>}
          numColumns={3}
          columnWrapperStyle={{ flexDirection : 'row-reverse'}}
        />

      </View>
    )*/

    const data =[
      { data : ['اصغر','اکبر','احمد','اکبر','اکبر','اکبر','اکبر','اکبر','اکبر','اکبر','اکبر',], key:'آ'},
      { data : ['بهار','باران','بردیا'], key:'ب'},
      { data : ['جاسم','جعفر','جواد'], key:'ج'},
      { data : ['ناصر','نرگس','نادر'], key:'ن'},
    ];
    return(
      <SectionList
      sections={data}
      renderItem={({item}) => <Text style={{ fontSize: 16, padding :5,fontFamily:'vazir',color :'black' }}>{item}</Text> }
      renderSectionHeader={({ section}) =>  <Text style={{ fontSize: 16, padding :5,fontFamily:'vazir',color :'black' }}>{section.key}</Text> }
      keyExtractor={(item,index) => index}
      />
    )
  }
}
