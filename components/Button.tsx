import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  label: string;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export default function Button({ 
  label, 
  variant = 'primary', 
  disabled = false,
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyle = 'rounded-[8px] py-3 h-[40px] w-full max-w-[412px]';
  const variantStyles = {
    primary: disabled ? 'bg-[#E5E5E5]' : 'bg-[#93E23E]',
    secondary: 'bg-gray-200'
  };

  return (
    <TouchableOpacity
      className={`${baseStyle}  ${variantStyles[variant]} ${className}`}
      disabled={disabled}
      {...props}
    >
      <Text className={`text-center text-sm font-inter-medium ${disabled ? 'text-[#71717A]' : 'text-[#505152]'}`}>
        {label}
      </Text>
    </TouchableOpacity>
  );
} 