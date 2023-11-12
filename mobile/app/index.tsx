import React from "react";
import {
  Alert,
  BackHandler,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import logo from "../src/assets/logo.png";

import { styles } from "./styles";
import { useBackHandler } from "@react-native-community/hooks";

useBackHandler(() => {
  Alert.alert("Atenção!", "Tem certeza que deseja sair?", [
    {
      text: "Cancelar",
      onPress: () => null,
      style: "cancel",
    },
    {
      text: "SIM",
      onPress: () => BackHandler.exitApp(),
    },
  ]);

  return true;
});

export default function App() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Image source={logo} style={{ height: 231, width: 270 }} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Matrícula"
          keyboardType="number-pad"
          style={styles.input}
          onChangeText={() => {}}
        ></TextInput>
        <TextInput
          placeholder="Senha"
          secureTextEntry={true}
          style={styles.input}
          onChangeText={() => {}}
        ></TextInput>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.button}
          onPress={() => {
            // router.push("pages/manualEvent");
            router.push("pages/harvesterSelect");
          }}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
