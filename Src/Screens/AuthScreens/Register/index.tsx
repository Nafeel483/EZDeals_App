import React, { useState, useEffect } from 'react';
import {
  StatusBar,
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  ScrollView
} from 'react-native';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionic from 'react-native-vector-icons/Ionicons';
import Styles from './Styles';
import Header from '../../../Components/HeaderLogo';

const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export type Props = {
  navigation: any;
};

const Register = (props: any) => {
  const { navigation } = props;

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passCheck, setPassCheck] = useState(false)
  const [repeatPass, setRepeatPass] = useState("")
  const [rePassCheck, setRePassCheck] = useState(false)
  const [invalid, setInvalid] = useState(false)
  const [invalidPass, setInvalidPass] = useState(false)

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const onSubmit = () => {
    if (email == "" || email != 'marco@gmail.com' || reg.test(email) === false) {
      setInvalid(true)
    }
    else if (password == repeatPass) {
      setInvalidPass(true)
    }
    else {
      navigation.navigate("CreateProfile")
    }
  }


  return (
    <SafeAreaView style={[Styles.safeAreaContainer]} edges={{ top: "off" }}>
      <StatusBar barStyle={'light-content'} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === "android" ? 50 : 0}
        style={[Styles.safeAreaContainer]}>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Styles.bottomHeadContainer}>

            <View style={Styles.mainContainer}>
              {/* Header */}
              <View style={Styles.mainHeadContainer}>
                <Header />
              </View>

              {/* Main Data Content */}
              <View style={Styles.centerContainer}>
                <View style={Styles.headerWrapper}>
                  <Text style={[Styles.welcomeText]}>{`Register`}</Text>

                  {/* Do not have an account? */}
                  <View style={Styles.accountWrap}>
                    <Text style={[Styles.messageText]}>{`Already Have an Account?`}</Text>
                    <TouchableOpacity onPress={() => { navigation.navigate("Login") }}>
                      <Text style={Styles.registerText}>{`Login`}</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* Email */}
                <View style={[Styles.wrapper]}>
                  <TextInput style={[Styles.textInput]}
                    value={email}
                    placeholder={"Email"}
                    placeholderTextColor={"rgba(60, 60, 67, 0.6)"}
                    autoCapitalize='none'
                    onChangeText={(value) => {
                      setEmail(value)
                      setInvalid(false)
                    }} />
                </View>

                {/* Password */}
                <View style={[Styles.wrapper]}>
                  <TextInput style={[Styles.textInput]}
                    value={password}
                    placeholder={"Password"}
                    placeholderTextColor={"rgba(60, 60, 67, 0.6)"}
                    autoCapitalize='none'
                    secureTextEntry={passCheck == false ? true : false}
                    onChangeText={(value) => {
                      setPassword(value)
                      setInvalidPass(false)
                    }} />
                  <TouchableOpacity onPress={() => { setPassCheck(!passCheck) }}>
                    {
                      passCheck == false ?
                        <Ionic name='eye-off' size={24} style={[Styles.iconStyle]} />
                        :
                        <Ionic name='eye' size={24} style={[Styles.iconStyle]} />
                    }
                  </TouchableOpacity>
                </View>

                {/* Repeat Password */}
                <View style={[Styles.wrapper]}>
                  <TextInput style={[Styles.textInput]}
                    value={repeatPass}
                    placeholder={"Repeat Password"}
                    placeholderTextColor={"rgba(60, 60, 67, 0.6)"}
                    autoCapitalize='none'
                    secureTextEntry={rePassCheck == false ? true : false}
                    onChangeText={(value) => {
                      setRepeatPass(value)
                      setInvalidPass(false)
                    }} />
                  <TouchableOpacity onPress={() => { setRePassCheck(!rePassCheck) }}>
                    {
                      rePassCheck == false ?
                        <Ionic name='eye-off' size={24} style={[Styles.iconStyle]} />
                        :
                        <Ionic name='eye' size={24} style={[Styles.iconStyle]} />
                    }
                  </TouchableOpacity>
                </View>
                {invalid == true && (
                  <Text style={Styles.errorText}>{`Incorrect Email Address`}</Text>
                )}
                {invalidPass == true && (
                  <Text style={Styles.errorText}>{`Password & Repeat Password are not Matched`}</Text>
                )}

                {/* Register Button */}
                <TouchableOpacity onPress={() => { onSubmit() }}
                  style={Styles.loginButton}>
                  <Text style={Styles.loginText}>{`Register`}</Text>
                </TouchableOpacity>

              </View>
            </View>


          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Bottom  part of the screen */}
      <View style={Styles.bottomHeadContainer}>

        <View style={Styles.socialBoxWrap}>
          <Text style={[Styles.socialText]}>{`Register with`}</Text>
        </View>

        <View style={Styles.nextButtonInner}>
          {/* Google Icon */}
          <TouchableOpacity>
            <Image source={Images.google} style={Styles.nextIcon} />
          </TouchableOpacity>

          {/* Apple Icon */}
          <TouchableOpacity>
            <Image source={Images.apple} style={Styles.nextIcon} />
          </TouchableOpacity>
        </View>



      </View>

    </SafeAreaView>
  );
}

export default Register;
