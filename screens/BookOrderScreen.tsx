import { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Image, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Header from './Header';

export default function BookOrderScreen({ navigation, setActiveTab }: any) {
  const [dragOver, setDragOver] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<any>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleManualUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedFile(file);
      setPreviewUrl(imageUrl);
    }
  };


  const handleDrop = (event: any) => {
    event.preventDefault();
    setDragOver(false);
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedFile(file);
      setPreviewUrl(imageUrl);
    }
  };

  const handleDragOver = (event: any) => {
    event.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleCancel = () => {
    setUploadedFile(null);
    setPreviewUrl(null);
  };

  const handleApply = () => {
    navigation.navigate('NewOrder');
  };

  return (
    <>
      {
        Platform.OS === 'web' ? (
          <SafeAreaView className="flex gap-[10vh] h-[100%] bg-[#f7fafd]">
            <View
              className="flex-row items-center bg-white px-4 py-6 "
              style={{
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.08,
                shadowRadius: 8,
                elevation: 4,
              }}
            >
              <TouchableOpacity
                onPress={() => setActiveTab('home')}
                className="pt-4 pr-3"
              >
                <Ionicons name="chevron-back" size={24} color="#000" />
              </TouchableOpacity>
              <Text className="pt-4 text-[18px] font-inter-semibold text-black">
                Book new order
              </Text>
            </View>

            <View className="flex justify-center items-center px-2">
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
              {previewUrl ? (
                <View className="items-center">
                  <View style={{
                    borderRadius: 12,
                    borderWidth: 1,
                    width: 400,
                    height: 250,
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 20,
                  }}>
                    <Image
                      source={{ uri: previewUrl }}
                      style={{
                        width: 380,
                        height: 230,
                      }}
                      resizeMode="contain"
                    />
                  </View>
                </View>
              ) : (
                <div
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  style={{
                    borderWidth: 2,
                    borderColor: dragOver ? '#93E23E' : '#ccc',
                    borderStyle: 'dashed',
                    borderRadius: 12,
                    width: '400',
                    height: '400',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: dragOver ? '#f0fff0' : '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: 20,
                  }}
                >
                  <Image
                    source={require('../assets/images/scan.png')}
                    style={{ width: 150, height: 150, marginBottom: 12 }}
                    resizeMode="contain"
                  />
                  <Text className="text-[#7A7C7C] text-[14px] text-center font-inter">
                    Drag and drop your invoice or e-way bill image here
                  </Text>
                </div>
              )}
            </View>

            <View className="flex-row justify-center w-full px-4 pb-6 gap-x-4">
              {!previewUrl ? (
                <TouchableOpacity
                  onPress={handleManualUploadClick}
                  className="flex-1 border border-[#93E23E] rounded-lg py-3 items-center bg-white max-w-[300px]"
                >
                  <Text className="text-[#262727] font-inter-medium">
                    Enter Manually
                  </Text>
                </TouchableOpacity>

              ) : (
                <>
                  <TouchableOpacity
                    onPress={handleCancel}
                    className="flex-1 border border-red-400 rounded-lg py-3 items-center bg-white max-w-[140px]"
                  >
                    <Text className="text-red-600 font-inter-medium">Cancel</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={handleApply}
                    className="flex-1 bg-[#93E23E] rounded-lg py-3 items-center max-w-[140px]"
                  >
                    <Text className="text-[#262727] font-inter-medium">Apply</Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
          </SafeAreaView>
        ) : (
          <SafeAreaView className="flex-1 bg-[#f7fafd]">
            <StatusBar backgroundColor="white" />
            <Header
              title="Book New Order"
              navigation={navigation}
              bgColor="bg-[#FFFFFF]"
              bottomBorder={true}
            />

            <View className="flex-1 justify-center items-center px-2">
              <Image
                source={require('../assets/images/scan.png')}
                className="w-[294px] h-[294px] mb-6"
                resizeMode="contain"
              />

              <Text className="text-center text-[#7A7C7C] text-[16px] font-inter mb-10 leading-relaxed">
                Click a picture of the e-invoice/invoice/e-way{'\n'}
                or enter order details manually
              </Text>
            </View>

            <View className="flex-row justify-between w-full px-4 pb-6 gap-x-4">
              <TouchableOpacity className="flex-1 border border-[#93E23E] rounded-lg py-3 items-center bg-white">
                <Text className="text-[#262727] font-inter-medium">
                  Enter Manually
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {
                if (Platform.OS !== 'web') {
                  navigation.navigate('InvoiceScanner');
                }
              }} className="flex-1 bg-[#93E23E] rounded-lg py-3 items-center">
                <Text className="text-[#262727]  font-inter-medium">
                  Take picture
                </Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        )
      }
    </>
  );
}
