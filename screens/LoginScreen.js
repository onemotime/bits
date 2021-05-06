import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {
  GoogleIcon,
  FacebookIcon,
  InstagramIcon,
} from '../assets/svgs/icon';

const LoginScreen = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.loginWrapper}>
        <View style={styles.logoWrapper}>
          <Text style={styles.logoText}>BiTS</Text>
        </View>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>
            Sign in with social networks
          </Text>
        </View>
        <View style={styles.iconWrapper}>
          <TouchableOpacity>
            <GoogleIcon size={30} />
          </TouchableOpacity>
          <TouchableOpacity>
            <FacebookIcon size={30} />
          </TouchableOpacity>
          <TouchableOpacity>
            <InstagramIcon size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8BE64'
  },
  loginWrapper: {
    backgroundColor: '#E9C375',
    width: '80%',
    height: '30%',
    borderRadius: 10
  },
  logoWrapper: {
    alignItems: 'center',
    marginTop: 20
  },
  logoText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  descriptionWrapper: {
    marginTop: 30,
    marginBottom: 30,
    alignItems: 'center',
  },
  description: {
    color: '#78746D',
    fontFamily: 'Rubik_400Regular',
    fontSize: 15,
  },
  iconWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginHorizontal: 30,
  }
});

export default LoginScreen;
