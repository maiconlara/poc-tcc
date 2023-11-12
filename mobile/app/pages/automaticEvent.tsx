import React, { useEffect, useState } from "react";
import { Text, View, BackHandler, Alert } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useBackHandler } from "@react-native-community/hooks";
import { styles } from "../styles";
import Header from "../../src/components/header";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Farm from "../../src/assets/farm.svg";
import Timer from "../../src/components/timer";

const AutomaticEvent = () => {
  const [selectedHarvester, setSelectedHarvester] = useState("");
  const { top } = useSafeAreaInsets();
  const [resetTimer, setResetTimer] = useState(false);

  const handleResetTimer = () => {
    setResetTimer(true);
  };

  // useBackHandler(() => {
  //   Alert.alert("Hold on!", "Are you sure you want to go back?", [
  //     {
  //       text: "Cancel",
  //       onPress: () => null,
  //       style: "cancel",
  //     },
  //     { text: "YES", onPress: () => BackHandler.exitApp() },
  //   ]);
  //   return true;
  // });
  useBackHandler(() => {
    return true;
  });

  useEffect(() => {
    const getSelectedHarvester = async () => {
      try {
        const response = await AsyncStorage.getItem("selectedHarvester");
        setSelectedHarvester(response || "não selecionada");
      } catch (e) {}
    };

    getSelectedHarvester();
  }, []);

  return (
    <View style={[styles.eventContainer, { paddingTop: top + 80 }]}>
      <Header />
      <View style={styles.eventTitleContainer}>
        <Text style={styles.eventTitle}>Eventos Automáticos</Text>
        <Text style={styles.title}>Colhedora - {selectedHarvester}</Text>
      </View>
      <Farm width={250} height={166} />
      <View style={styles.timerContainer}>
        <Text style={styles.eventDescription}>Operação</Text>
        <Timer
          setShouldResetTimer={setResetTimer}
          shouldResetTimer={resetTimer}
        />
      </View>
    </View>
  );
};
export default AutomaticEvent;
