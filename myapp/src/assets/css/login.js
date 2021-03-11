import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container :{
    flex :1,
    backgroundColor : '#a071f5',
    justifyContent : 'center',
    alignItems : 'center',
  },
  loginbox :{
    width : '75%',
    backgroundColor: 'white',
    elevation : 20,
    shadowColor :'black',
    borderRadius: 20,
  },
  title :{
    textAlign : 'center',
    fontFamily : 'vazir-Black',
    fontSize : 20,
    padding :10,
  },
  inputgroup :{
    padding: 20,

  },
  input_label_name :{
    fontFamily: 'vazir',
    fontSize : 18,
    marginBottom :5,
  },
  input_vorodi_name:{
    borderWidth:2,
    borderRadius: 50,
    borderColor :'rgba(0,0,0,.4)',
    fontFamily :'vazir',
    fontSize :16,
    marginBottom :10,
  },
  input_label_pass:{
    fontFamily: 'vazir',
    fontSize : 18,
    marginBottom :5,
  },
  input_vorodi_pass:{
    borderWidth:2,
    borderRadius: 50,
    borderColor :'rgba(0,0,0,.4)',
    fontFamily :'vazir',
    fontSize :16,
    textAlign :'right',
  },
  buttongroup :{
    padding :20,
  },
  button_vorod :{
    fontFamily :'vazir',
    fontSize :17,
    backgroundColor : '#0050ae',
    textAlign: 'center',
    marginRight:25,
    marginLeft:25,
    borderRadius :50,
    padding :10,
    marginBottom :15,
  },
  button_forgot:{
    fontFamily :'vazir',
    fontSize :17,
    textAlign: 'center',
    marginRight:25,
    marginLeft:25,
  },
  button_high :{
    fontFamily :'vazir',
    fontSize :17,
    textAlign: 'center',
  },
  Touch_high:{
    marginRight:25,
    marginLeft:25,
    borderRadius :50,
    padding :10,
    backgroundColor : '#0050ae',
    marginBottom : 10,
  },
  Touch_native:{
    marginRight:25,
    marginLeft:25,
    borderRadius :50,
    padding :10,
    backgroundColor : '#0050ae',
    marginBottom : 10,
  },
  button_native :{
    fontFamily :'vazir',
    fontSize :17,
    textAlign: 'center',
  }
});
export default styles;
