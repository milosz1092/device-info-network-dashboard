import { Socket, createSocket } from 'dgram';

export default class UdpConnector {
    static socket: Socket;
    static PORT: number = 43214;
    
    static GetSocket() {
        if (!UdpConnector.socket) {
            UdpConnector.socket = createSocket('udp4');

            UdpConnector.socket.on('message', (msg, rinfo) => {
                console.log(`UPD packet got from ${rinfo.address}:${rinfo.port}`, JSON.parse(msg.toString()));
            });

            UdpConnector.socket.on('listening', () => {
                UdpConnector.socket.setBroadcast(true);
                console.log(`UDP socket listening on port ${UdpConnector.PORT}`);

            });

            UdpConnector.socket.bind(UdpConnector.PORT);
        }

        return UdpConnector.socket;
    }
}