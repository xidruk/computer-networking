# IP Address Classification

## Introduction
IP address classification is a traditional method used to organize and allocate IP addresses in computer networks. This system divides IP addresses into five classes: A, B, C, D, and E. Although this classification is considered outdated and has largely been replaced by CIDR (Classless Inter-Domain Routing), understanding it is important for grasping the history and fundamentals of IP addressing.

> **Note:** For details on CIDR, see the [CIDR documentation](cidr.md).

## IP Address Classes

| Class | Range | Default Subnet Mask | Network Portion | Host Portion | Usage |
|-------|-------|---------------------|----------------|-------------|-------|
| A     | 1.0.0.0 – 126.255.255.255 | 255.0.0.0       | 8 bits       | 24 bits     | Large networks (few networks, many hosts) |
| B     | 128.0.0.0 – 191.255.255.255 | 255.255.0.0     | 16 bits      | 16 bits     | Medium-sized networks |
| C     | 192.0.0.0 – 223.255.255.255 | 255.255.255.0   | 24 bits      | 8 bits      | Small networks (many networks, few hosts) |
| D     | 224.0.0.0 – 239.255.255.255 | N/A             | N/A          | N/A         | Multicast addresses |
| E     | 240.0.0.0 – 255.255.255.255 | N/A             | N/A          | N/A         | Reserved for experimental use |

## Explanation of Table Fields
- **Class:** The IP address class (A, B, C, D, E)
- **Range:** The range of addresses for each class
- **Default Subnet Mask:** The default mask used to separate the network and host portions
- **Network Portion:** Number of bits used for the network identifier
- **Host Portion:** Number of bits used for host addresses within the network
- **Usage:** Typical use case for each class

## Why is the Class System Considered Old?
The classful system was inflexible and led to inefficient use of IP address space. Many organizations received more addresses than needed, while others did not have enough. This led to the development of CIDR, which allows for more flexible and efficient allocation of IP addresses.

## Network and Host Portions
In classful addressing, the subnet mask determines which part of the IP address identifies the network and which part identifies the host. For example, in a Class A address, the first 8 bits are the network portion, and the remaining 24 bits are for hosts.

## Subnetting
Subnetting is the process of dividing a network into smaller, more manageable segments. In the classful system, subnetting was limited by the fixed boundaries of each class. Modern networks use CIDR for more flexible subnetting.

## Summary
- IP address classification (A, B, C, D, E) is a historical method for organizing IP addresses.
- The system is rarely used today, replaced by CIDR.
- Understanding classes helps with legacy systems and basic networking concepts.
- Subnetting and network/host portions are key concepts in IP addressing.

## Further Reading
- [IP Address Classes - GeeksforGeeks](https://www.geeksforgeeks.org/classes-of-ip-addresses/)
- [Subnetting - GeeksforGeeks](https://www.geeksforgeeks.org/subnetting-in-computer-network/)
- [Classful network - Wikipedia](https://en.wikipedia.org/wiki/Classful_network)
