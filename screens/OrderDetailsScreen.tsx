import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./Header";
import ProgressStepper from "components/ProgressStepper";





export default function OrderDetailsScreen ({ navigation}: any) {
     return(
<>
<SafeAreaView className="flex-1  bg-[#F5F5F5]">
<View className="flex-row  justify-between bg-white pt-3 ">
      <Header title="Book new order" navigation={navigation} />
      <TouchableOpacity>
    <Text className="text-[16px] text-[#C30606] font-inter-medium pt-6 pr-3">Cancel Order</Text>
  </TouchableOpacity>
</View>
      {/* Progress Indicators */}
      <ProgressStepper activeStep={2} />
    </SafeAreaView>

</>


     )
}
