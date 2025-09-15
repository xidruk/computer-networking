
# MAC Address

## What is a MAC Address?
A MAC (Media Access Control) address is a unique hardware identifier assigned to a network interface card (NIC) for communications at the data link layer. It is used to distinguish devices within a local network and is essential for protocols such as Ethernet and Wi-Fi.

## Structure and Components of a MAC Address
A MAC address consists of 48 bits, usually displayed as six groups of two hexadecimal digits. The format can vary depending on the operating system or vendor.

### Example MAC Addresses
| Notation | Example |
|----------|-------------------|
| Standard (colon) | 00:1A:2B:3C:4D:5E |
| Cisco (dot) | 001A.2B3C.4D5E |
| Windows (hyphen) | 00-1A-2B-3C-4D-5E |

### Splitting the MAC Address
| Part | Hex Digits | Description |
|------|------------|-------------|
| OUI (Organizationally Unique Identifier) | 00:1A:2B | Identifies the manufacturer of the device |
| Device Identifier | 3C:4D:5E | Uniquely identifies the device on the network |

## MAC Address in Different Operating Systems
| OS | Notation | Example |
|----|----------|--------|
| Linux | Colon | 00:1A:2B:3C:4D:5E |
| Windows | Hyphen | 00-1A-2B-3C-4D-5E |
| Cisco | Dot | 001A.2B3C.4D5E |

## Why is the MAC Address Important?
- Used for local network communication and device identification
- Essential for network security and access control
- Required for protocols like [ARP](arp.md) (Address Resolution Protocol)

## MAC Address Spoofing
Although MAC addresses are designed to be unique and hard-coded into network devices, they can be changed or "spoofed" using software tools. MAC address spoofing is a technique used by attackers to disguise their device as another by changing its MAC address. This can be used to bypass network access controls, impersonate other devices, or evade tracking.

> **Note:** Even though MAC addresses are intended to be unique, their ability to be spoofed means they should not be relied upon as the sole method of device authentication or security.

## Further Reading
- [MAC Address - GeeksforGeeks](https://www.geeksforgeeks.org/mac-address-in-computer-network/)
- [MAC Address Spoofing - Wikipedia](https://en.wikipedia.org/wiki/MAC_spoofing)
