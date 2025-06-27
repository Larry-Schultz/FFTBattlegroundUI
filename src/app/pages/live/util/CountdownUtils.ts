import { CountdownConfig } from "ngx-countdown";

export function countdownConfigFactory(leftTime: number): CountdownConfig {
  return { format: `mm:ss`, leftTime: leftTime };
}
