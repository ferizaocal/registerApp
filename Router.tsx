import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';

import Welcome from './src/pages/Welcome';
import MemberSing from './src/pages/MemberSing';
import MemberResult from './src/pages/MemberResult';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="WelcomeScreen" component={Welcome} />
        <Stack.Screen name="MemberSignScreen" component={MemberSing} />
        <Stack.Screen name="MemberResultScreen" component={MemberResult} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
