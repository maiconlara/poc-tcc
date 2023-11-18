import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "./styles";
import Timer from "../../src/components/timer";
import { colors } from "../../src/colors";
import Header from "./header";

interface ManualEventProps {
  event: ManualEvent | undefined;
  selectedHarvester: string;
  handleEvent: (event: ManualEvent) => void;
  resetTimer: boolean;
  setResetTimer: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ManualEvent {
  id: number;
  name: string;
  color: keyof typeof colors.green;
}

const manualEvents: ManualEvent[] = [
  {
    id: 1,
    name: "Abastecimento",
    color: 400,
  },
  {
    id: 2,
    name: "Transbordo",
    color: 400,
  },
  {
    id: 3,
    name: "Troca de Turno",
    color: 400,
  },
  {
    id: 4,
    name: "Manutenção",
    color: 400,
  },
  {
    id: 5,
    name: "Clima",
    color: 400,
  },
  {
    id: 6,
    name: "Finalizar OS",
    color: 700,
  },
];

const handleColor = (color: keyof typeof colors.green) => {
  const handledColor = colors.green[color];
  return handledColor;
};

const Manual = ({
  event,
  selectedHarvester,
  handleEvent,
  resetTimer,
  setResetTimer,
}: ManualEventProps) => {
  const { top } = useSafeAreaInsets();

  return (
    
    <View style={[styles.eventContainer, { paddingTop: top + 80 }]}>
      <Header />

      <View style={styles.eventTitleContainer}>
        <Text style={styles.eventTitle}>Eventos Manuais</Text>
        <Text style={styles.title}>Colhedora - {selectedHarvester}</Text>
      </View>
      <View style={styles.eventButtonContainer}>
        {manualEvents.map((event) => (
          <TouchableOpacity
            onPress={() => handleEvent(event)}
            key={event.id}
            style={[
              styles.eventButton,
              {
                backgroundColor: handleColor(event.color),
              },
            ]}
          >
            <Text style={styles.buttonText}>{event.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.eventTimerContainer}>
        <Text style={styles.eventDescription}>{event?.name}</Text>
        <Timer
          setShouldResetTimer={setResetTimer}
          shouldResetTimer={resetTimer}
        />
      </View>
    </View>
  );
};
export default Manual;
