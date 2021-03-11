import React ,{Component} from 'react';
import {View,
        Text,
        TextInput,
        TouchableOpacity,
        TouchableHighlight,
        TouchableNativeFeedback,} from 'react-native';
import styles from "../assets/css/login";

export default class Login extends Component{
  constructor() {
    super();
    this.state={
      colorbtn :{
        color:'white',
      }
    }
  }
  _btnlogin(){
    console.log('ok')
  }
  render(){
    const colorbtn =this.state.colorbtn;
    return(
      <View style={styles.container}>
        <View style={styles.loginbox}>
          <Text style={styles.title}>ورود</Text>
          <View style={styles.inputgroup}>
            <Text style={styles.input_label_name}>نام کاربری:</Text>
            <TextInput style={styles.input_vorodi_name}
                       placeholder="  نام کاربری را وارد کنید"
                       underlineColorAndroid="transparent"/>
            <Text style={styles.input_label_pass}>رمز عبور:</Text>
            <TextInput style={styles.input_vorodi_pass}
                       placeholder="رمز عبور را وارد کنید"
                       underlineColorAndroid="transparent"
                       secureTextEntry={true}/>
          </View>
          <View style={styles.buttongroup}>
            <TouchableOpacity>
              <Text style={styles.button_vorod}
                    activeOpacity={0.8}>
                ورود به صفحه اصلی
              </Text>
            </TouchableOpacity>
            <TouchableHighlight style={styles.Touch_high}
                                onPress={this._btnlogin}
                                activeOpacity={.6}
                                underlayColor={"yellow"}
                                onShowUnderlay={
                                  ()=>this.setState({
                                    colorbtn :{
                                      color:'black',
                                    }
                                  })
                                }
                                onHideUnderlay={
                                  ()=>this.setState({
                                    colorbtn :{
                                      color:'white',
                                    }
                                  })
                                }
            >
              <Text style={[styles.button_high,colorbtn]}>
                ورود به صفحه
              </Text>
            </TouchableHighlight>
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('rgb(189,239,0)')}>
              <View style={styles.Touch_native}>
                <Text style={styles.button_native}>
                  ورود به صفحه
                </Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableOpacity>
              <Text style={styles.button_forgot}>
                فراموشی رمز عبور
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}
