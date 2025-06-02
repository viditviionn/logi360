import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from '@expo-google-fonts/inter';
import RadioButton from 'components/RadioButton';
import Button from 'components/Button';
import { useState } from 'react';

export default function LanguageSelectionScreen({ navigation }: any) {
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const handleProceed = () => {
   
    navigation.replace('Login');  
  }
// select language screen
  return (
    <View className="flex-1 bg-white px-3">
      <View className="pt-12">
        <View className="flex-row items-center mb-6">
          <Ionicons name="chevron-back" size={24} color="#000" />
          <Text className="ml-2 text-[20px]  font-inter-semibold text-black">
            Select a language
          </Text>
        </View>

        <View className="flex-row justify-start items-center ml-2">
          <RadioButton
            label="English"
            selectedValue={selectedLanguage}
            onSelect={setSelectedLanguage}
          />
          <RadioButton
            label="Hindi"
            selectedValue={selectedLanguage}
            onSelect={setSelectedLanguage}
          />
        </View>
      </View>

      <View className="flex-1 justify-end">
        <Button
          label="Proceed"
          onPress={handleProceed}
          disabled={!selectedLanguage}
          className="mb-8"
        />
      </View>
    </View>
  );
}

