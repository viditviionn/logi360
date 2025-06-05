import { View, Text, TouchableOpacity, Image, Platform, TextInput } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import { Ionicons } from '@expo/vector-icons';
import Button from '../components/Button';
import { StatusBar } from 'expo-status-bar';

export default function OtpScreen({ navigation }: any) {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [timer, setTimer] = useState(30);
    const [isLoading, setIsLoading] = useState(false);
    const [activeIndex, setActiveIndex] = useState(-1);
 
    const isAllDigitsFilled = otp.join('').includes('888');
    const inputRefs = Array(6).fill(null).map(() => useRef<TextInput>(null));
 
    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
        }, 1000);
 
        return () => clearInterval(interval);
    }, []);
 
    const handleNumberPress = (num: string) => {
        if (isLoading) return; // Prevent input while loading
        const currentIndex = otp.findIndex(digit => digit === '');
        if (currentIndex !== -1) {
            const newOtp = [...otp];
            newOtp[currentIndex] = num;
            setOtp(newOtp);
            setActiveIndex(currentIndex);
            // Move to next box if available
            if (currentIndex < 5) {
                setActiveIndex(currentIndex + 1);
            }
        }
    };
 
    const handleBackspace = () => {
        if (isLoading) return; // Prevent input while loading
        const lastFilledIndex = otp.map(digit => digit !== '').lastIndexOf(true);
        if (lastFilledIndex !== -1) {
            const newOtp = [...otp];
            newOtp[lastFilledIndex] = '';
            setOtp(newOtp);
            setActiveIndex(lastFilledIndex);
        }
    };
 
    const handleVerify = () => {
 
        setIsLoading(true);
        console.log('Verify button pressed');
        setIsLoading(true);
        setTimeout(() => {
 
            setIsLoading(false);
 
            if (navigation) {
                navigation.navigate('Home');
            } else {
                console.log('Navigation prop is undefined');
            }
        }, 4000);
 
 
    };

    return (
        Platform.OS === 'web' ? (
            <View className="flex-1 bg-[#F5F5F5] px-4 max-w-[700px] shadow-lg rounded-xl ml-[25%] mr-[25%] m-10">
                <StatusBar backgroundColor="#F5F5F5" style="light" />
                <View className="flex-row items-center pt-4 mt-10 mb-8 ml-[-6px]">
                    <TouchableOpacity onPress={() => navigation.goBack()} className="mr-2" disabled={isLoading}>
                        <Ionicons name="chevron-back" size={24} color="#000" />
                    </TouchableOpacity>
                    <Text className="text-[20px] font-inter-semibold text-black">Enter OTP</Text>
                </View>
                <View className='w-full items-center'>
                    <Text className="text-[#505152] text-[16px] font-inter mb-6">
                        We have shared a 6 digit OTP with you.
                    </Text>

                    <View className="flex-row justify-between mb-4 w-[50%]">
                        {otp.map((digit, index) => (
                            <TextInput
                                key={index}
                                ref={inputRefs[index]}
                                className={`w-[50px] h-[50px] text-center border ${digit ? 'border-[#93E23E]' : 'border-[#E5E5E5]'} rounded-lg bg-white text-[24px] font-inter-medium text-[#262727]`}
                                value={digit}
                                maxLength={1}
                                keyboardType="numeric"
                                onChangeText={(text) => {
                                    const newOtp = [...otp];
                                    newOtp[index] = text;
                                    setOtp(newOtp);

                                    if (text && index < inputRefs.length - 1) {
                                        inputRefs[index + 1]?.current?.focus();
                                    }
                                }}
                                onKeyPress={({ nativeEvent }) => {
                                    if (nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
                                        inputRefs[index - 1]?.current?.focus();
                                    }
                                }}
                            />
                        ))}
                    </View>

                    <View className='flex-row justify-between w-[50%]'>
                        {isAllDigitsFilled ? (
                            <Text className="text-[#C30606] text-[14px] font-inter mb-2">
                                Invalid OTP, please try again.
                            </Text>
                        ) : (
                            <Text className="text-[#505152] text-[14px] font-inter">
                                Expect OTP in {timer} seconds
                            </Text>
                        )}
                        <TouchableOpacity>
                            <Text className='text-[#007DD7] text-[14px] font-inter-medium'>Resend OTP</Text>
                        </TouchableOpacity>
                    </View>

                    {isLoading && (
                        <View className="absolute inset-0 top-[20%] items-center justify-center z-50">
                            <Image
                                source={require('../assets/images/loader.gif')}
                                className="w-[120px] h-[120px]"
                                resizeMode="contain"
                            />
                        </View>
                    )}

                    <View className="flex-1 justify-end w-[50%] mt-[25%]">
                        <Button
                            disabled={isLoading}
                            label="Verify"
                            onPress={handleVerify}
                            className={"mb-5"}
                        />
                    </View>
                </View>
            </View>
        ) : (
            <View className="flex-1 bg-[#F5F5F5]  rounded-xl shadow-lg">
                
                <View className="flex-row items-center pt-4 mt-10 mb-8 ml-[-6px] px-4 ">
                    <TouchableOpacity onPress={() => navigation.goBack()} className="mr-2" disabled={isLoading}>
                        <Ionicons name="chevron-back" size={24} color="#000" />
                    </TouchableOpacity>
                    <Text className="text-[20px] font-inter-semibold text-black">Enter OTP</Text>
                </View>

                <View className='flex-1 px-4'>
                    <Text className="text-[#333333] text-[16px] font-inter mb-6">
                        We have shared a 6 digit OTP with you.
                    </Text>

                    <View className="flex-row justify-between mb-4 ">
                        {otp.map((digit, index) => (
                            <View
                                key={index}
                                className={`w-[50px] h-[50px] border ${activeIndex === index ? 'border-[#007AFF] border-1' : digit ? 'border-[#E5E5E5]' : 'border-[#E5E5E5]'} rounded-lg justify-center items-center bg-white`}
                            >
                                <Text className="text-[24px] font-inter-medium text-[#262727]">
                                    {digit}
                                </Text>
                            </View>
                        ))}
                    </View>


                    <View className='flex-row justify-between'>

                        {isAllDigitsFilled ? (
                            <Text className="text-[#C30606] text-[14px] font-inter-medium mb-2">
                                Incorrect OTP
                            </Text>
                        ) : (
                            <Text className="text-[#666666] text-[14px] font-inter">
                                Expect OTP in<Text className='text-[#404040] font-inter-bold'> {timer} seconds</Text>
                            </Text>
                        )}
                        <TouchableOpacity>
                            <Text className='text-[#007DD7] text-[14px] font-inter-medium'>Resend OTP</Text>
                        </TouchableOpacity>

                    </View>

                    <View className="flex-1 justify-end">
                        <Button
                            label="Verify"
                            onPress={handleVerify}
                            className={"mb-8"}
                        />
                    </View>

                </View>
                <View className="flex-row flex-wrap justify-between bg-white">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 0, 'backspace'].map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            className="w-[100px] h-[50px] justify-center items-center mb-4"
                            onPress={() => {
                                if (item === 'backspace') {
                                    handleBackspace();
                                } else if (typeof item === 'number' || item === '.') {
                                    handleNumberPress(item.toString());
                                }
                            }}
                            disabled={isLoading}
                        >
                            {item === 'backspace' ? (
                                <Ionicons name="backspace-outline" size={24} color="#000" />
                            ) : (
                                <Text className="text-[24px] font-inter-medium text-[#262727]">
                                    {item}
                                </Text>
                            )}
                        </TouchableOpacity>
                    ))}
                </View>
                {isLoading && (
                    <View className="absolute inset-0 bg-black/50 items-center justify-center z-10">
                        <Image
                            source={require('../assets/images/loader.gif')}
                            className="w-[120px] h-[120px]"
                            resizeMode="contain"
                        />
                    </View>
                )}
            </View>
        )
    );
}