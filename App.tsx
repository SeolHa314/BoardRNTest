/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import * as React from 'react';

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BoardScreen } from './screens/BoardScreen';
import { ArticleScreen } from './screens/ArticleScreen';
import { RootStackParamList } from './models/Navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='BoardScreen'>
        <Stack.Screen name='BoardScreen' component={BoardScreen} />
        <Stack.Screen name='ArticleScreen' component={ArticleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;
