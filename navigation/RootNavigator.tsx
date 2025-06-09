import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LanguageSelectionScreen from '../screens/LanguageSelectionScreen';
import LoginScreen from '../screens/LoginScreen';
import OtpScreen from '../screens/OtpScreen';
import BottomTabNavigator from './BottomTabNavigator';
import BookOrderScreen from '../screens/BookOrderScreen';
import { Platform } from 'react-native';
import HeaderTabNavigator from './HeaderTabNavigator';
import HomeScreen from 'screens/HomeScreen';
import NewOrderScreen from 'screens/NewOrderScreen';
import OrderDetailsScreen from 'screens/OrderDetailsScreen';

let InvoiceScanner: any;
if (Platform.OS !== 'web') {
  InvoiceScanner = require('../screens/InvoiceScanner').default;
}

const Stack = createNativeStackNavigator();
 
export default function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Language" screenOptions={{ headerShown: false }}>
      {/* Auth Screens */}
      <Stack.Screen name="Language" component={LanguageSelectionScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="OTP" component={OtpScreen} options={{ headerShown: false }} />
      <Stack.Screen name="BookOrder" component={BookOrderScreen} options={{ headerShown: false }} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="NewOrder" component={NewOrderScreen} />
      <Stack.Screen name="OrderDetails" component={OrderDetailsScreen}/>
      
      {/* Main App Screens */}
      {Platform.OS !== 'web' ? (
        <>
          <Stack.Screen name="Home" component={BottomTabNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="InvoiceScanner" component={InvoiceScanner} options={{ headerShown: false }} />
        </>
      ) : (
        <Stack.Screen name="Home" component={HeaderTabNavigator} options={{ headerShown: false }} />
      )}
  
    </Stack.Navigator>
  )
}
 
 

