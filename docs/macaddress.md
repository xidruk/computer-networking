# MAC Address

## What is a MAC Address?
A MAC (Media Access Control) address is a unique identifier assigned to network interfaces for communications at the data link layer of a network segment. It is used to distinguish devices within a local network and is essential for network operations such as Ethernet and Wi-Fi.

## Structure and Components of a MAC Address
A MAC address is typically represented as six groups of two hexadecimal digits, separated by colons or hyphens (e.g., `00:1A:2B:3C:4D:5E`).

- **Organizationally Unique Identifier (OUI):** The first three octets (six digits) identify the manufacturer of the network device.
- **Device Identifier:** The last three octets (six digits) are assigned by the manufacturer and uniquely identify the device.

## Why is the MAC Address Important?
- Used for local network communication and device identification
- Essential for network security and access control
- Required for protocols like ARP (Address Resolution Protocol)

## MAC Address Spoofing
Although MAC addresses are designed to be unique and hard-coded into network devices, they can be changed or "spoofed" using software tools. MAC address spoofing is a technique used by attackers to disguise their device as another by changing its MAC address. This can be used to bypass network access controls, impersonate other devices, or evade tracking.

> **Note:** Even though MAC addresses are intended to be unique, their ability to be spoofed means they should not be relied upon as the sole method of device authentication or security.

## Further Reading
- [MAC Address - GeeksforGeeks](https://www.geeksforgeeks.org/mac-address-in-computer-network/)
- [MAC Address Spoofing - Wikipedia](https://en.wikipedia.org/wiki/MAC_spoofing)
