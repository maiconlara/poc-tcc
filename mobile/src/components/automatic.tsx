import React from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "./styles";
import Header from "../../src/components/header";
import Farm from "../../src/assets/farm.svg";
import Timer from "../../src/components/timer";

interface AutomaticEventProps {
  //   event: AutomaticEvent | undefined;
  selectedHarvester: string;
  //   handleEvent: (event: ManualEvent) => void;
  resetTimer: boolean;
  setResetTimer: React.Dispatch<React.SetStateAction<boolean>>;
}

const Automatic = ({
  selectedHarvester,
  setResetTimer,
  resetTimer,
}: AutomaticEventProps) => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={[styles.eventContainer, { paddingTop: top + 80 }]}>
      <Header />
      <View style={styles.eventTitleContainer}>
        <Text style={styles.eventTitle}>Eventos Automáticos</Text>
        <Text style={styles.title}>Colhedora - {selectedHarvester}</Text>
      </View>
      <Farm width={250} height={166} />
      <View style={styles.eventTimerContainer}>
        <Text style={styles.eventDescription}>Operação</Text>
        <Timer
          setShouldResetTimer={setResetTimer}
          shouldResetTimer={resetTimer}
        />
      </View>
    </View>
  );
};
export default Automatic;
