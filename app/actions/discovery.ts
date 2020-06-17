import UdpConnector from '../utils/UdpConnector';

export const DEVICES_DISCOVERY_REQUEST = 'DEVICES_DISCOVERY_REQUEST';

export function discoverDevices() {
  const socket = UdpConnector.GetSocket();
  const message = Buffer.from(DEVICES_DISCOVERY_REQUEST)
  socket.send(message, 0, message.length, 41234, "192.168.1.255");

  return {
    type: DEVICES_DISCOVERY_REQUEST
  };
}
