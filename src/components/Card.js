import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {windowWidth} from '../constans/Dimensions';
import UserProfile from '../screens/UserProfile';

function Card({user}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.cardWrapper}
      onPress={() => navigation.navigate('UserProfile', {user})}>
      <Image
        style={styles.avatarStyle}
        source={require('../assets/icons/pp.png')}
      />
      <View style={styles.innerContext}>
        <Text style={styles.nameStyle}>{user.name}</Text>
        <Text style={styles.universityStyle}>{user.education[1]}</Text>
        <Text style={styles.departmantStyle}>{user.education[3]}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    width: windowWidth * 0.9,
    backgroundColor: 'white',
    alignSelf: 'center',
    height: 90,
    borderRadius: 10,
    flexDirection: 'row',
    marginBottom: 10,
  },
  nameStyle: {
    marginLeft: 10,
    marginTop: 5,
    fontSize: 19,
    fontWeight: '700',
  },
  avatarStyle: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    marginLeft: 10,
  },
  titleStyle: {
    fontSize: 13,
  },
  universityStyle: {
    marginLeft: 10,
    color: 'gray',
    fontWeight: '600',
  },
  departmantStyle: {
    marginLeft: 10,
    color: 'gray',
    fontWeight: '600',
  },
  innerContext: {
    justifyContent: 'space-evenly',
  },
});

export default Card;
