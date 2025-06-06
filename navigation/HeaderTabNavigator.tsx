import { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Platform } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import OrdersScreen from '../screens/OrdersScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';
import BookOrderScreen from 'screens/BookOrderScreen';

export default function WebHeaderNavigator() {
  const [activeTab, setActiveTab] = useState('home');

  if (Platform.OS !== 'web') {
    return (
      <View>
        <Text>This layout is for web only.</Text>
      </View>
    );
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomeScreen  setActiveTab={setActiveTab}/>;
      case 'orders':
        return <OrdersScreen />;
      case 'profile':
        return <ProfileScreen />;
      case 'bookOrder':
        return <BookOrderScreen setActiveTab={setActiveTab} />;
      default:
        return <HomeScreen  setActiveTab={setActiveTab}/>;
    }
  };

  return (
    <View >
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#2F2F2F',
        height: 60,
        paddingHorizontal: 24,
        justifyContent: 'space-between',
      }}>
        <View>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: '600', marginRight: 6 }}>
              APMC Market
            </Text>
            <Ionicons name="chevron-down" size={18} color="white" />
          </TouchableOpacity>
          <Text style={{ color: '#BEC4C8', fontSize: 12 }}>
            Administrative building, Sec 18, Vashi Navi M...
          </Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 32 }}>
          <TouchableOpacity onPress={() => setActiveTab('home')} style={{ alignItems: 'center',display:'flex',flexDirection:'row',justifyContent:'center', gap: 7 }}>
            <Image
              source={require('../assets/icons/home.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: activeTab === 'home' || activeTab === 'bookOrder' ? '#BBFB6A' : '#666666',
                marginBottom: 4,
              }}
            />
            <Text style={{
              color: activeTab === 'home' || activeTab === 'bookOrder' ? '#BBFB6A' : '#666666',
              fontSize: 14,
              fontWeight: '500',
            }}>
              Home
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setActiveTab('orders')} style={{ alignItems: 'center',display:'flex',flexDirection:'row',justifyContent:'center', gap: 7 }}>
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

          <TouchableOpacity onPress={() => setActiveTab('profile')} style={{ alignItems: 'center' ,display:'flex',flexDirection:'row',justifyContent:'center', gap: 7 }}>
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

      <View style={{ flex: 1 }}>
        {renderContent()}
      </View>
    </View>
  );
}
