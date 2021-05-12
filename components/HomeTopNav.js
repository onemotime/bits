import React from 'react';
import { useSelector } from 'react-redux';
import {
  FontAwesome5
} from '@expo/vector-icons';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeTopNav = () => {
  const { userName, imageUri } = useSelector(state => state.user);
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
        <TouchableOpacity>
          <FontAwesome5
            name="door-open"
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
    borderWidth: 1,
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
    width: 50,
    height: 50,
    borderRadius: 100,
    borderWidth: 1
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

export default HomeTopNav;
