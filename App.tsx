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
import { Platform, Text, View, useColorScheme } from 'react-native';
import LanguageSelectionScreen from 'screens/LanguageSelectionScreen';
import { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Camera } from 'react-native-vision-camera';

export default function App() {
  const colorScheme = useColorScheme();
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });
  

  


  // useEffect(() => {
  //   if (fontsLoaded) {
  //     // Force navigation to Language screen on web
   
  //       window.history.replaceState({}, '', '/Language');
  //     } 
  //     else{
  //       async () => {
        
  //         const cameraPermission = await Camera.requestCameraPermission();
  //         if (cameraPermission === 'denied') {
  //           console.warn('Camera permission denied');
  //         }
  //       }
  //     }
     
    
  // }, [fontsLoaded]);

  useEffect(() => {
    if (Platform.OS === 'web') {
      // Set dark mode class based on system preference
      if (colorScheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [colorScheme]);

  

  if (!fontsLoaded) return null;
  const linking = {
    prefixes: ['http://localhost:8081', 'https://yourdomain.com'],
    config: {
      screens: {
        Language: {
          path: 'Language',
          screens: {
            Language: 'Language',
          },
        },
        Login: 'Login',
        OTP: 'OTP',
        Home: 'Home',
        Profile: 'profile',
        Orders: 'orders',
        InvoiceScanner: 'InvoiceScanner',
        BookOrder: 'BookOrder',
        HomeScreen: 'HomeScreen',
        NewOrder: 'NewOrder',
      },
    },
  };

  return (
    <>
      {
        Platform.OS === 'web' ? (
          <View className="flex-1 bg-white items-center justify-center ">
          <View className="flex-1 w-full bg-white " >
              <NavigationContainer linking={linking}>
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
