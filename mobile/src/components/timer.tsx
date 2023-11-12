import React from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { useStopwatch } from "react-timer-hook";
import { styles } from "./styles";

const Timer = () => {
  const { seconds, minutes, hours } = useStopwatch({ autoStart: true });

  return (
    <View style={styles.timerContainer}>
      <Text style={styles.timer}>{String(hours).padStart(2, "0")}</Text>
      <Text style={styles.timer}>:</Text>
      <Text style={styles.timer}>{String(minutes).padStart(2, "0")}</Text>
      <Text style={styles.timer}>:</Text>
      <Text style={styles.timer}>{String(seconds).padStart(2, "0")}</Text>
    </View>
  );
};
export default Timer;
