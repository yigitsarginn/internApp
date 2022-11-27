import React from 'react';
import {useRoute} from '@react-navigation/native';
import {View, Text, Image, StyleSheet} from 'react-native';

function Skills() {
  const route = useRoute();
  const user = route.params.user;

  return (
    <View style={styles.frameWrapper}>
      <Text style={styles.bottomTitle}>Skills</Text>
      <View style={styles.expWrapper}>
        <View>
          <Image
            style={styles.contextIcon}
            source={require('../assets/icons/skillsIcon.png')}
          />
        </View>
        <View>
          <Text style={[styles.bottomContext, {fontWeight: '700'}]}>
            {user.skills[0]}
          </Text>
          <Text style={[styles.bottomContext, {fontWeight: '700'}]}>
            {user.skills[1]}
          </Text>
          <Text style={[styles.bottomContext, {fontWeight: '700'}]}>
            {user.skills[2]}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  frameWrapper: {
    backgroundColor: 'white',
    marginVertical: 15,
    marginHorizontal: 15,
    borderRadius: 10,
  },
  expWrapper: {
    flexDirection: 'row',
    marginHorizontal: 15,
  },
  bottomTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginHorizontal: 15,
    paddingVertical: 10,
  },
  contextIcon: {
    width: 50,
    height: 50,
  },

  bottomContext: {
    fontWeight: '500',
    marginHorizontal: 8,
    fontSize: 15,
    lineHeight: 20,
    paddingBottom: 10,
  },
});
export default Skills;
