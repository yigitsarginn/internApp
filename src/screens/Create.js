import React from 'react';
import {useRoute} from '@react-navigation/native';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

function Create() {
  return (
    <View style={styles.container}>
      <View style={styles.frameWrapper}>
        <Text style={styles.bottomTitle}>I'm Looking..</Text>
        <TextInput
          placeholder="Please enter looking property"
          style={styles.bottomContext}
        />
      </View>
      <View style={styles.frameWrapper}>
        <Text style={styles.bottomTitle}>Education Info..</Text>
        <TextInput placeholder="University" style={styles.bottomContext} />
        <TextInput placeholder="Depermant" style={styles.bottomContext} />
        <TextInput placeholder="20xx-20xx" style={styles.bottomContext} />
      </View>
      <View style={styles.frameWrapper}>
        <Text style={styles.bottomTitle}>Experience..</Text>
        <TextInput placeholder="Company" style={styles.bottomContext} />
        <TextInput
          placeholder="20xx April-20xx May"
          style={styles.bottomContext}
        />
        <TextInput placeholder="Department" style={styles.bottomContext} />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Create</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  frameWrapper: {
    backgroundColor: 'white',
    marginVertical: 15,
    marginHorizontal: 15,
    borderRadius: 10,
  },
  bottomTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginHorizontal: 10,
    paddingVertical: 10,
  },
  bottomContext: {
    fontWeight: '500',
    marginHorizontal: 8,
    fontSize: 15,
    lineHeight: 20,
    paddingBottom: 10,
    height: 40,
    borderRadius: 5,
    borderColor: 'lightgray',
    borderWidth: 1,
    marginVertical: 5,
  },
  button: {
    backgroundColor: 'tomato',
    height: 50,
    marginHorizontal: 15,
    justifyContent: 'center',
    borderRadius: 10,
    alignItems: 'center',

  },
  textButton: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
});
export default Create;