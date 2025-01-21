import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '@screens/auth/SplashScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name='SplashScreen' component={SplashScreen} options={{animation: 'fade'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation