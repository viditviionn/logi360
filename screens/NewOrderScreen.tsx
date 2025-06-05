import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import DropDownPicker from 'react-native-dropdown-picker';

type RootStackParamList = {
  NewOrder: { imagePath: string };
};

type Props = NativeStackScreenProps<RootStackParamList, 'NewOrder'>;

export default function NewOrderScreen({ navigation,}: Props) {
  const [formData, setFormData] = useState({
    consignerName: '',
    consignerGstin: '',
    consignerAddress: '',
    consignerMobile: '',
    consigneeName: '',
    consigneeGstin: '',
    consigneeAddress: '',
    consigneeMobile: '',
    ewayBillNo: '',
    ewayBillExpiry: '',
  });

  const [open, setOpen] = useState(false);
  const [deliveryType, setDeliveryType] = useState('godown');
  const [items, setItems] = useState([
    { label: 'Godown', value: 'godown' },
    { label: 'Home', value: 'home' },
    { label: 'Office', value: 'office' },
  ]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <SafeAreaView className="flex-1  bg-[#F5F5F5]">
      {/* Header */}
      <View
        className="flex-row items-center justify-between bg-white px-4 pt-10"
       
      >
        <View className="flex-row items-center">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="pr-3"
          >
            <Ionicons name="chevron-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text className="text-[18px] font-inter-semibold text-black">
            Book new order
          </Text>
        </View>
        <TouchableOpacity>
          <Text className="text-[16px] text-[#C30606] font-inter-medium">Cancel Order</Text>
        </TouchableOpacity>


        
      </View>

      {/* Progress Indicators */}
     
      <View className="flex-row justify-between items-center px-3 py-4 bg-white shadow-[0_4px_10px_rgba(0,0,3,0.1)]">
        <View className="items-center ">
          <View className="  justify-center mb-1">
            <Image source={require('../assets/icons/address.png')} className="w-8 h-8" />
          </View>
          <Text className="font-inter-semibold text-[13px] text-[black]">Address</Text>
        </View>
        
        <View className="flex-1 h-[1px] border-[1px]  mb-6 border-dashed border-[#BEC4C8]" />
        
        <View className="items-center ml-[-20px] mr-[-20px]">
          <View className="items-center justify-center mb-1">
            <Image source={require('../assets/icons/items.png')} className="w-8 h-8" />
          </View>
          <Text className="font-inter-semibold text-[13px] text-[#A0A1A1] w-[90px] text-center whitespace-nowrap">Item details</Text>
        </View>
        
        <View className="flex-1 h-[1px] border-[1px] mb-6 border-dashed border-[#E0E0E0]" />
        
        <View className="items-center ">
          <View className="items-center justify-center mb-1">
            <Image source={require('../assets/icons/charges.png')} className="w-8 h-8" />
          </View>
          <Text className="font-inter-semibold text-[13px] text-[#A0A1A1]">Charges</Text>
        </View>
      </View>
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Delivery Type */}
        <View className="pt-2 pb-4 px-4 bg-[f7fafd]">
          <Text className="text-[14px] text-[#666] font-inter mb-1">Delivery Type</Text>
          <DropDownPicker
            open={open}
            value={deliveryType}
            items={items}
            setOpen={setOpen}
            setValue={setDeliveryType}
            setItems={setItems}
            style={{
              borderColor: '#E0E0E0',
              borderRadius: 8,
            }}
            textStyle={{
              fontSize: 14,
              fontFamily: 'Inter_500Medium',
            }}
            dropDownContainerStyle={{
              borderColor: '#E0E0E0',
              borderRadius: 8,
      
            }}
          />
        </View>

        <View className="relative px-4">
          {/* Dotted Line with Indicators */}
          <View className="absolute left-6 items-center" style={{ top: 20, bottom: 185 }}>
            <View className="w-[10px] h-[10px] mb-1 rounded-full bg-green-500" />
            <View className="flex-1 border-l border-dashed border-[#7C7C7C]" />
            <View className="w-[10px] h-[10px] mt-1 rounded-full bg-red-500" />
          </View>

          {/* Consigner Details Card */}
          <View className="ml-8 mb-7 bg-white rounded-[20px] p-4"
            style={{
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.08,
              shadowRadius: 8,
              elevation: 2,
            }}>
            <View>
              <View className="flex-row justify-between">
                <View className="flex-1 mr-4">
                  <Text className="text-gray-500 text-[12px] font-inter">Consignor name:</Text>
                  <Text className="text-black text-[14px] font-inter-medium mt-1">Tanmay Kathane</Text>
                </View>
                <View className="flex-1">
                  <Text className="text-gray-500 text-[12px] font-inter">Consignor GSTIN:</Text>
                  <View className="flex-row items-center mt-1">
                    <Text className="text-black text-[14px] font-inter-medium mr-1">22AAA0001A1Z8</Text>
                    <Image source={require('../assets/icons/check.png')} className="w-5 h-5" />
                  </View>
                </View>
              </View>
              
              <View className="mt-4">
                <Text className="text-gray-500 text-[12px] font-inter">From Address:</Text>
                <Text className="text-black text-[14px] font-inter-medium mt-1">A-1302, Gokuldham Society, Sector 35D, Kharghar Navi Mumbai - 410210</Text>
              </View>
              
              <View className="mt-4">
                <Text className="text-gray-500 text-[12px] font-inter">Consignor mobile number:</Text>
                <Text className="text-black text-[14px] font-inter-medium mt-1">+91 9829754822</Text>
              </View>
            </View>
          </View>

          {/* Consignee Details Card */}
          <View className="ml-8 bg-white mb-4 rounded-[20px] p-4"
            style={{
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.08,
              shadowRadius: 8,
              elevation: 2,
            }}>
            <View>
              <View className="flex-row justify-between">
                <View className="flex-1 mr-4">
                  <Text className="text-gray-500 text-[12px] font-inter">Consignee name:</Text>
                  <Text className="text-black text-[14px] font-inter-medium mt-1">John Doe</Text>
                </View>
                <View className="flex-1">
                  <Text className="text-gray-500 text-[12px]">Consignor GSTIN:</Text>
                  <View className="flex-row items-center mt-1">
                    <Text className="text-black text-[14px] font-inter-medium mr-1">22AAA0001A1Z8</Text>
                   <Image source={require('../assets/icons/check.png')} className="w-5 h-5" />
                  </View>
                </View>
              </View>
              
              <View className="mt-4">
                <Text className="text-gray-500 text-[12px] font-inter">To Address:</Text>
                <Text className="text-black text-[14px] font-inter-medium mt-1">A-1302, Gokuldham Society, Sector 35D, Kharghar Navi Mumbai - 410210</Text>
              </View>
              
              <View className="mt-4">
                <Text className="text-gray-500 text-[12px] font-inter">Consignee mobile number:</Text>
                <Text className="text-black text-[14px] font-inter-medium mt-1">+91 7483110798</Text>
              </View>
            </View>
          </View>
        </View>

        {/* E-way Bill Details */}
        <View className="px-4 mt-5 mb-4">
          <View className="flex-row space-x-6">
            <View className="flex-1 mr-4">
              <Text className="text-[#666869] text-[14px] font-inter  mb-1">E-way Bill No.</Text>
              <TextInput
                className="bg-white px-3 py-2.5 border border-[#E0E0E0] rounded-lg "
                value="748311979876"
                style={{ fontSize: 15 }}
              />
            </View>
            <View className="flex-1">
              <Text className="text-[#666869] text-[14px] font-inter mb-1">E-way Bill Expiry Date</Text>
              <View className="flex-row items-center bg-white px-3 py-2.5 border border-[#E0E0E0] rounded-lg">
              <View className="mr-1 ml-1">
                 <Image source={require('../assets/icons/calendar.png')} className="w-7 h-5" />
                </View>
                <Text className='font-inter text-[14px] text-[#666666]' >Mar 26, 2025</Text>
               
              </View>
            </View>
          </View>
        </View>

        {/* Additional Documents */}
        <View className="px-4 mb-4">
          <Text className="text-[#666666] text-[14px] mb-1 font-inter">Additional documents</Text>
          <TouchableOpacity className="flex-row justify-between items-center px-3 py-2.5 bg-white border border-[#E0E0E0] rounded-lg">
            <Text className="text-[15px] font-inter">Upload additional documents</Text>
            <View className="flex-row items-center">
              <Text className="text-[#007AFF] text-[15px] font-medium mr-1">Upload</Text>
            <Image source={require('../assets/icons/upload.png')} className="w-5 h-5" />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Continue Button */}
      <View className="px-4 mb-15 bg-white flex justify-center items-center">
  <TouchableOpacity className="bg-[#007AFF] py-3 mt-3 w-full max-w-[412px] rounded-lg items-center">
    <Text className="text-white text-[15px] font-inter-medium">Continue</Text>
  </TouchableOpacity>
</View>

    </SafeAreaView>
  );
}

