# Ports in Computer Networking

## What are Ports?
Ports are logical endpoints for communication in computer networking. They allow multiple network services and applications to run on a single device by distinguishing traffic based on port numbers. Each port is associated with a specific process or service, enabling efficient data exchange between devices.

## Why Do Ports Exist?
Ports exist to organize and manage network traffic. Without ports, a computer would not be able to differentiate between various types of incoming and outgoing data. Ports ensure that data intended for a specific application or service reaches the correct destination.

## How Do Ports Work?
When data is sent over a network, it is directed to a specific port number on the receiving device. The operating system uses this port number to deliver the data to the appropriate application. Ports work in conjunction with IP addresses to route data accurately.

## Number of Ports
There are 65,535 ports available for each transport protocol (TCP and UDP), numbered from 0 to 65,535. These ports are divided into three ranges:
- **Well-known ports (0-1023):** Reserved for common services (e.g., HTTP, FTP, SSH)
- **Registered ports (1024-49151):** Assigned to user processes or applications
- **Dynamic/private ports (49152-65535):** Used for temporary or private connections

## Ports and Protocols
Ports are used by different transport layer protocols, primarily:
- **TCP (Transmission Control Protocol):** Reliable, connection-oriented protocol. See [tcp.md](tcp.md) for details.
- **UDP (User Datagram Protocol):** Unreliable, connectionless protocol. See [udp.md](udp.md) for details.

Each protocol maintains its own set of ports, allowing simultaneous communication using both TCP and UDP.

## Example: How Ports Work
When you access a website, your browser uses TCP port 80 (HTTP) or 443 (HTTPS) to communicate with the web server. If you use SSH, your client connects to port 22 on the server. The operating system ensures that data sent to these ports is handled by the correct application.

## Why are Ports Important?
- Enable multiple services to run on a single device
- Help manage and organize network traffic
- Allow secure and efficient communication between devices
- Support various protocols and applications

## Further Reading
- [Ports - GeeksforGeeks](https://www.geeksforgeeks.org/ports-in-computer-network/)
- [List of TCP and UDP port numbers - Wikipedia](https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers)
