import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, StatusBar, Platform, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import WebHeaderNavigator from '../navigation/HeaderTabNavigator';

const locations = [
  {
    name: 'APMC Market',
    address: 'Administrative building, Sec 18, Vashi Navi Mumbai',
  },
  {
    name: 'Vashi Market',
    address: 'Vashi Main Office, Sec 17',
  },
  {
    name: 'Turbhe Market',
    address: 'Turbhe Main Office',
  },
  {
    name: 'Koparkhairne Market',
    address: 'Koparkhairne Main Office',
  }
];

export default function HomeScreen({ navigation }: any) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  return (
    <>
      {
        Platform.OS === 'web' ? (
          <>
            <SafeAreaView className="flex-1 gap-6">
          <StatusBar backgroundColor="#2F2F2F" />
          <WebHeaderNavigator navigation={navigation}/>
          <View className="flex-1 flex-row gap-6 px-4 mt-1">

            <TouchableOpacity
              className="bg-white rounded-2xl w-[20%] h-[200px]"
              onPress={() => {
                navigation.navigate('BookOrder');
              }}
              style={{
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 6 },
                shadowOpacity: 0.15,
                shadowRadius: 2.5,
                elevation: 4,
              }}
            >
              <View className="flex-row justify-between mt-2 px-3">
                <Text className="text-[14px] font-semibold text-[#505152]">Book Order</Text>
                <Ionicons name="chevron-forward" size={18} color="#1E1E1E" />
              </View>
              <View className="items-end mt-auto pr-3 pb-3">
                <Image
                  source={require('../assets/images/Book-Orders.png')}
                  className="w-[70%] h-[55px]"
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              className="bg-white rounded-2xl w-[20%] h-[200px]"
              // onPress={() => setActiveTab('bookOrder')}
              style={{
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 5,
                elevation: 5,
              }}
            >
              <View className="flex-row justify-between mt-2 px-3">
                <Text className="text-[14px] font-semibold text-[#505152]">Load Truck</Text>
                <Ionicons name="chevron-forward" size={18} color="#1E1E1E" />
              </View>
              <View className="items-end mt-auto pr-3 pb-3 relative">
                <Image
                  source={require('../assets/images/Van.png')}
                  className="w-[70%] h-[55px]"
                  resizeMode="contain"
                />

                    <Image
                      source={require('../assets/images/Boxes.png')}
                      className="absolute bottom-3 right-12 w-[30%] h-[25px]"
                      resizeMode="contain"
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </SafeAreaView>
          </>
        ) : (
          <>
            <SafeAreaView className="flex-1">
              <StatusBar backgroundColor="#2F2F2F" />
              <View className="bg-[#2F2F2F] p-4 rounded-b-[32px] pb-6  h-fit w-full pt-16">
                <View className="flex-row justify-between items-center ml-4 ">
                  <View className="mt-5">
                    <TouchableOpacity
                      className="flex-row items-center"
                      onPress={() => setDropdownOpen(!dropdownOpen)}
                    >
                      <Text className="text-white text-[16px] font-semibold mr-2">
                        {selectedLocation.name}
                      </Text>
                      <Ionicons
                        name={dropdownOpen ? 'chevron-up' : 'chevron-down'}
                        size={18}
                        color="white"
                      />
                    </TouchableOpacity>
                    <Text className="text-[#BEC4C8] font-inter text-[12px]">
                      {selectedLocation.address.length > 42
                        ? selectedLocation.address.slice(0, 42) + '...'
                        : selectedLocation.address}
                    </Text>
                  </View>
                  <TouchableOpacity className="pt-5 mr-3">
                    <Image
                      source={require('../assets/icons/notification.png')}
                      style={{ width: 24, height: 24 }}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Dropdown - overlay below header */}
              {dropdownOpen && (
                <View
                  className="absolute rounded-md px-4 py-3 z-20 left-5 right-5"
                  style={{
                    top: 140,
                    backgroundColor: '#2F2F2F',
                    shadowColor: 'black',
                    shadowOpacity: 0.3,
                    shadowOffset: { width: 0, height: 3 },
                    shadowRadius: 6,
                    elevation: 6,
                  }}
                >
                  <FlatList
                    data={locations.filter((item) => item.name !== selectedLocation.name)}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        onPress={() => {
                          setSelectedLocation(item);
                          setDropdownOpen(false);
                        }}
                        className="py-2"
                      >
                        <Text className="text-white font-semibold">{item.name}</Text>
                        <Text className="text-[#D1D5DB] text-xs">{item.address}</Text>
                      </TouchableOpacity>
                    )}
                  />
                </View>
              )}



              <View className="flex-row justify-between px-4 mt-6">
                <TouchableOpacity
                  className="bg-white rounded-2xl w-[47%] h-[120px]"
                  onPress={() => navigation.navigate('BookOrder')}
                  style={{
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 6 },
                    shadowOpacity: 0.15,
                    shadowRadius: 2.5,
                    elevation: 4,
                  }}
                >
                  <View className="flex-row justify-between mt-2 px-3">
                    <Text className="text-[14px] font-semibold text-[#505152]">Book Order</Text>
                    <Ionicons name="chevron-forward" size={18} color="#1E1E1E" />
                  </View>
                  <View className="items-end mt-auto pr-3 pb-3">
                    <Image
                      source={require('../assets/images/Book-Orders.png')}
                      className="w-[70%] h-[55px]"
                      resizeMode="contain"
                    />
                  </View>
                </TouchableOpacity>

                {/* Load Truck Card */}
                <TouchableOpacity
                  className="bg-white rounded-2xl w-[47%] h-[120px]"
                  // onPress={() => navigation.navigate('BookOrder')}
                  style={{
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.1,
                    shadowRadius: 5,
                    elevation: 5,
                  }}
                >
                  <View className="flex-row justify-between mt-2 px-3">
                    <Text className="text-[14px] font-semibold text-[#505152]">Load Truck</Text>
                    <Ionicons name="chevron-forward" size={18} color="#1E1E1E" />
                  </View>
                  <View className="items-end mt-auto pr-3 pb-3 relative">
                    {/* Van Image (bottom layer) */}
                    <Image
                      source={require('../assets/images/Van.png')}
                      className="w-[70%] h-[55px]"
                      resizeMode="contain"
                    />

                    <Image
                      source={require('../assets/images/Boxes.png')}
                      className="absolute bottom-3 right-12 w-[30%] h-[25px]"
                      resizeMode="contain"
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </SafeAreaView>
          </>
        )

      }
    </>
  );
}
