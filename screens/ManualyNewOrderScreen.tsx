import React, { useEffect, useState } from 'react'
import { Image, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './Header'
import ProgressStepper from 'components/ProgressStepper'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import DropDownPicker from 'react-native-dropdown-picker';
import * as DocumentPicker from 'expo-document-picker';
import WebHeaderNavigator from 'navigation/HeaderTabNavigator';
import { Feather, FontAwesome6, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';


type RootStackParamList = {
    OrderDetails: undefined;
    BookOrder: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList>;

export default function ManualyNewOrderScreen({ navigation, }: Props) {
    const [open, setOpen] = useState(false);
    const [deliveryType, setDeliveryType] = useState('godown');
    const [items, setItems] = useState([
        { label: 'Godown', value: 'godown' },
        { label: 'Home', value: 'home' },
        { label: 'Office', value: 'office' },

    ]);


    const [uploadedDocs, setUploadedDocs] = useState<string[]>([]);
    const [showCancelModal, setShowCancelModal] = useState(false);

    useEffect(() => {
        setShowCancelModal(false)
    }, []);

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

    return (
        Platform.OS === 'web' ? (
            <SafeAreaView className="flex-1  bg-[#F5F5F5]">
            {/* Header */}
            <View className="flex-row  justify-between bg-white pt-3 ">
                <Header title="Book new order" navigation={navigation} />
                <TouchableOpacity>
                    <Text className="text-[16px] text-[#C30606] font-inter-medium pt-6 pr-3">Cancel Order</Text>
                </TouchableOpacity>
            </View>
            {/* Progress Indicators */}
            <ProgressStepper activeStep={1} />
            <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
                {/* Delivery Type */}
                <View className="pt-2 pb-4  bg-[f7fafd]">
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

                <View className="pt-2 pb-4 ">
                    <Text className="text-[14px] text-[#666] font-inter mb-1">Consignor Name</Text>
                    <TextInput
                        className="bg-white px-3 py-4 border border-[#E0E0E0] rounded-lg font-inter "
                        value={""}
                        style={{ fontSize: 14 }}
                        placeholder="Enter consignor's name"
                        placeholderTextColor="#E57C00"
                    />
                </View>


                <View className="pt-2 pb-4 bg-[f7fafd]">
                    <Text className="text-[14px] text-[#666] font-inter mb-1">Consignor GSTIN/Aadhar no.</Text>

                    <View className="flex-row items-center bg-white px-3 py-1 border border-[#E0E0E0] rounded-lg">
                        <TextInput
                            className="flex-1 text-black font-inter-medium"
                            value="22AAA0001A1Z8"

                            multiline={false}
                            scrollEnabled={false}
                            editable={false}
                        />
                        <Text className="text-[#189F00] font-inter-semibold mr-2">Verified</Text>
                        <Image source={require('../assets/icons/check.png')} className="w-5 h-5" />
                    </View>
                </View>


                <View className="pt-2 pb-2  bg-[f7fafd]">
                    <Text className="text-[14px] text-[#666] font-inter mb-1">From Address</Text>
                    <TextInput
                        className="bg-white px-3 py-4 border border-[#E0E0E0] font-inter-medium rounded-lg "
                        value={"A-1302, Gokuldham Society, Sector 35D, Kharghar Navi Mumbai - 410210"}
                        style={{ fontSize: 15, color: "black" }}
                        multiline={true}
                        scrollEnabled={false}
                        editable={false}
                    />
                </View>

                <View className="pt-2 pb-4  bg-[f7fafd]">
                    <Text className="text-[14px] text-[#666] font-inter mb-1">Consignor Mobile No.</Text>

                    <View className="flex-row items-center bg-white px-3 py-1 border border-[#E0E0E0] rounded-lg">
                        <TextInput
                            className="flex-1 text-black font-inter-medium"
                            value="+91 748311978"

                            multiline={true}
                            scrollEnabled={false}
                            editable={false}
                        />
                        <MaterialIcons name="perm-contact-calendar" size={24} color="black" />
                    </View>
                </View>
                <View className='py-2'><View className="h-[1px]  bg-gray-300 " /></View>


                <View className="pt-2 pb-4 ">
                    <Text className="text-[14px] text-[#666] font-inter mb-1">Consignee Name</Text>
                    <TextInput
                        className="bg-white px-3 py-4 border border-[#E0E0E0] rounded-lg font-inter"
                        value={""}
                        style={{ fontSize: 14 }}
                        placeholder="Enter consignee's name"
                        placeholderTextColor="#E57C00"
                    />
                </View>


                <View className="pt-2 pb-4 bg-[f7fafd]">
                    <Text className="text-[14px] text-[#666] font-inter mb-1">Consignor GSTIN/Aadhar no.</Text>

                    <View className="flex-row items-center bg-white px-3 py-1 border border-[#E0E0E0] rounded-lg">
                        <TextInput
                            className="flex-1 text-black font-inter-medium"
                            value="22AAA0001A1Z8"
                            multiline={false}
                            scrollEnabled={false}
                            editable={false}
                        />
                        <Text className="text-[#189F00] font-inter-semibold mr-2">Verified</Text>
                        <Image source={require('../assets/icons/check.png')} className="w-5 h-5" />
                    </View>
                </View>
                <View className="pt-2 pb-2  bg-[f7fafd]">
                    <Text className="text-[14px] text-[#666] font-inter mb-1">To Address</Text>
                    <TextInput
                        className="bg-white px-3 py-4 border border-[#E0E0E0] rounded-lg font-inter-medium "
                        value={"A-1302, Gokuldham Society, Sector 35D, Kharghar Navi Mumbai - 410210"}
                        multiline={true}
                        scrollEnabled={false}
                        editable={false}
                    />
                </View>



                <View>
                    <View className="mt-5 mb-4">
                        <View className="flex-row space-x-6">
                            <View className="flex-1 mr-4">
                                <Text className="text-[#666869] text-[14px] font-inter  mb-1">E-way Bill No.</Text>
                                <TextInput
                                    className="bg-white px-4 py-2.5 border border-[#E0E0E0] rounded-lg  font-inter-medium"
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



                    <View className="pt-2 mb-4">
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


            </ScrollView>



            <View className="px-4  mb-15 bg-white justify-center items-center">
                <TouchableOpacity className="bg-[#007AFF] py-3 mt-3 w-full max-w-[412px] rounded-lg items-center">
                    <Text className="text-white text-[15px] font-inter-medium">Continue</Text>
                </TouchableOpacity>
            </View>

            {showCancelModal && (
                <View className="absolute inset-0 bg-black/80 justify-center items-center z-50">
                    <View className="w-[85%] bg-white rounded-2xl p-6 shadow-lg">
                        <Text className="text-[16px] text-[#505152] font-inter text-center self-center mb-6">
                            There was some issue fetching the details. Please enter the order details manually.
                        </Text>

                        <View className="flex-row justify-center w-full"> {/* Center the button */}
                            <TouchableOpacity
                                onPress={() => {
                                    setShowCancelModal(false);
                                }}
                                className="bg-[#93E23E] px-10 py-2 rounded-md"
                            >
                                <Text className="text-black text-center font-inter-semibold">Ok</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )}

        </SafeAreaView>
          ):(
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <SafeAreaView className="flex-1  bg-[#F5F5F5]">
                {/* Header */}
                <View className="flex-row  justify-between bg-white pt-3 ">
                    <Header title="Book new order" navigation={navigation} />
                    <TouchableOpacity>
                        <Text className="text-[16px] text-[#C30606] font-inter-medium pt-6 pr-3">Cancel Order</Text>
                    </TouchableOpacity>
                </View>
                {/* Progress Indicators */}
                <ProgressStepper activeStep={1} />
                <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
                    {/* Delivery Type */}
                    <View className="pt-2 pb-4  bg-[f7fafd]">
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

                    <View className="pt-2 pb-4 ">
                        <Text className="text-[14px] text-[#666] font-inter mb-1">Consignor Name</Text>
                        <TextInput
                            className="bg-white px-3 py-4 border border-[#E0E0E0] rounded-lg font-inter "
                            value={""}
                            style={{ fontSize: 14 }}
                            placeholder="Enter consignor's name"
                            placeholderTextColor="#E57C00"
                        />
                    </View>


                    <View className="pt-2 pb-4 bg-[f7fafd]">
                        <Text className="text-[14px] text-[#666] font-inter mb-1">Consignor GSTIN/Aadhar no.</Text>

                        <View className="flex-row items-center bg-white px-3 py-1 border border-[#E0E0E0] rounded-lg">
                            <TextInput
                                className="flex-1 text-black font-inter-medium"
                                value="22AAA0001A1Z8"

                                multiline={false}
                                scrollEnabled={false}
                                editable={false}
                            />
                            <Text className="text-[#189F00] font-inter-semibold mr-2">Verified</Text>
                            <Image source={require('../assets/icons/check.png')} className="w-5 h-5" />
                        </View>
                    </View>


                    <View className="pt-2 pb-2  bg-[f7fafd]">
                        <Text className="text-[14px] text-[#666] font-inter mb-1">From Address</Text>
                        <TextInput
                            className="bg-white px-3 py-4 border border-[#E0E0E0] font-inter-medium rounded-lg "
                            value={"A-1302, Gokuldham Society, Sector 35D, Kharghar Navi Mumbai - 410210"}
                            style={{ fontSize: 15, color: "black" }}
                            multiline={true}
                            scrollEnabled={false}
                            editable={false}
                        />
                    </View>

                    <View className="pt-2 pb-4  bg-[f7fafd]">
                        <Text className="text-[14px] text-[#666] font-inter mb-1">Consignor Mobile No.</Text>

                        <View className="flex-row items-center bg-white px-3 py-1 border border-[#E0E0E0] rounded-lg">
                            <TextInput
                                className="flex-1 text-black font-inter-medium"
                                value="+91 748311978"

                                multiline={true}
                                scrollEnabled={false}
                                editable={false}
                            />
                            <MaterialIcons name="perm-contact-calendar" size={24} color="black" />
                        </View>
                    </View>
                    <View className='py-2'><View className="h-[1px]  bg-gray-300 " /></View>


                    <View className="pt-2 pb-4 ">
                        <Text className="text-[14px] text-[#666] font-inter mb-1">Consignee Name</Text>
                        <TextInput
                            className="bg-white px-3 py-4 border border-[#E0E0E0] rounded-lg font-inter"
                            value={""}
                            style={{ fontSize: 14 }}
                            placeholder="Enter consignee's name"
                            placeholderTextColor="#E57C00"
                        />
                    </View>


                    <View className="pt-2 pb-4 bg-[f7fafd]">
                        <Text className="text-[14px] text-[#666] font-inter mb-1">Consignor GSTIN/Aadhar no.</Text>

                        <View className="flex-row items-center bg-white px-3 py-1 border border-[#E0E0E0] rounded-lg">
                            <TextInput
                                className="flex-1 text-black font-inter-medium"
                                value="22AAA0001A1Z8"
                                multiline={false}
                                scrollEnabled={false}
                                editable={false}
                            />
                            <Text className="text-[#189F00] font-inter-semibold mr-2">Verified</Text>
                            <Image source={require('../assets/icons/check.png')} className="w-5 h-5" />
                        </View>
                    </View>
                    <View className="pt-2 pb-2  bg-[f7fafd]">
                        <Text className="text-[14px] text-[#666] font-inter mb-1">To Address</Text>
                        <TextInput
                            className="bg-white px-3 py-4 border border-[#E0E0E0] rounded-lg font-inter-medium "
                            value={"A-1302, Gokuldham Society, Sector 35D, Kharghar Navi Mumbai - 410210"}
                            multiline={true}
                            scrollEnabled={false}
                            editable={false}
                        />
                    </View>



                    <View>
                        <View className="mt-5 mb-4">
                            <View className="flex-row space-x-6">
                                <View className="flex-1 mr-4">
                                    <Text className="text-[#666869] text-[14px] font-inter  mb-1">E-way Bill No.</Text>
                                    <TextInput
                                        className="bg-white px-4 py-2.5 border border-[#E0E0E0] rounded-lg  font-inter-medium"
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



                        <View className="pt-2 mb-4">
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


                </ScrollView>



                <View className="px-4  mb-15 bg-white justify-center items-center">
                    <TouchableOpacity className="bg-[#007AFF] py-3 mt-3 w-full max-w-[412px] rounded-lg items-center">
                        <Text className="text-white text-[15px] font-inter-medium">Continue</Text>
                    </TouchableOpacity>
                </View>

                {showCancelModal && (
                    <View className="absolute inset-0 bg-black/80 justify-center items-center z-50">
                        <View className="w-[85%] bg-white rounded-2xl p-6 shadow-lg">
                            <Text className="text-[16px] text-[#505152] font-inter text-center self-center mb-6">
                                There was some issue fetching the details. Please enter the order details manually.
                            </Text>

                            <View className="flex-row justify-center w-full"> {/* Center the button */}
                                <TouchableOpacity
                                    onPress={() => {
                                        setShowCancelModal(false);
                                    }}
                                    className="bg-[#93E23E] px-10 py-2 rounded-md"
                                >
                                    <Text className="text-black text-center font-inter-semibold">Ok</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )}

            </SafeAreaView>
        </KeyboardAvoidingView>
          )


    )
}





