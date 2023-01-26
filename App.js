import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from './src/screens/Profile';
import Network from './src/screens/Network';
import UserProfile from './src/screens/UserProfile';
import Create from './src/screens/Create';
import Home from './src/screens/Home';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Create" component={Create} />
      <Tab.Screen name="Network" component={Network} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="UserProfile" component={UserProfile} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false, headerTransparent: true}}>
        <Stack.Screen name="MyTabs" component={MyTabs} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
