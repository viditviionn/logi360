import { View, Text, Platform, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import Button from 'components/Button';
import RadioButton from 'components/RadioButton';

export default function LanguageSelectionScreen({ navigation }: any) {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const LANGUAGES = ['English', 'Hindi', 'Marathi', 'Gujarati', 'Urdu', 'Punjabi', 'Bengali', 'Tamil', 'Telugu', 'Kannada',];
  const [selected, setSelected] = useState('English');
  const [open, setOpen] = useState(false);

  const handleProceed = () => {
    navigation.replace('Login');
  };

  return (
    <>
      {Platform.OS === 'web' ? (
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
      ) : (
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
  
      )}
    </>
  );
}
