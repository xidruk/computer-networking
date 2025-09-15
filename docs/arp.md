# ARP (Address Resolution Protocol)

## What is ARP?
ARP stands for Address Resolution Protocol. It is a network protocol used to map an IP address to a physical MAC address on a local area network. ARP is essential for enabling communication between devices on the same network segment.

## How Does ARP Work?
When a device wants to communicate with another device on the same network, it needs to know the recipient's MAC address. If it only knows the IP address, it uses ARP to discover the corresponding MAC address:

1. The device broadcasts an ARP request packet to all devices on the local network, asking "Who has this IP address?"
2. The device with the matching IP address replies with its MAC address.
3. The sender stores this information in its ARP cache for future use.

## ARP Table and Cache
Devices maintain an ARP table (cache) that stores recently resolved IP-to-MAC address mappings. This helps speed up future communications and reduces network traffic.

## ARP Spoofing
ARP is vulnerable to spoofing attacks, where a malicious device sends fake ARP messages to associate its MAC address with the IP address of another device. This can lead to man-in-the-middle attacks and network disruption.

## Further Reading
- [ARP - GeeksforGeeks](https://www.geeksforgeeks.org/address-resolution-protocol-arp/)
- [ARP Spoofing - Wikipedia](https://en.wikipedia.org/wiki/ARP_spoofing)
