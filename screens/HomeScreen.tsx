import { View, Text, SafeAreaView, TouchableOpacity, Image, StatusBar, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
export default function HomeScreen({ navigation , setActiveTab}: any) {
  return (
      <>
        {
          Platform.OS === 'web' ? (
            <>
            <SafeAreaView className="flex-1 gap-6">
          <StatusBar backgroundColor="#2F2F2F" />
          <View className="flex-1 flex-row gap-6 px-4 mt-6">

            <TouchableOpacity
              className="bg-white rounded-2xl w-[20%] h-[200px]"
              onPress={() => setActiveTab('bookOrder')}
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
              onPress={() => setActiveTab('bookOrder')}
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
              <View>
                <TouchableOpacity className="flex-row items-center  mt-5">
                  <Text className="text-white text-[16px] font-poppins-semibold mr-2 " >APMC Market</Text>
                  <Ionicons name="chevron-down" size={18} color="white" />
                </TouchableOpacity>
                <Text className="text-[#BEC4C8] font-inter  text-[12px] ">Administrative building, Sec 18, Vashi Navi M...</Text>
              </View>
              <TouchableOpacity className='pt-5 mr-3'>
                <Image
                  source={require('../assets/icons/notification.png')}
                />
              </TouchableOpacity>
            </View>
          </View>

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
