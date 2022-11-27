import React from 'react';
import {View} from 'react-native';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

function PersonProfile() {
  return (
    <View>
      <About />
      <Education />
      <Experience />
      <Skills />
    </View>
  );
}

export default PersonProfile;
