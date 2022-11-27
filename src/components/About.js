import React from 'react';
import {useRoute} from '@react-navigation/native';
import {View, Text, StyleSheet} from 'react-native';

function About() {
  console.log('======');
  const route = useRoute();
  const user = route.params.user;

  return (
    <View style={styles.frameWrapper}>
      <Text style={styles.bottomTitle}>{user.about[0]}</Text>
      <Text style={styles.bottomContext}>{user.about[1]}</Text>
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
  bottomTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginHorizontal: 15,
    paddingVertical: 10,
  },
  bottomContext: {
    fontWeight: '500',
    marginHorizontal: 8,
    fontSize: 15,
    lineHeight: 20,
    paddingBottom: 10,
  },
});
export default About;
