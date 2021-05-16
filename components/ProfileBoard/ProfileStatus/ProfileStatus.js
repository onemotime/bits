import React from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { updateImageUri } from '../../../redux/userSlice';
import { EvilIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import styles from './styles';

const ProfileStatus = ({
  accessToken,
  imageUri,
  userInfo,
  handleActingPress,
  handleCompletePress,
  handleCalendarPress
}) => {
  const dispatch = useDispatch();

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      const imageUriPayload = {
        uri: result.uri,
        accessToken
      };

      dispatch(updateImageUri(imageUriPayload));
    }
  };

  return (
    <View style={styles.profileTopWrapper}>
      <TouchableOpacity onPress={pickImage} style={styles.profileImgWrapper}>
        {imageUri
          ? <Image
              source={{ uri: imageUri }}
              style={styles.profileImg}
            />
          : <EvilIcons
              name='user'
              size={100}
              color='black'
              style={styles.img}
            />}
      </TouchableOpacity>
      <View style={styles.actMateWrapper}>
        <View style={styles.actWrapper}>
          <Text style={styles.actText}>Act</Text>
          <Text style={styles.actCountText}>
            {userInfo.habits.length > 0
              ? userInfo.habits.length
              : 0}
          </Text>
        </View>
        <View style={styles.mateWrapper}>
          <Text style={styles.mateText}>Mate</Text>
          <Text style={styles.mateCountText}>
            {userInfo.following.length > 0
              ? userInfo.following.length
              : 0}
          </Text>
        </View>
      </View>
      <View style={styles.doneStatusWrapper}>
        <TouchableOpacity>
          <Text
            style={styles.statusText}
            onPress={handleActingPress}
          >
            진행중
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={styles.statusText}
            onPress={handleCompletePress}
          >
            완료
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={styles.statusText}
            onPress={handleCalendarPress}
          >
            달력
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.divideLine} />
    </View>
  );
};

export default ProfileStatus;