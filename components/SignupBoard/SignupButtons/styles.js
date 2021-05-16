import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  signupBtnWrapper: {
    width: '100%',
    height: 50,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row'
  },
  loginBtn: {
    backgroundColor: '#D78A41',
    borderRadius: 10,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 10
  },
  loginText: {
    color: 'white',
    fontWeight: '600'
  },
  signupBtn: {
    backgroundColor: '#D78A41',
    borderRadius: 10,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 10
  },
  signupText: {
    color: 'white',
    fontWeight: '600'
  }
});

export default styles;
