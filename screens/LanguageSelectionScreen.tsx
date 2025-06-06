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
    navigation.navigate('Login');
  };

  return (
    <>
      {Platform.OS === 'web' ? (
        <View className="flex-1 w-full max-w-[700px] shadow-lg rounded-xl ml-[25%] mr-[25%] m-10">
          <View className="pt-12 w-full px-4">
            <View className="flex-row justify-center items-center mb-6">
              <Text className=" text-[20px] font-inter-semibold text-black">
                Select a language
              </Text>
            </View>
            {/* <View className="px-4 py-4 flex-col justify-center items-center">
              <Text className="text-gray-500 mb-2 ml-[34%] w-full">Language</Text>
              <View className="bg-white border border-gray-300 rounded-md overflow-hidden w-2/3">
                <TouchableOpacity
                  onPress={() => setOpen(!open)}
                  className="px-4 py-3 flex-row justify-between items-center"
                >
                  <Text className="text-black font-inter-medium">{selected}</Text>
                  <Ionicons name={open ? 'chevron-up' : 'chevron-down'} size={24} color="#000" />
                </TouchableOpacity>

                {open && (
                  <View className="h-[220px] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none]">
                    {LANGUAGES.filter((lang) => lang !== selected).map((lang) => (
                      <TouchableOpacity
                        key={lang}
                        onPress={() => {
                          setSelected(lang);
                          setOpen(false);
                        }}
                        className="px-4 py-3"
                      >
                        <Text className="text-black">{lang}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
              </View>
            </View> */}
             <View className="flex-row justify-center items-center ml-2">
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

          <View className="flex-1 justify-end items-center w-full">
            <Button
              label="Proceed"
              onPress={handleProceed}
              disabled={!selectedLanguage}
              className="mb-8"
            />
          </View>
        </View>
      ) : (
        // <View className="flex-1 px-3 mt-10">
        //   <View className="pt-12">
        //     <View className="flex-row items-center mb-6">
        //       <Ionicons name="chevron-back" size={24} color="#000" />
        //       <Text className="ml-2 text-[20px] font-inter-semibold text-black">
        //         Select a language
        //       </Text>
        //     </View>
        //     <View className="bg-white border border-gray-300 rounded-md overflow-hidden">
        //       <TouchableOpacity
        //         onPress={() => setOpen(!open)}
        //         className="px-4 py-3 flex-row justify-between items-center"
        //       >
        //         <Text className="text-black font-inter-medium ">{selected}</Text>
        //         <Ionicons name={open ? 'chevron-up' : 'chevron-down'} size={24} color="#000" />
        //       </TouchableOpacity>

        //       {open && (
        //         <ScrollView
        //           className="h-[200px]"
        //           showsVerticalScrollIndicator={true}
        //           nestedScrollEnabled={true}
        //         >
        //           {LANGUAGES.filter((lang) => lang !== selected).map((lang) => (
        //             <TouchableOpacity
        //               key={lang}
        //               onPress={() => {
        //                 setSelected(lang);
        //                 setOpen(false);
        //               }}
        //               className="px-4 py-3"
        //             >
        //               <Text className="text-black">{lang}</Text>
        //             </TouchableOpacity>
        //           ))}
        //         </ScrollView>
        //       )}
        //     </View>

        //   </View>

        //   <View className="flex-1 justify-end">
        //     <Button
        //       label="Proceed"
        //       onPress={handleProceed}
        //       disabled={!selectedLanguage}
        //       className="mb-8"
        //     />
        //   </View>
        // </View>
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
