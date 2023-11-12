import { api } from "../api/api";
import { ManualEvents } from "../interface/manualEvent";

export const handleManualEvent = (event: ManualEvents) => {
  api.post("/manual_events", event, {
    headers: {
      "Accept-Language": "pt_BR",
    },
  });
};
