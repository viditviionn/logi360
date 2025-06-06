import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LanguageSelectionScreen from '../screens/LanguageSelectionScreen';
import LoginScreen from '../screens/LoginScreen';
import OtpScreen from '../screens/OtpScreen';
import BottomTabNavigator from './BottomTabNavigator';
import BookOrderScreen from 'screens/BookOrderScreen';
import InvoiceScanner from 'screens/InvoiceScanner';
import NewOrderScreen from 'screens/NewOrderScreen';
 
const Stack = createNativeStackNavigator();
 
export default function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Language" screenOptions={{ headerShown: false }}>
      {/* Auth Screens */}
      <Stack.Screen name="Language" component={LanguageSelectionScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="OTP" component={OtpScreen} />
      <Stack.Screen name="InvoiceScanner" component={InvoiceScanner} />
 
      {/* Main App Screens */}
      <Stack.Screen name="Home" component={BottomTabNavigator} />
      <Stack.Screen name="BookOrder" component={BookOrderScreen} />
      <Stack.Screen name="NewOrder" component={NewOrderScreen} />
    </Stack.Navigator>
  );
}
 
 

