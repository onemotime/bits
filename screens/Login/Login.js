import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSignin } from '../../redux/userSlice';
import { View,  TouchableOpacity } from 'react-native';
import pickModalMessage from '../../utils/pickModalMessage';
import validateEmail from '../../utils/validateEmail';
import checkInputStatus from '../../utils/checkInputStatus';

import Loading from '../Animations/Loading/Loading';
import LogoName from '../../components/shared/LogoName';
import LoginInput from '../../components/LoginBoard/LoginInput/LoginInput';
import LoginButtons from '../../components/LoginBoard/LoginButtons/LoginButtons';
import LoginModal from '../../components/ReusableModal/ReusableModal';

import {
  GoogleIcon,
  FacebookIcon,
  InstagramIcon
} from '../../assets/svgs/icon';

import styles from './styles';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isModalShown, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const { isFetching, pushToken } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleLoginPress = () => {
  //   const isInputImproper = checkInputStatus(
  //     'login',
  //     email,
  //     password,
  //     null,
  //     null,
  //     setModalMessage,
  //     setModal
  //   );

  //   if (isInputImproper) return;

    const loginInput = {
      email,
      password,
      pushToken
    };

    dispatch(fetchSignin(loginInput));
  };

  const handleSingupPress = () => {
    navigation.navigate('Signup');
  };

  const handleModalPress = () => {
    setModalMessage('');
    setModal(false);
  };

  return (
    <>
      {isModalShown &&
        <LoginModal
          message={modalMessage}
          visible={isModalShown}
          onButtonPress={handleModalPress}
        />}
      {isFetching
        ? <Loading />
        : <View style={styles.wrapper}>
            <View style={styles.loginWrapper}>
              <LogoName />
              <LoginInput
                email={email}
                onEmailChange={setEmail}
                password={password}
                onPasswordChange={setPassword}
              />
              <LoginButtons
                onLoginPress={handleLoginPress}
                onSingupPress={handleSingupPress}
              />
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
          </View>}
    </>
  );
};

export default Login;
