# DHCPv6 (Dynamic Host Configuration Protocol for IPv6)

**DHCPv6** is the version of the Dynamic Host Configuration Protocol designed for **IPv6 networks**. While IPv4 networks almost always rely on DHCP, IPv6 networks introduce an additional method of address configuration called **SLAAC (Stateless Address Autoconfiguration)**. DHCPv6 complements SLAAC by providing more control and additional configuration options.

---

## Table of Contents
1. [What is DHCPv6?](#what-is-dhcpv6)
2. [How DHCPv6 Works](#how-dhcpv6-works)
3. [DHCPv6 vs SLAAC](#dhcpv6-vs-slaac)
4. [DHCP vs DHCPv6](#dhcp-vs-dhcpv6)
5. [Use Cases of DHCPv6](#use-cases-of-dhcpv6)
6. [Conclusion](#conclusion)

---

## What is DHCPv6?

DHCPv6 is a **network protocol** that dynamically assigns **IPv6 addresses** and other configuration parameters (such as DNS servers) to devices in a network.  
- Defined in [RFC 8415](https://datatracker.ietf.org/doc/html/rfc8415).  
- Can work in **stateful** or **stateless** mode.  

---

## How DHCPv6 Works

1. A client sends a **Solicit** message to discover DHCPv6 servers.  
2. Servers respond with an **Advertise** message.  
3. The client sends a **Request** (or Confirm/Renew/Rebind).  
4. The server replies with a **Reply**, confirming the lease.  

This is similar to DHCP in IPv4 but adapted to IPv6’s addressing model.

---

## DHCPv6 vs SLAAC

IPv6 introduces **SLAAC (Stateless Address Autoconfiguration)**, which allows devices to generate their own addresses using router advertisements.  

- **SLAAC**: Automatic, lightweight, requires no DHCP server.  
- **DHCPv6**: Provides centralized control and can distribute additional options like DNS, NTP, or domain search lists.  

In many modern networks, both SLAAC and DHCPv6 are used together.

---

## DHCP vs DHCPv6

| Feature                | DHCP (IPv4)          | DHCPv6 (IPv6)          |
|-------------------------|----------------------|------------------------|
| Protocol version        | Works with IPv4      | Works with IPv6        |
| Address space           | 32-bit (limited)     | 128-bit (virtually unlimited) |
| Alternative method      | None                 | SLAAC                  |
| NAT required?           | Yes (for private IPs) | No (IPv6 is globally routable) |

---

## Use Cases of DHCPv6

- Enterprise networks that require **centralized control** of IPv6 assignments.  
- Networks where administrators need to provide extra info (DNS, NTP, domain search list).  
- Hybrid networks using **SLAAC for addressing** and **DHCPv6 for additional options**.  

---

## Conclusion

DHCPv6 is a critical part of IPv6 networking, complementing SLAAC by offering administrators more control over address assignment and configuration. While IPv4 relies almost exclusively on DHCP, IPv6 gives networks the flexibility to use **SLAAC, DHCPv6, or both** depending on the design.
