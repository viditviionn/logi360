import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LanguageSelectionScreen from '../screens/LanguageSelectionScreen';
import LoginScreen from '../screens/LoginScreen';
import OtpScreen from '../screens/OtpScreen';
import BottomTabNavigator from './BottomTabNavigator';
import BookOrderScreen from 'screens/BookOrderScreen';
import InvoiceScanner from 'screens/InvoiceScanner';


const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Language">
      {/* Auth Screens */}
      <Stack.Screen name="Language" component={LanguageSelectionScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="OTP" component={OtpScreen} options={{ headerShown: false }} />
      <Stack.Screen name="InvoiceScanner" component={InvoiceScanner} options={{ headerShown: false }} />
      
      {/* Main App Screens */}
      <Stack.Screen name="Home" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="BookOrder" component={BookOrderScreen}  options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
