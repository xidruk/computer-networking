# Subnet Mask

A **subnet mask** is a number used in IP networking to divide an IP address into two parts:
1. The **network portion** – identifies the network.  
2. The **host portion** – identifies individual devices (hosts) within that network.  

Without subnet masks, IP addresses would be ambiguous, and routers would not know how to separate networks from hosts.

---

## Table of Contents
1. [What is a Subnet Mask?](#what-is-a-subnet-mask)
2. [How Subnet Masks Work](#how-subnet-masks-work)
3. [Subnet Mask Representation](#subnet-mask-representation)
   - [Dotted Decimal Notation](#dotted-decimal-notation)
   - [Binary Representation](#binary-representation)
   - [CIDR Prefix Notation](#cidr-prefix-notation)
4. [Common Subnet Masks](#common-subnet-masks)
5. [Examples of Subnet Masks in Action](#examples-of-subnet-masks-in-action)
6. [Why Subnet Masks are Important](#why-subnet-masks-are-important)
7. [Relation to Subnetting and CIDR](#relation-to-subnetting-and-cidr)
8. [Further Reading](#further-reading)

---

## What is a Subnet Mask?

Every IP address has two parts:
- The **network ID**: defines the overall network.  
- The **host ID**: defines the specific device within that network.  

A **subnet mask** is a 32-bit number (for IPv4) that tells us which part of the IP address is the network portion and which part is the host portion.

Think of it like a mailing address:
- The **network portion** is like the city or ZIP code.  
- The **host portion** is like the specific house number.  
- The subnet mask tells us where the "city" ends and the "house number" begins.  

---

## How Subnet Masks Work

- Subnet masks are always written as a series of **1s followed by 0s in binary**.  
- The **1s** represent the **network bits**.  
- The **0s** represent the **host bits**.  

Example:  
- IP address: `192.168.1.10`  
- Subnet mask: `255.255.255.0`  

In binary:  
```
IP Address:   11000000.10101000.00000001.00001010
Subnet Mask:  11111111.11111111.11111111.00000000
```

- The first 24 bits (the `1`s in the mask) define the **network**: `192.168.1.0`.  
- The last 8 bits (the `0`s in the mask) define the **host range**.  

---

## Subnet Mask Representation

Subnet masks can be written in three common ways:

### Dotted Decimal Notation
- Example: `255.255.255.0`
- Human-friendly, but hides the binary meaning.

### Binary Representation
- Example: `11111111.11111111.11111111.00000000`
- Shows exactly which bits are for the network and which are for the host.

### CIDR Prefix Notation
- Example: `/24`
- Indicates the number of **network bits**.  
- `/24` means 24 bits are reserved for the network, leaving 8 bits for hosts.  

So:  
- `255.0.0.0` = `/8`  
- `255.255.0.0` = `/16`  
- `255.255.255.0` = `/24`  

---

## Common Subnet Masks

| Subnet Mask     | CIDR | Network Bits | Host Bits | Number of Hosts |
|-----------------|------|--------------|-----------|-----------------|
| 255.0.0.0       | /8   | 8            | 24        | 16,777,214      |
| 255.255.0.0     | /16  | 16           | 16        | 65,534          |
| 255.255.255.0   | /24  | 24           | 8         | 254             |
| 255.255.255.128 | /25  | 25           | 7         | 126             |
| 255.255.255.192 | /26  | 26           | 6         | 62              |

*Note: The total host number is `(2^host bits) - 2` because the first address is reserved for the network and the last for the broadcast.*

---

## Examples of Subnet Masks in Action

1. **Home Network Example**  
   - IP: `192.168.0.1`  
   - Mask: `255.255.255.0` (/24)  
   - Network: `192.168.0.0`  
   - Host range: `192.168.0.1` – `192.168.0.254`  
   - Broadcast: `192.168.0.255`  

2. **Splitting a Network**  
   - Suppose you own `192.168.1.0/24` (254 hosts).  
   - By changing the mask to `/25` (`255.255.255.128`), you split it into two subnets:  
     - `192.168.1.0 – 192.168.1.127`  
     - `192.168.1.128 – 192.168.1.255`  

---

## Why Subnet Masks are Important

- They determine how large a network is and how many devices it can support.  
- They reduce network congestion by splitting large networks into smaller subnets.  
- They are essential for routing: routers use subnet masks to decide where to forward packets.  
- They provide flexibility: networks can be designed to fit organizational needs, from large enterprises to home setups.  

---

## Relation to Subnetting and CIDR

- **Subnetting** is the process of dividing a larger network into smaller networks. Subnet masks are the tool that makes this possible.  
- **CIDR (Classless Inter-Domain Routing)** introduces prefix notation (like `/24`) and allows more efficient use of IP addresses by breaking away from rigid class boundaries.  
- Without subnet masks, concepts like VLSM (Variable Length Subnet Masking) and CIDR would not exist.  

---

## Further Reading

- [Subnetting](subnetting.md)  
- [VLSM](vlsm.md)  
- [CIDR](cidr.md)  
- [IPv4](ipv4.md)  
- [IPv6](ipv6.md)