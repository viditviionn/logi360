import React, { useEffect, useRef, useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image, Dimensions, Alert } from 'react-native';
import { Camera, useCameraDevice, useCameraPermission } from 'react-native-vision-camera';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import * as ImagePicker from 'expo-image-picker';

const { width, height } = Dimensions.get('window');
const CORNER_SIZE = 40;

export default function InvoiceScanner({ navigation }: any) {
  const device = useCameraDevice('back');
  const { hasPermission } = useCameraPermission();
  const camera = useRef<Camera>(null);
  const [isCapturing, setIsCapturing] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Request camera permissions on mount
  useEffect(() => {
    (async () => {
      const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!permission.granted) {
        Alert.alert(
          "Permission Required",
          "Please grant permission to access your gallery",
          [{ text: "OK" }]
        );
      }
    })();
  }, []);

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        allowsEditing: true,
        aspect: [4, 3],
      });

      if (!result.canceled) {
        // const selectedImage = result.assets[0];
        // setSelectedImage(selectedImage.uri);
        // setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          navigation.navigate('NewOrder');
        }, 2000);
      }
    } catch (error) {
      console.error('Error picking image:', error);
      Alert.alert("Error", "Failed to pick image from gallery");
    }
  };

  const takePhoto = async () => {
    try {
      if (camera.current && !isCapturing) {
        setIsCapturing(true);
        const photo = await camera.current.takePhoto({
          flash: 'off'
        });
        const photoPath = `file://${photo.path}`;
        setSelectedImage(photoPath);
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          navigation.navigate('NewOrder');
        }, 2000);
      }
    } catch (error) {
      console.error('Error taking photo:', error);
      Alert.alert("Error", "Failed to take photo");
    } finally {
      setIsCapturing(false);
    }
  };

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
      <View
        className="flex-row items-center justify-between bg-black px-4 py-6"
        style={{
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.08,
          shadowRadius: 8,
          elevation: 4,
        }}
      >
        <View className="flex-row items-center">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="pt-4 pr-3"
          >
            <Ionicons name="chevron-back" size={24} color="white" />
          </TouchableOpacity>
          <Text className="pt-4 text-[20px] font-inter-semibold text-white">
            Back
          </Text>
        </View>

        <TouchableOpacity onPress={pickImage}>
          <Text className="pt-4 text-[14px] font-inter text-white">
            Upload from gallery
          </Text>
        </TouchableOpacity>
      </View>

      {/* Main Container */}
      <View className="flex-1 relative">
        {/* Camera/Preview Container */}
        <View className="absolute inset-x-0 top-0 bottom-32">
          {selectedImage ? (
            <View style={[StyleSheet.absoluteFill, { backgroundColor: 'black' }]}>
              <Image
                source={{ uri: selectedImage }}
                style={{ width: '100%', height: '100%' }}
                resizeMode="contain"
              />
            </View>
          ) : (
            <Camera
              ref={camera}
              style={StyleSheet.absoluteFill}
              device={device}
              isActive={!selectedImage}
              photo={true}
              enableZoomGesture={false}
            />
          )}

          {/* Overlay with Corner Guides */}
          <View className="absolute inset-0 p-8" pointerEvents="none">
            <View className="flex-1">
              {/* Top Left Corner */}
              <View className="absolute top-[-2px] left-[-2px] w-[40px] h-[40px] border-t-4 border-l-4 border-[#FFD700] rounded-tl-[16px]" />
              {/* Top Right Corner */}
              <View className="absolute top-[-2px] right-[-2px] w-[40px] h-[40px] border-t-4 border-r-4 border-[#FFD700] rounded-tr-[16px]" />
              {/* Bottom Left Corner */}
              <View className="absolute bottom-[-2px] left-[-2px] w-[40px] h-[40px] border-b-4 border-l-4 border-[#FFD700] rounded-bl-[16px]" />
              {/* Bottom Right Corner */}
              <View className="absolute bottom-[-2px] right-[-2px] w-[40px] h-[40px] border-b-4 border-r-4 border-[#FFD700] rounded-br-[16px]" />
            </View>
          </View>
        </View>

        {/* Capture Button */}
        <View className="absolute bottom-8 left-0 right-0 items-center">
          <TouchableOpacity 
            className="w-[70px] h-[70px] rounded-full bg-white items-center justify-center"
            onPress={takePhoto}
            disabled={isCapturing || isLoading}
          >
            <View className={`w-[60px] h-[60px] rounded-full border-4 border-black ${(isCapturing || isLoading) ? 'opacity-50' : ''}`} />
          </TouchableOpacity>
        </View>

        {/* Retake Button */}
        {selectedImage && !isLoading && (
          <TouchableOpacity 
            className="absolute bottom-8 right-8 bg-white rounded-full p-4"
            onPress={() => setSelectedImage(null)}
          >
            <Ionicons name="refresh" size={24} color="black" />
          </TouchableOpacity>
        )}
      </View>

      {/* Full Screen Loading Overlay */}
      {isLoading && (
        <View 
          style={[StyleSheet.absoluteFill]} 
          className="bg-black/50 items-center justify-center z-50"
        >
          <Image
            source={require('../assets/images/loader.gif')}
            style={{ width: 100, height: 100} }
            resizeMode="contain"
          />
        </View>
      )}
    </SafeAreaView>
  );
}

