import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, ForgotPassword, Register} from '../screens';

const Stack = createNativeStackNavigator();
function AuthNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* ... */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Natifications" component={Natifications} />;
        <Stack.Screen name="Profile" component={Profile} />;
        <Stack.Screen name="Settings" component={Settings} />;
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AuthNavigator;
