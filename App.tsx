import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigation/RootNavigator';
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';
import { useFonts } from 'expo-font';
import './global.css';
import { Platform, Text, View } from 'react-native';
import LanguageSelectionScreen from 'screens/LanguageSelectionScreen';
import { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Camera } from 'react-native-vision-camera';

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });
  

  


  useEffect(() => {
    if (fontsLoaded) {
      (async () => {
        
        const cameraPermission = await Camera.requestCameraPermission();
        if (cameraPermission === 'denied') {
          console.warn('Camera permission denied');
        }
      })();
    }
  }, [fontsLoaded]);

  

  if (!fontsLoaded) return null;

  return (
    <>
      {
        Platform.OS === 'web' ? (
          <View className="flex-1 bg-white items-center justify-center ">
            <View className="flex-1 w-full max-w-[700px] bg-white m-10" >
              <NavigationContainer>
                <RootNavigator />
              </NavigationContainer>
            </View>
          </View>
        ) : (
          <SafeAreaProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
    </SafeAreaProvider>
        )
      }
    </>

    // <View className="flex-1 bg-[#5b7d57] items-center justify-center">
    //   <View className="flex-1 w-full max-w-[412px] bg-[#380b0b]">
   
  );
}
