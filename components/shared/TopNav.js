import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userSlice } from '../../redux/userSlice';
import { FontAwesome5 } from '@expo/vector-icons';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

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

const styles = StyleSheet.create({
  topNavWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 70,
    borderColor: 'black',
    marginTop: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#F9BC56',
  },
  iconNameWrapper: {
    flexDirection: 'row',
    marginLeft: 20
  },
  icon: {
    marginRight: 10
  },
  profileImg: {
    width: 40,
    height: 40,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'grey'
  },
  name: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontWeight: '600',
    fontSize: 15
  },
  gearWrapper: {
    marginRight: 20
  }
});

export default TopNav;
