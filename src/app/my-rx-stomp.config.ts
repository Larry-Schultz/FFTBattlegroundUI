import { InjectableRxStompConfig } from '@stomp/ng2-stompjs';
import * as SockJS from 'sockjs-client';
import { getBackendUrl } from './util/getbackendurl';

export function socketProvider() {
  return new SockJS(getBackendUrl() + 'gs-guide-websocket/');
}

export const myRxStompConfig: InjectableRxStompConfig = {
  // Which server?
  brokerURL: 'wss://fftbview.com/gs-guide-websocket/',

  // Wait in milliseconds before attempting auto reconnect
  // Set to 0 to disable
  // Typical value 500 (500 milli seconds)
  reconnectDelay: 500,

  // Will log diagnostics on console
  // It can be quite verbose, not recommended in production
  // Skip this key to stop logging to console
  debug: (msg: string): void => {
    console.log(new Date(), msg);
  },
  webSocketFactory: socketProvider
};