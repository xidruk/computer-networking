# IPv4 (Internet Protocol Version 4)

**IPv4** is the fourth version of the Internet Protocol (IP) and the most widely used addressing system on the internet and private networks. Despite the emergence of IPv6, IPv4 remains dominant due to its long history and compatibility with almost all existing systems.

---

## Table of Contents
1. [What is IPv4?](#what-is-ipv4)
2. [IPv4 Address Structure](#ipv4-address-structure)
3. [IPv4 Address Classes](#ipv4-address-classes)
4. [Public vs Private IPv4 Addresses](#public-vs-private-ipv4-addresses)
5. [Special IPv4 Address Ranges](#special-ipv4-address-ranges)
6. [Subnetting in IPv4](#subnetting-in-ipv4)
7. [The Problem of IPv4 Exhaustion](#the-problem-of-ipv4-exhaustion)
8. [NAT and IPv4](#nat-and-ipv4)
9. [Why IPv6 Doesn’t Use Private/Public Addresses](#why-ipv6-doesnt-use-privatepublic-addresses)
10. [Conclusion](#conclusion)

---

## What is IPv4?

IPv4 provides a **logical addressing system** that allows devices to identify and communicate across networks. Each device on a network is assigned an IPv4 address, which is unique within that network.

- IPv4 addresses are **32 bits long**, typically written in **dotted-decimal notation**:  
  Example: `192.168.1.1`

- IPv4 supports around **4.3 billion unique addresses** (2³² ≈ 4.29 billion).  

> Related documents: [IP Address Basics](ipaddress.md), [IPv6](ipv6.md)

---

## IPv4 Address Structure

An IPv4 address is divided into two parts:
1. **Network ID** – Identifies the specific network.  
2. **Host ID** – Identifies a device within that network.  

Example:  
`192.168.1.15 /24`  
- `192.168.1` → Network ID  
- `15` → Host ID  
- `/24` → Subnet mask (255.255.255.0) defines how many bits are used for the network.  

---

## IPv4 Address Classes

Originally, IPv4 addresses were divided into **classes** for organization:

- **Class A**: `0.0.0.0 – 127.255.255.255` (Large networks)  
- **Class B**: `128.0.0.0 – 191.255.255.255` (Medium networks)  
- **Class C**: `192.0.0.0 – 223.255.255.255` (Small networks)  
- **Class D**: `224.0.0.0 – 239.255.255.255` (Multicast)  
- **Class E**: `240.0.0.0 – 255.255.255.255` (Experimental)  

Modern networking mostly uses **CIDR (Classless Inter-Domain Routing)** instead of rigid classes. [CIDR Notation](docs/cidr.md))

---

## Public vs Private IPv4 Addresses

IPv4 addresses are divided into **public** and **private** ranges:

- **Public IP Addresses**  
  - Globally unique, routable on the internet.  
  - Assigned by ISPs (e.g., `8.8.8.8` for Google DNS).  

- **Private IP Addresses**  
  - Reserved for local use, not routable on the internet.  
  - Commonly used in home/office LANs.  
  - Ranges:  
    - Class A: `10.0.0.0 – 10.255.255.255`  
    - Class B: `172.16.0.0 – 172.31.255.255`  
    - Class C: `192.168.0.0 – 192.168.255.255`  

**Why Private Addresses Exist**  
IPv4 has limited space (only ~4.3 billion addresses). To conserve public IPs, private ranges were introduced for internal use, combined with **NAT (Network Address Translation)**.

---

## Special IPv4 Address Ranges

Some IPv4 ranges have specific purposes:

- **127.0.0.0/8** → Loopback (local testing, e.g., `127.0.0.1`)  
- **169.254.0.0/16** → APIPA (Automatic Private IP Addressing, fallback if DHCP fails)  
- **224.0.0.0 – 239.255.255.255** → Multicast  
- **255.255.255.255** → Broadcast address  

---

## Subnetting in IPv4

**Subnetting** divides a larger IP network into smaller, more efficient subnetworks. This helps:  
- Improve performance by reducing broadcast domains.  
- Enhance security by segmenting networks.  
- Make better use of limited IPv4 addresses.  

Example:  
`192.168.1.0/24` → Can be split into:  
- `192.168.1.0/26`  
- `192.168.1.64/26`  
- `192.168.1.128/26`  
- `192.168.1.192/26`  

> Related document: [Subnetting](subnetting.md)

---

## The Problem of IPv4 Exhaustion

With only **4.3 billion addresses**, IPv4 space quickly ran out due to:  
- Growth of the internet.  
- Explosion of IoT and mobile devices.  
- Inefficient class-based allocations in the past.  

This shortage is the primary reason for the development of **IPv6**.

---

## NAT and IPv4

**Network Address Translation (NAT)** allows multiple devices on a private network to share a single public IP.  
- NAT rewrites private IPs into one public IP when communicating with the internet.  
- Essential for conserving IPv4 space.  
- Still widely used today in homes and enterprises.  

---

## Why IPv6 Doesn’t Use Private/Public Addresses

IPv6 was designed to solve IPv4’s limitations:  
- IPv6 has **128-bit addresses** → virtually unlimited space (≈ 340 undecillion addresses).  
- Since there is no shortage, IPv6 does not require **private ranges** like IPv4.  
- Instead, IPv6 uses **link-local**, **unique local**, and **global unicast** addresses to organize traffic.  

This means every device can, in theory, have a unique **globally routable IPv6 address**, eliminating the need for NAT.

---

## Conclusion

IPv4 has been the backbone of networking for decades, enabling billions of devices to connect to the internet. Its concepts of **public/private addresses, subnetting, and NAT** remain critical knowledge for networking. While IPv6 is the future, IPv4 will continue to coexist for many years due to legacy systems and slow adoption of IPv6.

