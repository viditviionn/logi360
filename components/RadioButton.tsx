
import { View, Text, TouchableOpacity } from 'react-native';

interface RadioButtonProps {
  label: string;
  selectedValue: string;
  onSelect: (label: string) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  selectedValue,
  onSelect,
}) => {
  const isSelected = selectedValue === label;

  return (
    <TouchableOpacity
      key={label}
      className={`flex-row items-center mr-12 ${label === 'Hindi' ? 'ml-12' : ''}`}
      onPress={() => onSelect(label)}
    >
      <View
        className={`h-[20px] w-[20px] rounded-full items-center justify-center mr-3 ${
          isSelected
            ? 'border-[5px] border-[#93E23E]'
            : 'border-[1px] border-[#7A7C7C]'
        }`}
      >
        {isSelected && <View />}
      </View>
      <Text className={`text-[16px] font-inter ${isSelected ? 'font-inter-semibold' : 'font-inter'} text-black`}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default RadioButton;