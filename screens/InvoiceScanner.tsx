import React, { useEffect, useRef, useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image, Dimensions } from 'react-native';
import { Camera, useCameraDevice, useCameraPermission } from 'react-native-vision-camera';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const { width, height } = Dimensions.get('window');
const CORNER_SIZE = 40;

export default function InvoiceScanner({ navigation }: any) {
  const device = useCameraDevice('back');
  const { hasPermission } = useCameraPermission();

  if (!hasPermission) {
    return (
      <View className="flex-1 bg-black items-center justify-center p-4">
        <Text className="text-white text-center text-lg mb-4">
          Camera permission is required to scan invoices
        </Text>
        <TouchableOpacity
          className="bg-[#93E23E] px-6 py-3 rounded-lg"
          onPress={() => navigation.goBack()}
        >
          <Text className="text-black font-medium">Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (device == null) {
    return (
      <View className="flex-1 bg-black items-center justify-center">
        <Text className="text-white">No camera device available</Text>
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-black">
      <StatusBar style="light" />
      
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 py-3">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text className="text-white text-lg">Back</Text>
        </TouchableOpacity>
        <Text className="text-white text-base">Upload from gallery</Text>
      </View>

      {/* Camera View */}
      <View className="flex-1 relative">
        <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={true}
        />
        
        {/* Overlay with Corner Guides */}
        <View className="absolute inset-0 p-8">
          <View className="flex-1 border-2 border-dashed border-[#FFD700] rounded-lg">
            {/* Top Left Corner */}
            <View className="absolute top-[-2px] left-[-2px] w-[40px] h-[40px] border-t-4 border-l-4 border-[#FFD700] rounded-tl-lg" />
            {/* Top Right Corner */}
            <View className="absolute top-[-2px] right-[-2px] w-[40px] h-[40px] border-t-4 border-r-4 border-[#FFD700] rounded-tr-lg" />
            {/* Bottom Left Corner */}
            <View className="absolute bottom-[-2px] left-[-2px] w-[40px] h-[40px] border-b-4 border-l-4 border-[#FFD700] rounded-bl-lg" />
            {/* Bottom Right Corner */}
            <View className="absolute bottom-[-2px] right-[-2px] w-[40px] h-[40px] border-b-4 border-r-4 border-[#FFD700] rounded-br-lg" />
          </View>
        </View>

        {/* Capture Button */}
        <View className="absolute bottom-8 left-0 right-0 items-center">
          <TouchableOpacity 
            className="w-[70px] h-[70px] rounded-full bg-white items-center justify-center"
            onPress={() => {
              // Handle capture
            }}
          >
            <View className="w-[60px] h-[60px] rounded-full border-4 border-black" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

