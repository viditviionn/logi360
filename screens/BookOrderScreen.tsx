import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Header from './Header';

export default function BookOrderScreen({ navigation }: any) {
  return (
    <SafeAreaView className="flex-1 bg-[#f7fafd]">
      <StatusBar backgroundColor="white" />
      {/* Custom Header */}
      <Header
        title="Book New Order"
        navigation={navigation}
        bgColor="bg-[#FFFFFF]"
        bottomBorder={true}
      />
 

      {/* Main Content */}
      <View className="flex-1 justify-center items-center px-2">
        {/* Center Image */}
        <Image
          source={require('../assets/images/scan.png')}
          className="w-[294px] h-[294px] mb-6"
          resizeMode="contain"
        />

        {/* Description */}
        <Text className="text-center text-[#7A7C7C] text-[16px] font-inter mb-10 leading-relaxed">
          Click a picture of the e-invoice/invoice/e-way{'\n'}
          or enter order details manually
        </Text>
        </View>

        {/* Buttons */}
        <View className="flex-row justify-between w-full px-4 pb-6 gap-x-4">
        <TouchableOpacity className="flex-1 border border-[#93E23E] rounded-lg py-3 items-center bg-white">
          <Text className="text-[#262727] font-inter-medium">
            Enter Manually
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('InvoiceScanner')} className="flex-1 bg-[#93E23E] rounded-lg py-3 items-center">
          <Text className="text-[#262727]  font-inter-medium">
            Take picture
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
