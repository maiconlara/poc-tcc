export interface ManualEvents {
  id?: number;
  name: string;
  order_service: number;
  operator_id?: number;
  harvester_id?: number;
  started_at: string;
  finished_at: string;
  duration: number;
}
