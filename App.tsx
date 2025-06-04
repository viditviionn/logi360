import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigation/RootNavigator';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';

// import { LanguageProvider } from './context/LanguageContext';
import './global.css';
import { Platform, Text, View } from 'react-native';
import LanguageSelectionScreen from 'screens/LanguageSelectionScreen';
import { useEffect } from 'react';

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      // SplashScreen.hideAsync();
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
          <View className="flex-1 bg-[#5b7d57] items-center justify-center">
            <View className="flex-1 w-full max-w-[412px] bg-[#380b0b]">
              <NavigationContainer>
                <RootNavigator />
              </NavigationContainer>
            </View>
          </View>
        )
      }
    </>

  );
}
