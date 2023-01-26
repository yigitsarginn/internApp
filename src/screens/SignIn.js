import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {windowHeight, windowWidth} from '../constans/Dimensions';
import {TextInput} from 'react-native-gesture-handler';

const SignIn = () => {
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../assets/icons/backgrounds/background.png')}>
      <View style={styles.bottomWrapper}>
        <Text>Username</Text>
        <TextInput style={styles.textInput} />
        <Text>Username</Text>
        <TextInput style={styles.textInput} />
        <Text style={{alignSelf: 'flex-end'}}>Forget Password?</Text>
        <TouchableOpacity style={styles.signInWrapper}>
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>
        <View style={styles.signUpTitleWrapper}>
          <Text style={styles.signUpTitle}>Don't have an account?</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.signUp}>Sign Up!</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  textInput: {
    height: 35,
    width: windowWidth * 0.9,
    borderWidth: 1,
    borderColor: 'white',
  },
  bottomWrapper: {
    position: 'absolute',
    height: windowHeight * 0.4,
    backgroundColor: 'red',
    marginTop: windowHeight * 0.5,
    alignSelf: 'center',
  },
  signInWrapper: {
    height: 50,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  signInText: {
    color: 'white',
    alignSelf: 'center',
  },
  signUpTitleWrapper: {
    flexDirection: 'row',
  },
});
