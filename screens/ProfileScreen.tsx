import { View, Text, SafeAreaView } from 'react-native';

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#F5F5F5]">
      <View className="p-4">
        <Text className="text-2xl font-semibold">Profile</Text>
      </View>
    </SafeAreaView>
  );
} 