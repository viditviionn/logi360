import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, Feather, FontAwesome6, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import DropDownPicker from 'react-native-dropdown-picker';
import * as DocumentPicker from 'expo-document-picker';
import Header from './Header';
import ProgressStepper from 'components/ProgressStepper';
import WebHeaderNavigator from '../navigation/HeaderTabNavigator';

type RootStackParamList = {
  OrderDetails: undefined; 
  BookOrder: undefined; 
};

type Props = NativeStackScreenProps<RootStackParamList>;

export default function NewOrderScreen({ navigation }: Props) {
  const [open, setOpen] = useState(false);
  const [deliveryType, setDeliveryType] = useState('godown');
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [items, setItems] = useState([
    { label: 'Godown', value: 'godown' },
    { label: 'Home', value: 'home' },
    { label: 'Office', value: 'office' },
  ]);
  const [uploadedDocs, setUploadedDocs] = useState<string[]>([]);

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({ type: "*/*" });
      if (!result.canceled) {
        const fileName = result.assets?.[0]?.name;
        if (fileName) {
          setUploadedDocs(prev => [...prev, fileName]);
        }
      }
    } catch (err) {
      console.error('Document pick error:', err);
    }
  };

  const handleContinue = () => {
    navigation.navigate("OrderDetails");
  };

  return Platform.OS === 'web' ? (
    <SafeAreaView className="flex-1 bg-[#F5F5F5]">
      <WebHeaderNavigator navigation={navigation} />
      <View className="mx-auto w-full h-[calc(100vh-60px)] overflow-hidden flex flex-col">
        <View className=' shadow-lg shadow-[#0C0C0D1A] bg-white'>
          {/* Header */}
          <View className="flex-row items-center justify-between px-4 py-2">
            <View className="flex-row items-center">
              <TouchableOpacity onPress={() => navigation.goBack()} className="pr-2">
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
          <View className="flex-row justify-between items-center px-6 py-2 mb-2">
            <View className="items-center">
              <View className="justify-center mb-1">
                <View className="w-10 h-10 rounded-full border border-black items-center justify-center">
                  <Feather name="map-pin" size={24} color="black" />
                </View>
              </View>
              <Text className="font-inter-semibold text-[13px] text-black">Address</Text>
            </View>

            <View className="flex-1 h-[1px] border-[1px] mb-6 border-dashed border-[#BEC4C8]" />

            <View className="items-center mx-[-20px]">
              <View className="items-center justify-center mb-1">
                <View className="w-10 h-10 rounded-full border border-[#D1D5DB] items-center justify-center">
                  <Feather name="box" size={24} color="#D1D5DB" />
                </View>
              </View>
              <Text className="font-inter-semibold text-[13px] text-[#A0A1A1] w-[90px] text-center">Item details</Text>
            </View>

            <View className="flex-1 h-[1px] border-[1px] mb-6 border-dashed border-[#E0E0E0]" />

            <View className="items-center">
              <View className="items-center justify-center mb-1">
                <View className="w-10 h-10 rounded-full border border-[#D1D5DB] items-center justify-center">
                  <MaterialCommunityIcons name="currency-inr" size={24} color="#D1D5DB" />
                </View>
              </View>
              <Text className="font-inter-semibold text-[13px] text-[#A0A1A1]">Charges</Text>
            </View>
          </View>
        </View>

        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <View className="flex flex-row w-full justify-between xl:px-[10%] py-4">
            {/* Delivery Type */}
            <View className="w-[50%] xl:w-[40%]">
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
                    zIndex: 1000,
                  }}
                  textStyle={{
                    fontSize: 14,
                    fontFamily: 'Inter_500Medium',
                  }}
                  dropDownContainerStyle={{
                    borderColor: '#E0E0E0',
                    borderRadius: 8,
                    zIndex: 1000,
                    elevation: 5,
                  }}
                  listItemContainerStyle={{
                    height: 40,
                  }}
                  zIndex={1000}
                  zIndexInverse={1000}
                />
              </View>

              <View className="relative px-4">
                {/* Dotted Line with Indicators */}
                <View className="absolute left-6 items-center h-[52.2%] " style={{ top: 18, bottom: 150 }}>
                  <View className="w-[10px] h-[10px] mb-1 rounded-full bg-green-500" />
                  <View className="flex-1 border-l border-dashed border-[#7C7C7C] " />
                  <FontAwesome6 name="location-pin" size={15} color="red" />
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
            </View>
            <View className="w-[50%] xl:w-[40%]">
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

                {uploadedDocs.length === 0 && (
                  <TouchableOpacity
                    onPress={pickDocument}
                    className="flex-row justify-between items-center px-3 py-2.5 bg-white border border-[#E0E0E0] rounded-lg"
                  >
                    <Text className="text-[15px] font-inter">Upload additional documents</Text>
                    <View className="flex-row items-center">
                      <Text className="text-[#007AFF] text-[15px] font-medium mr-1">Upload</Text>
                      <MaterialIcons name="vertical-align-top" size={20} color="#007AFF" />
                    </View>
                  </TouchableOpacity>
                )}

                {/* Show uploaded docs */}
                {uploadedDocs.map((doc, index) => (
                  <View
                    key={index}
                    className="flex-row items-center px-3 py-2.5 bg-white border border-[#E0E0E0] rounded-lg mt-2"
                  >
                    <MaterialIcons name="insert-drive-file" size={20} color="#007AFF" className="mr-2" />
                    <Text
                      className="text-[15px] font-inter flex-1"
                      numberOfLines={1}
                      ellipsizeMode="middle"
                    >
                      {doc}
                    </Text>
                  </View>
                ))}

                {/* Show "Upload another document" link */}
                {uploadedDocs.length > 0 && (
                  <TouchableOpacity onPress={pickDocument} className="mt-2">
                    <Text className="text-[#007AFF] text-[15px] text-center font-inter-medium">+ Upload another document</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        </ScrollView>

        {/* Continue Button - Fixed at bottom */}
        <View className="px-4 py-4 bg-white rounded-lg shadow-sm w-full flex justify-end items-end mt-auto">
          <TouchableOpacity
            onPress={handleContinue}
            className="bg-[#007AFF] py-3 rounded-lg items-center xl:w-[10%] w-[20%]"
          >
            <Text className="text-white text-[15px] font-inter-medium">Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  ) : (
    <SafeAreaView className="flex-1  bg-[#F5F5F5]">
      {/* Header */}
      <View className="flex-row  justify-between bg-white pt-3 ">
      <Header title="Book new order" navigation={navigation} />
      <TouchableOpacity onPress={()=> setShowCancelModal(true)}>
    <Text className="text-[16px] text-[#C30606] font-inter-medium pt-6 pr-3">Cancel Order</Text>
  </TouchableOpacity>
</View>
      {/* Progress Indicators */}

      <View className="flex-row justify-between items-center px-4 py-4 bg-white shadow-[0_4px_10px_rgba(0,0,3,0.1)]">
        <View className="items-center ">
          <View className="  justify-center mb-1">
            <View className="w-10 h-10 rounded-full border border-black items-center justify-center">
              <Feather name="map-pin" size={24} color="black" />
            </View>
          </View>
          <Text className="font-inter-semibold text-[13px] text-[black]">Address</Text>
        </View>

        <View className="flex-1 h-[1px] border-[1px]  mb-6 border-dashed border-[#BEC4C8]" />

        <View className="items-center ml-[-20px] mr-[-20px]">
          <View className="items-center justify-center mb-1">
            <View className="w-10 h-10 rounded-full border border-[#D1D5DB] items-center justify-center">
              <Feather name="box" size={24} color="#D1D5DB" />
            </View>
          </View>
          <Text className="font-inter-semibold text-[13px] text-[#A0A1A1] w-[90px] text-center whitespace-nowrap">Item details</Text>
        </View>

        <View className="flex-1 h-[1px] border-[1px] mb-6 border-dashed border-[#E0E0E0]" />

        <View className="items-center ">
          <View className="items-center justify-center mb-1">
            <View className="w-10 h-10 rounded-full border border-[#D1D5DB] items-center justify-center">
              <MaterialCommunityIcons name="currency-inr" size={24} color="#D1D5DB" />
            </View>
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
              zIndex: 1000,
            }}
            textStyle={{
              fontSize: 14,
              fontFamily: 'Inter_500Medium',
            }}
            dropDownContainerStyle={{
              borderColor: '#E0E0E0',
              borderRadius: 8,
              zIndex: 1000,
              elevation: 5,
            }}
            listItemContainerStyle={{
              height: 40,
            }}
            zIndex={1000}
            zIndexInverse={1000}
          />
        </View>

        <View className="relative px-4">
          {/* Dotted Line with Indicators */}
          <View className="absolute left-6 items-center" style={{ top: 20, bottom: 185 }}>
            <View className="w-[10px] h-[10px] mb-1 rounded-full bg-green-500" />
            <View className="flex-1 border-l border-dashed border-[#7C7C7C]" />
            <FontAwesome6 name="location-pin" size={15} color="red" />
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

          {uploadedDocs.length === 0 && (
            <TouchableOpacity
              onPress={pickDocument}
              className="flex-row justify-between items-center px-3 py-2.5 bg-white border border-[#E0E0E0] rounded-lg"
            >
              <Text className="text-[15px] font-inter">Upload additional documents</Text>
              <View className="flex-row items-center">
                <Text className="text-[#007AFF] text-[15px] font-medium mr-1">Upload</Text>
                <MaterialIcons name="vertical-align-top" size={20} color="#007AFF" />
              </View>
            </TouchableOpacity>
          )}

          {/* Show uploaded docs */}
          {uploadedDocs.map((doc, index) => (
            <View
              key={index}
              className="flex-row items-center px-3 py-2.5 bg-white border border-[#E0E0E0] rounded-lg mt-2"
            >
              <MaterialIcons name="insert-drive-file" size={20} color="#007AFF" className="mr-2" />
              <Text
                className="text-[15px] font-inter flex-1"
                numberOfLines={1}
                ellipsizeMode="middle"
              >
                {doc}
              </Text>
            </View>
          ))}

          {/* Show "Upload another document" link */}
          {uploadedDocs.length > 0 && (
            <TouchableOpacity onPress={pickDocument} className="mt-2">
              <Text className="text-[#007AFF] text-[15px] text-center font-inter-medium">+ Upload another document</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>

      {/* Continue Button */}
      <View className="px-4 py-2 mb-15 bg-white flex justify-center items-center">
        <TouchableOpacity className="bg-[#007AFF] py-3 mt-3 w-full max-w-[412px] rounded-lg items-center">
          <Text className="text-white text-[15px] font-inter-medium">Continue</Text>
        </TouchableOpacity>
      </View>

      {/* Cancel Modal */}
      {showCancelModal && (
        <View className="absolute inset-0 bg-black/80  justify-center items-center z-50">
          <View className="w-[85%] bg-white rounded-2xl p-6 shadow-lg">
            <Text className="text-[16px] text-[#505152] font-inter text-center self-center mb-6 w-40">
              Do you wish to cancel this order?
            </Text>

            <View className="flex-row justify-between">
              <TouchableOpacity
                onPress={() => setShowCancelModal(false)}
                className="border border-[#93E23E] px-4 py-2 rounded-md flex-1 mr-2"
              >
                <Text className="text-black text-center font-inter-semibold">Save in drafts</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setShowCancelModal(false);
                  navigation.navigate("BookOrder");
                }}
                className="bg-[#93E23E] px-4 py-2 rounded-md flex-1 ml-2"
              >
                <Text className="text-black text-center font-inter-semibold">Yes, cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}

    </SafeAreaView>
  );
}
