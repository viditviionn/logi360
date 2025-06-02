import { View, Text, TextInput, Image, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import { useState, useEffect } from 'react';
import Button from '../components/Button';
import { StatusBar } from 'expo-status-bar'

export default function LoginScreen({ navigation }: any) {
  const [mobileNumber, setMobileNumber] = useState('');
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setKeyboardVisible(true)
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setKeyboardVisible(false)
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleProceed = () => {
    // Navigate to OTP screen
    navigation.navigate('OTP');
  };

  const hasFourNines = mobileNumber.includes('9999');

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1"
    >
      <StatusBar backgroundColor="#1C1C1E" style="light" />
      <View className="flex-1 bg-[#F5F5F5]">
        <View className="bg-[#1C1C1E] h-[230px] w-full rounded-b-[42px] items-center justify-center">
          <Image 
            source={require('../assets/images/logi360.png')}
            className="w-[180px] h-[50px] top-[30px]"
            resizeMode="contain"
          />
        </View>

        {/* Login Form Section */}
        <View className="flex-1 px-4 pt-8">
          <View>
            <Text className="text-[32px] font-inter-semibold text-[#262727]">
              Login
            </Text>
            
            <Text className="text-[#505152] text-[14px] font-inter mt-2 mb-6">
              Enter your registered mobile number
            </Text>

            <Text className="text-[#505152] text-[14px] mb-[10px] font-inter-medium leading-[17px]">
              Mobile number
            </Text>

            <View className="flex-row items-center bg-white border border-[#E5E5E5] rounded-xl px-4 py-1">
            <Text className="text-[#71717A] font-inter text-base mr-2">+91</Text>
  <TextInput
    className="flex-1 font-inter text-base py-2 text-[#71717A] min-h-[40px] max-h-[40px] outline-none focus:outline-none"
    keyboardType="numeric"
    maxLength={10}
    value={mobileNumber}
    onChangeText={setMobileNumber}
    placeholder="Enter mobile number"
    placeholderTextColor="#A0A0A0"
  />
            </View>
            {hasFourNines && (
              <Text className='text-[#C30606] font-inter'>Mobile number not found in database, try again.</Text>
            )}
          </View>

          <View className="flex-1 justify-end">
            <Button
              label="Proceed"
              onPress={handleProceed}
              disabled={mobileNumber.length !== 10}
              className={keyboardVisible ? "mb-3" : "mb-8"}
            />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
} 