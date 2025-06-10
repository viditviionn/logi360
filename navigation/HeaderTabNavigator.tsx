import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Modal, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type MarketLocations = {
  [key: string]: string[];
};

export default function WebHeaderNavigator({ navigation }: any): JSX.Element {
  const [activeTab, setActiveTab] = useState("home");
  const [showMarketDropdown, setShowMarketDropdown] = useState(false);
  const [selectedMarket, setSelectedMarket] = useState("APMC Market");
  const [selectedLocation, setSelectedLocation] = useState("Administrative building, Sec 18, Vashi Navi M...");

  const marketLocations: MarketLocations = {
    "APMC Market": [
      "Administrative building, Sec 18, Vashi Navi M...",
    ],
    "Vashi Market": [
      "Vashi Main Office, Sec 17",
    ],
    "Turbhe Market": [
      "Turbhe Main Office",
    ],
    "Koparkhairne Market": [
      "Koparkhairne Main Office",
    ]
  };

  const markets = Object.keys(marketLocations).filter(market => market !== selectedMarket);

  const handleMarketSelect = (market: string, location: string) => {
    setSelectedMarket(market);
    setSelectedLocation(location);
    setShowMarketDropdown(false);
  };

  const handleOrders = () => {
    navigation.navigate('HomeScreen');
    setActiveTab('orders');
  }
  const handleProfile = () => {
    navigation.navigate('HomeScreen');
    setActiveTab('profile');
  }

  const renderDropdownItem = (market: string) => (
    <View className='bg-red-500'>
      {marketLocations[market]
        .filter(location => !(market === selectedMarket && location === selectedLocation))
        .map((location, index) => (
        <TouchableOpacity
          key={`${market}-${index}`}
          style={{
            padding: 15,
            borderBottomWidth: 1,
            borderBottomColor: '#2F2F2F',
          }}
          onPress={() => handleMarketSelect(market, location)}
        >
          <Text style={{ color: 'white', fontSize: 16, fontWeight: '500' }}>
            {market}
          </Text>
          <Text style={{ color: '#BEC4C8', fontSize: 12, marginTop: 4 }}>
            {location}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <View>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#2F2F2F',
        height: 60,
        paddingHorizontal: 24,
        justifyContent: 'space-between',
      }}>
        <View>
          <TouchableOpacity 
            style={{ flexDirection: 'row', alignItems: 'center' }}
            onPress={() => setShowMarketDropdown(!showMarketDropdown)}
          >
            <Text style={{ color: 'white', fontSize: 18, fontWeight: '600', marginRight: 6 }}>
              {selectedMarket}
            </Text>
            <Ionicons name="chevron-down" size={18} color="white" />
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: '#BEC4C8', fontSize: 12 }}>
              {selectedLocation}
            </Text>
          </View>
        </View>

        {/* Market Dropdown Modal */}
        <Modal
          visible={showMarketDropdown}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setShowMarketDropdown(false)}
        >
          <TouchableOpacity
            style={{ flex: 1, backgroundColor: 'transparent' }}
            activeOpacity={1}
            onPress={() => setShowMarketDropdown(false)}
          >
            <View style={{ 
              position: 'absolute',
              top: 70,
              left: 12,
              backgroundColor: '#1F1F1F',
              borderRadius: 8,
              width: 300,
              maxHeight: 400,
              elevation: 5,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 3.84,
            }}>
              <FlatList
                data={markets}
                renderItem={({ item }) => renderDropdownItem(item)}
                keyExtractor={(item) => item}
                showsVerticalScrollIndicator={false}
              />
            </View>
          </TouchableOpacity>
        </Modal>

        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 32 }}>
          <TouchableOpacity onPress={() => {
            setActiveTab('home');
            navigation.navigate('HomeScreen');
          }} style={{ alignItems: 'center',display:'flex',flexDirection:'row',justifyContent:'center', gap: 7 }}>
            <Image
              source={require('../assets/icons/home.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: activeTab === 'home' ? '#BBFB6A' : '#666666',
                marginBottom: 4,
              }}
            />
            <Text style={{
              color: activeTab === 'home' ? '#BBFB6A' : '#666666',
              fontSize: 14,
              fontWeight: '500',
            }}>
              Home
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { handleOrders()}} style={{ alignItems: 'center',display:'flex',flexDirection:'row',justifyContent:'center', gap: 7 }}>
            <Image
              source={require('../assets/icons/box.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: activeTab === 'orders' ? '#BBFB6A' : '#666666',
                marginBottom: 4,
              }}
            />
            <Text style={{
              color: activeTab === 'orders' ? '#BBFB6A' : '#666666',
              fontSize: 14,
              fontWeight: '500',
            }}>
              Orders
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleProfile} style={{ alignItems: 'center' ,display:'flex',flexDirection:'row',justifyContent:'center', gap: 7 }}>
            <Image
              source={require('../assets/icons/user-round.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: activeTab === 'profile' ? '#BBFB6A' : '#666666',
                marginBottom: 4,
              }}
            />
            <Text style={{
              color: activeTab === 'profile' ? '#BBFB6A' : '#666666',
              fontSize: 14,
              fontWeight: '500',
            }}>
              Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
