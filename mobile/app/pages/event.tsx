import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useBackHandler } from "@react-native-community/hooks";
import { ManualEvents } from "../../src/interface/manualEvent";
import { handleManualEvent } from "../../src/utils/handleManualEvent";
import Manual, { ManualEvent } from "../../src/components/manual";
import Automatic from "../../src/components/automatic";

const event = () => {
  const [selectedHarvester, setSelectedHarvester] = useState("");
  const [resetTimer, setResetTimer] = useState(false);
  const [start_time, setStart_time] = useState(new Date());
  const [event, setEvent] = useState<ManualEvent>();
  const [automaticEvent, setAutomaticEvent] = useState(true);

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

    setTimeout(() => {
      setAutomaticEvent(false);
    }, 10000);
  }, []);

  return (
    <>
      {automaticEvent ? (
        <Automatic
          selectedHarvester={selectedHarvester}
          resetTimer={resetTimer}
          setResetTimer={setResetTimer}
        />
      ) : (
        <Manual
          event={event}
          selectedHarvester={selectedHarvester}
          handleEvent={handleEvent}
          resetTimer={resetTimer}
          setResetTimer={setResetTimer}
        />
      )}
    </>
  );
};
export default event;
