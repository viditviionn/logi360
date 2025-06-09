// components/ProgressStepper.tsx

import React from 'react';
import { View, Text } from 'react-native';
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

type ProgressStepperProps = {
  activeStep: 1 | 2 | 3;
};

export default function ProgressStepper({ activeStep }: ProgressStepperProps) {
  return (
    <View className="flex-row justify-between items-center px-6 pb-2 bg-white shadow-[0_4px_10px_rgba(0,0,3,0.1)]">
      {/* Step 1 - Address */}
      <View className="items-center">
        <View className="justify-center mb-1">
          <View className={`w-10 h-10 rounded-full border items-center justify-center ${activeStep > 1 ? 'border-[#4CAF50]' : 'border-black'}`}>
            {activeStep > 1 ? (
              <AntDesign name="check" size={20} color="#4CAF50" />
            ) : (
              <Feather name="map-pin" size={24} color="black" />
            )}
          </View>
        </View>
        <Text className="font-inter-semibold text-[13px] text-black">Address</Text>
      </View>

      {/* Line 1 */}
      <View className={`flex-1 h-[1px] mb-6 ${activeStep > 1 ? 'bg-black' : 'border border-dashed border-[#BEC4C8]'}`} />

      {/* Step 2 - Item details */}
      <View className="items-center ml-[-20px] mr-[-20px]">
        <View className="items-center justify-center mb-1">
          <View className={`w-10 h-10 rounded-full border ${activeStep >= 2 ? 'border-black' : 'border-[#D1D5DB]'} items-center justify-center`}>
            <Feather name="box" size={24} color={activeStep >= 2 ? 'black' : '#D1D5DB'} />
          </View>
        </View>
        <Text className={`font-inter-semibold text-[13px] ${activeStep >= 2 ? 'text-black' : 'text-[#A0A1A1]'} w-[90px] text-center whitespace-nowrap`}>
          Item details
        </Text>
      </View>

      {/* Line 2 */}
      <View className="flex-1 h-[1px] border mb-6 border-dashed border-[#E0E0E0]" />

      {/* Step 3 - Charges */}
      <View className="items-center">
        <View className="items-center justify-center mb-1">
          <View className="w-10 h-10 rounded-full border border-[#D1D5DB] items-center justify-center">
            <MaterialCommunityIcons name="currency-inr" size={24} color="#D1D5DB" />
          </View>
        </View>
        <Text className="font-inter-semibold text-[13px] text-[#A0A1A1]">Charges</Text>
      </View>
    </View>
  );
}
