# CIDR Notation (Classless Inter-Domain Routing)

## What is CIDR?
CIDR (Classless Inter-Domain Routing) is a method for allocating IP addresses and routing Internet Protocol packets. Introduced in 1993 to replace the old classful addressing system, CIDR allows for more efficient and flexible use of IP address space.

## Why Was CIDR Introduced?
The classful system led to inefficient address allocation and rapid exhaustion of available IP addresses. CIDR solves this by allowing variable-length subnet masking (VLSM), enabling networks to be divided into subnets of any size.

## CIDR Notation Explained
CIDR notation expresses an IP address and its associated routing prefix. It uses a format like:

    192.168.1.0/24

- The IP address (192.168.1.0) identifies the network.
- The slash (/) separates the address from the prefix length.
- The prefix length (24) indicates how many bits are used for the network portion.

## How CIDR Works
CIDR allows network administrators to specify the exact number of bits for the network portion, rather than being limited to 8, 16, or 24 bits (as in classes A, B, C). This enables:
- More granular subnetting
- Efficient address allocation
- Reduced routing table size

## CIDR Examples
| CIDR Notation | Subnet Mask       | Number of Hosts | Network Range           |
|--------------|-------------------|-----------------|------------------------|
| 192.168.1.0/24 | 255.255.255.0     | 254             | 192.168.1.0 – 192.168.1.255 |
| 10.0.0.0/8     | 255.0.0.0         | 16,777,214      | 10.0.0.0 – 10.255.255.255 |
| 172.16.0.0/12  | 255.240.0.0       | 1,048,574       | 172.16.0.0 – 172.31.255.255 |
| 192.168.1.0/30 | 255.255.255.252   | 2               | 192.168.1.0 – 192.168.1.3 |

## Calculating Subnets with CIDR
To calculate the number of hosts:
- Subtract the prefix length from 32 (for IPv4)
- Calculate 2^(remaining bits) - 2 (for usable hosts)

Example: /28 subnet
- 32 - 28 = 4 bits for hosts
- 2^4 = 16 addresses
- 16 - 2 = 14 usable hosts

## CIDR and Routing
CIDR enables route aggregation (supernetting), which reduces the size of routing tables and improves efficiency. Multiple networks can be represented by a single routing entry.

## CIDR in IPv6
CIDR is also used in IPv6, where the prefix length can range from /0 to /128. Example:

    2001:db8::/32

## Benefits of CIDR
- Efficient use of IP address space
- Flexible subnetting
- Simplified routing
- Supports both IPv4 and IPv6

## Common CIDR Prefixes
| Prefix | Subnet Mask         | Hosts |
|--------|---------------------|-------|
| /8     | 255.0.0.0           | 16,777,214 |
| /16    | 255.255.0.0         | 65,534 |
| /24    | 255.255.255.0       | 254 |
| /30    | 255.255.255.252     | 2 |

## Real-Life Example
A company needs 50 subnets with 10 hosts each. Using CIDR, they can create subnets with /28 prefixes, each supporting 14 hosts, rather than being limited to classful boundaries.

## Further Reading
- [CIDR - GeeksforGeeks](https://www.geeksforgeeks.org/classless-inter-domain-routing-cidr/)
- [CIDR Notation - Wikipedia](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)
- [Subnet Calculator](https://www.subnet-calculator.com/)
