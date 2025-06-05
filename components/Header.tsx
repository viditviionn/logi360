import React from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const Header = () => {
  return (
    <View className="bg-[#2F2F2F] p-4">
      <View className="flex-row justify-between items-center">
        {/* Left side - Title and Address */}
        <View>
          <TouchableOpacity className="flex-row items-center">
            <Text className="text-white text-lg font-semibold mr-2">APMC Market</Text>
            <Ionicons name="chevron-down" size={18} color="white" />
          </TouchableOpacity>
          <Text className="text-[#BEC4C8] text-xs">Administrative building, Sec 18, Vashi Navi M...</Text>
        </View>

        {/* Right side - Home Icon, Orders and Profile */}
        <View className="flex-row items-center space-x-6">
          {/* Orders Icon */}
          <TouchableOpacity>
            <Image
              source={require('../assets/icons/home.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: 'white',
                resizeMode: 'contain',
              }}
            />
            <Text className="text-white text-xs">Home</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../assets/icons/box.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: 'white',
                resizeMode: 'contain',
              }}
            />
            <Text className="text-white text-xs">Orders</Text>
          </TouchableOpacity>

          {/* Profile Icon */}
          <TouchableOpacity>
            <Image
              source={require('../assets/icons/user-round.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: 'white',
                resizeMode: 'contain',
              }}
            />
            <Text className="text-white text-xs">Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
