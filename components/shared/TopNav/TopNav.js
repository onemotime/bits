import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userSlice } from '../../../redux/userSlice';
import { FontAwesome5 } from '@expo/vector-icons';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
                  name='user-circle'
                  size={34}
                  color='white'
                />}
        </View>
        <View style={styles.name}>
          <Text style={styles.text}>{userName}</Text>
        </View>
      </View>
      <View style={styles.gearWrapper}>
        <TouchableOpacity onPress={handleLogoutPress}>
          <FontAwesome5
            name='door-open'
            size={24}
            color='black'
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopNav;
