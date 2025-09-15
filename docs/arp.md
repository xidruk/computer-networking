
# ARP (Address Resolution Protocol)

## What is ARP?
ARP (Address Resolution Protocol) is a fundamental network protocol used to map IP addresses to physical MAC addresses on a local area network (LAN). It enables devices to communicate within the same network segment by resolving the hardware address needed for data transmission.

## How Does ARP Work?
When a device wants to send data to another device on the same network, it needs the recipient's MAC address. If it only knows the IP address, it uses ARP to discover the corresponding MAC address:

1. The device broadcasts an ARP request packet to all devices on the local network, asking "Who has this IP address?"
2. The device with the matching IP address replies with its MAC address in an ARP reply packet.
3. The sender stores this information in its ARP cache for future use, speeding up subsequent communications.

### ARP Packet Structure
- **ARP Request:** Contains the sender's IP and MAC address, and the target IP address.
- **ARP Reply:** Contains the sender's IP and MAC address (the target's info).

## ARP Table and Cache
Devices maintain an ARP table (cache) that stores recently resolved IP-to-MAC address mappings. This helps speed up future communications and reduces network traffic. The ARP cache entries may expire after a certain period or be manually cleared.

## ARP Spoofing
ARP is vulnerable to spoofing attacks, where a malicious device sends fake ARP messages to associate its MAC address with the IP address of another device. This can lead to man-in-the-middle attacks, data interception, and network disruption. Security measures such as static ARP entries and ARP inspection can help mitigate these risks.

## ARP CLI Commands
You can interact with the ARP table using command-line tools on various operating systems. Below is a table of common ARP commands:

| Command | OS | Description |
|---------|----|-------------|
| `arp -a` | Windows, Linux, macOS | Display the current ARP table (cache) |
| `arp -d <IP>` | Windows, Linux | Delete an entry for the specified IP address |
| `arp -s <IP> <MAC>` | Windows, Linux | Add a static ARP entry |
| `ip neigh` | Linux | Show neighbor (ARP) table |
| `arp` | Cisco IOS | Show ARP table on Cisco devices |

### Example Usage
- To view the ARP table on Linux: `arp -a` or `ip neigh`
- To add a static entry on Windows: `arp -s 192.168.1.10 00-1A-2B-3C-4D-5E`
- To delete an entry on Linux: `arp -d 192.168.1.10`

## Why is ARP Important?
- Enables devices to communicate within a local network
- Resolves IP addresses to MAC addresses for data transmission
- Supports protocols like IPv4 and is essential for Ethernet networks

## Further Reading
- [ARP - GeeksforGeeks](https://www.geeksforgeeks.org/address-resolution-protocol-arp/)
- [ARP Spoofing - Wikipedia](https://en.wikipedia.org/wiki/ARP_spoofing)
- [ARP Command - Microsoft Docs](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/arp)
