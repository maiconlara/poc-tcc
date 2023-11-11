import {  Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { styles } from "./styles";



export default function App() {
  const router = useRouter();
  const { bottom, top } = useSafeAreaInsets();
  return (

    <View style={styles.container}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>POC TCC</Text>
    </View>
    <TouchableOpacity
        activeOpacity={0.6}
        style={styles.button}
        onPress={() => {
          router.push("/menu");
        }}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    <Footer />
  </View>
  );
}
