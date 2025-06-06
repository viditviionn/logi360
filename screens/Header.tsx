import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
 
interface HeaderProps {
  title: string;
  navigation: any;
  showBack?: boolean;
  bgColor?: string;
  bottomBorder?: boolean;
  shadow?: boolean;
}
 
const Header: React.FC<HeaderProps> = ({
  title,
  navigation,
  showBack = true,
  bgColor,
  bottomBorder = false,
  shadow = false,
}) => {
  const combinedStyles = [
    'w-full h-[60px] flex-row items-center px-4',
    bgColor,
    bottomBorder ? 'border-b border-gray-200' : '',
    shadow ? 'shadow-[0_1px_4px_rgba(0,0,0,0.1)]' : '',
  ]
    .filter(Boolean)
    .join(' ');
 
  return (
    <View className={combinedStyles}>
      {showBack && (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="mr-3"
          accessibilityLabel="Back">
          <Ionicons name="chevron-back" size={20} color="#000" />
        </TouchableOpacity>
      )}
      <Text className="font-inter-semibold text-[20px] leading-[100%] tracking-[0] text-black">
        {title}
      </Text>
    </View>
  );
};
 
export default Header;