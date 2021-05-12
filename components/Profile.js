import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { EvilIcons } from '@expo/vector-icons';
import { View, Text, Image,TouchableOpacity, StyleSheet } from 'react-native';
import { updateImageUri } from '../redux/userSlice';
import { ScrollView } from 'react-native-gesture-handler';
import pickIconByType from '../utils/pickIconByType';
import pickTextByType from '../utils/pickTextByType';
import * as ImagePicker from 'expo-image-picker';

const Profile = ({ userInfo, email, imageUri }) => {
  const dispatch = useDispatch();
  const [isActingHabitOn, setActingHabit] = useState(true);
  const [isCompletedHabitOn, setCompletedHabit] = useState(false);

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
        email
      };

      dispatch(updateImageUri(imageUriPayload));
    }
  };

  const handleActingPress = () => {
    setActingHabit(true);
    setCompletedHabit(false);
  };

  const handleCompletePress = () => {
    setActingHabit(false);
    setCompletedHabit(true);
  };

  const handleRegisterHabitPress = () => {};

  return (
    <View style={styles.profileWrapper}>
      <View style={styles.profileTopWrapper}>
        <TouchableOpacity onPress={pickImage} style={styles.profileImgWrapper}>
          {imageUri
            ? <Image
                source={{ uri: imageUri }}
                style={styles.profileImg}
              />
            : <EvilIcons
                name="user"
                size={100}
                color="black"
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
              {userInfo.following > 0
                ? userInfo.following
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
        </View>
        <View style={styles.divideLine} />
      </View>
      <View style={styles.profileBottomWrapper}>
        {isActingHabitOn &&
          userInfo.habits.length > 0
            ? <ScrollView style={styles.scrollView}>
                {userInfo.habits.map(userHabit => {
                  const habitIcon = pickIconByType(userHabit.habitType);
                  const habitText = pickTextByType(userHabit.habitType);

                  return (
                    <TouchableOpacity style={styles.userHabitWrapper} key={userHabit._id}>
                      <View style={styles.imgTextWrapper}>
                        <View>
                          {habitIcon}
                        </View>
                        <View style={styles.habitTypeTextWrapper}>
                          <Text style={styles.habitTypeText}>
                            {habitText}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
          : !isCompletedHabitOn &&
            <View style={styles.registerHabitWrapper}>
              <View>
                <Text style={styles.registerHabitText}>등록된 습관이 없습니다</Text>
              </View>
            </View>}
        {isCompletedHabitOn &&
          userInfo.completedHabits.length > 0
            ? <ScrollView style={styles.scrollView}>
                {userInfo.completedHabits.map((habitType, index) => {
                  const habitIcon = pickIconByType(habitType);
                  const habitText = pickTextByType(habitType);

                  return (
                    <View style={styles.userHabitWrapper} key={index}>
                      <View style={styles.imgTextWrapper}>
                        <View>
                          {habitIcon}
                        </View>
                        <View style={styles.habitTypeTextWrapper}>
                          <Text style={styles.habitTypeText}>{habitText}</Text>
                        </View>
                      </View>
                    </View>
                  );
                })}
              </ScrollView>
            : !isActingHabitOn &&
              <View style={styles.completeHabitWrapper}>
                <View>
                  <Text style={styles.completeHabitText}>완료된 습관이 없습니다</Text>
                </View>
              </View>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileWrapper: {
    backgroundColor: 'white',
    borderWidth: 1,
    flexGrow: 0.7,
  },
  profileTopWrapper: {
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  profileImgWrapper: {
    marginTop: 30
  },
  profileImg: {
    width: 80,
    height: 80,
    borderRadius: 100
  },
  actMateWrapper: {
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '45%'
  },
  actWrapper: {
    alignItems: 'center'
  },
  actText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#E0A935',
    padding: 5
  },
  actCountText: {
    color: '#E0A935'
  },
  mateWrapper: {
    alignItems: 'center'
  },
  mateText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#E0A935',
    padding: 5
  },
  mateCountText: {
    color: '#E0A935'
  },
  doneStatusWrapper: {
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%'
  },
  statusText: {
    fontSize: 12,
    color: '#E0A935'
  },
  divideLine: {
    borderWidth: 1,
    borderColor: '#E0A935',
    width: '80%'
  },
  profileBottomWrapper: {
    borderWidth: 1,
    top: 15
  },
  scrollView: {
    borderWidth: 1,
    height: 300
  },
  userHabitWrapper: {
    backgroundColor: '#E8C06C',
    borderRadius:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    margin: 10
  },
  imgTextWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  habitTypeTextWrapper: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  habitTypeText: {
    fontWeight: '800',
    fontSize: 18,
    color: 'white',
    marginLeft: 30,
  },
  registerHabitWrapper: {
    borderWidth: 1,
    height: '72.5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerHabitText: {
    fontSize: 15,
    fontWeight: '800',
    margin: 4
  },
  completeHabitWrapper: {
    borderWidth: 1,
    height: '72.5%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  completeHabitText: {
    fontWeight: '800'
  }
});

export default Profile;
