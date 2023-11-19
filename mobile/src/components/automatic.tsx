import React  from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "./styles";
import Header from "../../src/components/header";
import Farm from "../../src/assets/farm.svg";
import Timer from "../../src/components/timer";
import { Event } from "../interface/Event";
import { EventProps } from "./manual";

export const automaticEvents: Event[] = [
  {
    id: 1,
    name: "Operação",
  },
  {
    id: 2,
    name: "Transbordo",
  },
  {
    id: 3,
    name: "Deslocamento",
  },
];

const Automatic = ({
  event,
  automaticEvent,
  setAutomaticEvent,
  selectedHarvester,
  handleEvent,
  resetTimer,
  setResetTimer,
}: EventProps) => {
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
        <Text style={styles.eventDescription}>{event?.name || "Ocioso"}</Text>
        <Timer
          setShouldResetTimer={setResetTimer}
          shouldResetTimer={resetTimer}
        />
      </View>
    </View>
  );
};
export default Automatic;
