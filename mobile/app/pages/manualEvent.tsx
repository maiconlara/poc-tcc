import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "../styles";
import Header from "../../src/components/header";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Timer from "../../src/components/timer";
import { colors } from "../../src/colors";
import { useBackHandler } from "@react-native-community/hooks";
import { ManualEvents } from "../../src/interface/manualEvent";
import { handleManualEvent } from "../../src/utils/handleManualEvent";

interface ManualEvent {
  id: number;
  name: string;
  color: keyof typeof colors.green;
}

const ManualEvent = () => {
  const [selectedHarvester, setSelectedHarvester] = useState("");
  const [resetTimer, setResetTimer] = useState(false);
  const [start_time, setStart_time] = useState(new Date());
  const [event, setEvent] = useState<ManualEvent>();

  const { top } = useSafeAreaInsets();

  const handleEvent = (eventName: ManualEvent) => {
    if (event) {
      const finished_at = new Date();
      const duration = finished_at.getTime() - start_time.getTime();
      const oldEvent: ManualEvents = {
        name: event.name,
        order_service: Math.floor(Math.random() * 1000),
        operator_id: 1,
        harvester_id: 1,
        started_at: start_time.toISOString(),
        finished_at: finished_at.toISOString(),
        duration,
      };
      handleManualEvent(oldEvent);
    }
    setStart_time(new Date());
    setResetTimer(true);
    setEvent(eventName);
  };

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

      <View style={styles.timerContainer}>
        <Text style={styles.eventDescription}>{event?.name}</Text>
        <Timer
          setShouldResetTimer={setResetTimer}
          shouldResetTimer={resetTimer}
        />
      </View>
    </View>
  );
};
export default ManualEvent;
