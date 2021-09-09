import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// FONTS
import { useFonts } from 'expo-font';
// SCREENS
import HomeScreen from './screens/Home'
import AllRecipes from './screens/AllRecipes'
import RecipeDetail from './screens/RecipeDetail';


const Stack = createNativeStackNavigator()




export default function App() {
  const [loaded] = useFonts({
    'lora': require('./assets/fonts/Lora-Regular.ttf'),
    'lexend': require("./assets/fonts/Lexend-Light.ttf")
  });
  if (!loaded) {
    console.log('error')
    return null;
  }


  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name='allRecipes' component={AllRecipes} />
        <Stack.Screen name="recipe_detail" component={RecipeDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

