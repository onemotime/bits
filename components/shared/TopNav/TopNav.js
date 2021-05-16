import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userSlice } from '../../../redux/userSlice';
import { FontAwesome5 } from '@expo/vector-icons';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NAMES, SIZES, COLORS } from '../../../constants/index';

import styles from './styles';

const TopNav = () => {
  const dispatch = useDispatch();
  const { resetUserState } = userSlice.actions;
  const { userName, imageUri } = useSelector(state => state.user);

  const handleLogoutPress = () => {
    dispatch(resetUserState());
  };

  return (
    <View style={styles.topNavWrapper}>
      <View style={styles.iconNameWrapper}>
        <View style={styles.icon}>
        {imageUri
              ? <Image
                  source={{ uri: imageUri }}
                  style={styles.profileImg}
                />
              : <FontAwesome5
                  name={NAMES.USER_CIRCLE_ICON}
                  size={SIZES.USER_CIRCLE_ICON}
                  color={COLORS.WHITE}
                />}
        </View>
        <View style={styles.name}>
          <Text style={styles.text}>{userName}</Text>
        </View>
      </View>
      <View style={styles.gearWrapper}>
        <TouchableOpacity onPress={handleLogoutPress}>
          <FontAwesome5
            name={NAMES.LOGOUT_ICON}
            size={SIZES.LOGOUT_ICON}
            color={COLORS.BLACK}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopNav;
