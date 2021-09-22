
import React from 'react';
import {  keyboardAvoidingView } from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import "react-native-gesture-handler";
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './screens/MapScreen';
import FoodScreen from './screens/FoodScreen';

export default function App() {
  const Stack = createStackNavigator();
  
  return (
    <Provider  store={store}>
       <NavigationContainer>
          <SafeAreaProvider>
            <KeyboardAvoidingView 
              behavior={platform.OS === "ios" ? "padding" : "height"}
              style={{ flex: 1 }}
              KeyboardVerticalOffset={Platform.os === "ios" ? -64 : 0}
            >
                <Stack.Navigator>
                <Stack.Screen name="HomeScreen" component={HomeScreen}
                  options={{
                    headerShown:false,
                  }}
                />
                <Stack.Screen name="MapScreen" component={MapScreen}
                  options={{
                    headerShown:false,
                  }}
                />
                <Stack.Screen name="FoodScreen" component={FoodScreen}
                options={{
                  headerShown:false,
                }}
                />
              </Stack.Navigator>
            </KeyboardAvoidingView>
          </SafeAreaProvider> 
        </NavigationContainer>   
    </Provider>
    
  );
}


