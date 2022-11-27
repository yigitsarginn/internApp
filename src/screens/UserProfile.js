import {useRoute} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import {windowWidth, windowHeight} from '../constans/Dimensions';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import About from '../components/About';

function UserProfile() {
  const route = useRoute();
  const user = route.params.user;

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Image
          style={styles.image}
          source={require('../assets/icons/pp.png')}
        />
        <View style={styles.contentWrapper}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.title}>{user.title}</Text>
          <View style={styles.contactWrapper}>
            <TouchableOpacity>
              <Image
                style={styles.contactIcons}
                source={require('../assets/icons/github.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.contactIcons}
                source={require('../assets/icons/message.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.contactIcons}
                source={require('../assets/icons/addFriend.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{borderWidth: 1, borderColor: '#e8e8e8', marginTop: 40}} />
      <ScrollView bottomViewWrapper>
        <About />
        <Education />
        <Experience />
        <Skills />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    alignSelf: 'center',
    marginTop: 20,
  },
  contentWrapper: {
    alignSelf: 'center',
  },
  name: {
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 10,
  },
  title: {
    alignSelf: 'center',
    color: 'gray',
  },
  contactWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: windowWidth * 0.6,
    marginTop: 20,
  },
  contactIcons: {},
  topView: {},
  bottomViewWrapper: {},
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
  contextIcon: {
    width: 50,
    height: 50,
  },
  expWrapper: {
    flexDirection: 'row',
    marginHorizontal: 15,
  },
  frameWrapper: {
    backgroundColor: 'white',
    marginVertical: 15,
    marginHorizontal: 15,
    borderRadius: 10,
  },
});

export default UserProfile;
