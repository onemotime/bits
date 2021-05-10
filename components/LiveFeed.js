import React from 'react';
import { EvilIcons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import pickIconByType from '../utils/pickIconByType';

const LiveFeed = () => {
  const mockData = [
    {
      habit: [ { type: 'weight' }, { type: 'read' }, { type: 'swim' }, { type: 'weight' }, { type: 'read' }, { type: 'swim' } ],
      name: 'choy'
    },
    {
      habit: [ { type: 'weight' }, { type: 'swim' }, { type: 'read' }, { type: 'weight' }, { type: 'read' }, { type: 'swim' } ],
      name: 'seulgi'
    },
    {
      habit: [ { type: 'swim' }, { type: 'read' }, { type: 'weight' }, { type: 'weight' }, { type: 'read' } ],
      name: 'susan'
    },
    {
      habit: [ { type: 'swim' }, { type: 'read' }, { type: 'weight' } ],
      name: 'kim'
    },
    {
      habit: [ { type: 'swim' }, { type: 'read' }, { type: 'weight' } ],
      name: 'lee'
    }
  ];

  const handleLikePress = () => {};
  return (
    <View style={styles.liveFeedWrapper}>
      <ScrollView>
        {mockData.length > 0 &&
          mockData.map((item, index) => {

            return (
              <View style={styles.mateLivewrapper} key={index}>
                <View style={styles.profileImg}>
                  <EvilIcons name="user" size={40} color="black" style={styles.img}/>
                  <Text style={styles.name}>{item.name}</Text>
                </View>
                <ScrollView horizontal={true}>
                  {item.habit.length > 0 &&
                    item.habit.map(habitData => {
                      const habitIcon = pickIconByType(habitData.type);

                      return (
                        <TouchableOpacity onPress={handleLikePress}>
                          <View style={styles.habitWrapper}>
                            <View style={styles.statusTextWrapper}>
                              <Text style={styles.statusText}>지금</Text>
                            </View>
                            <View style={styles.habitIcon}>{habitIcon}</View>
                            <Text style={styles.startTimeText}>In haBiTS</Text>
                          </View>
                        </TouchableOpacity>
                      );
                    })}
                </ScrollView>
              </View>
            );
          })}
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  liveFeedWrapper: {
    width: '100%',
    height: '75%',
    backgroundColor: 'white'
  },
  mateLivewrapper: {
    paddingTop: 10,
    paddingBottom: 10
  },
  profileImg: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  img: {
    marginLeft: 10
  },
  name: {
    marginLeft: 4,
    fontWeight: '500'
  },
  habitWrapper: {
    backgroundColor: '#E8C06C',
    margin: 8,
    borderRadius: 10,
    width: 100,
    height: 100,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  statusTextWrapper: {
    width: '100%'
  },
  statusText: {
    textAlign: 'right',
    color: 'white',
    marginRight: 10,
    fontSize: 10
  },
  habitIcon: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  startTimeText: {
    color: 'white',
    fontWeight: '800'
  }
});

export default LiveFeed;
