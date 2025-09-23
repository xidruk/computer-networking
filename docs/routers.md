# Routers

A **router** is a network device that connects multiple networks together and directs data packets between them. Unlike switches (which operate within a single local network), routers operate at **Layer 3 (Network Layer)** of the OSI model, using **IP addresses** to make forwarding decisions.  

Routers are critical for communication between devices on **different subnets** or across the **internet**.

---

## Table of Contents
1. [What is a Router?](#what-is-a-router)
2. [Router Functions](#router-functions)
3. [Router vs Switch](#router-vs-switch)
4. [How Routers Work](#how-routers-work)
5. [Types of Routers](#types-of-routers)
6. [Routing Methods](#routing-methods)
   - [Static Routing](#static-routing)
   - [Dynamic Routing](#dynamic-routing)
   - [Default Routing](#default-routing)
7. [Routers in Home vs Enterprise Networks](#routers-in-home-vs-enterprise-networks)
8. [Routers and NAT](#routers-and-nat)
9. [Common Router Protocols](#common-router-protocols)
10. [Further Reading](#further-reading)

---

## What is a Router?

- A router connects **two or more networks** (e.g., your home network and your ISP’s network).  
- It examines packet headers and decides the **next hop** on the way to the destination.  
- Each interface of a router belongs to a different network and has its **own IP address**.  

Think of a router like a **traffic controller**: it decides which road (network path) a car (packet) should take to reach its destination.

---

## Router Functions

1. **Path selection**: Choosing the best route for packets to travel.  
2. **Forwarding**: Moving packets from one interface to the next hop toward their destination.  
3. **Segmentation**: Separating different broadcast domains and networks.  
4. **Security**: Many routers provide filtering, firewalls, and VPN support.  
5. **Address translation**: Home/enterprise routers often perform **NAT** (Network Address Translation).  

---

## Router vs Switch

| Feature            | Router (Layer 3)                          | Switch (Layer 2)                      |
|--------------------|--------------------------------------------|----------------------------------------|
| Uses               | IP addresses                              | MAC addresses                          |
| Scope              | Connects multiple networks (WAN/LAN)      | Connects devices in the same LAN       |
| Broadcast domains  | Separates broadcast domains               | Extends one broadcast domain           |
| Function           | Packet forwarding (network-to-network)    | Frame switching (device-to-device)     |
| Example            | Connects home LAN to the Internet         | Connects PCs, printers, servers in LAN |

---

## How Routers Work

1. **Packet arrives at router interface**  
   - Router inspects the **destination IP address**.  
2. **Check routing table**  
   - Router consults its **routing table** to find the best match for the destination.  
3. **Forward to next hop**  
   - Router sends packet out the correct interface toward the next hop or final destination.  

If no route exists, the packet is dropped (and often an ICMP "destination unreachable" is sent back).

---

## Types of Routers

- **Core Routers**: High-capacity routers forming the backbone of the Internet.  
- **Edge Routers**: Connect enterprise or ISP networks to external networks.  
- **Wireless Routers**: Home/office routers combining routing + Wi-Fi access point.  
- **Virtual Routers**: Software-based routers (e.g., in cloud networking).  

---

## Routing Methods

Routers can determine paths in **three ways**:

### Static Routing
- Routes are **manually configured** by an administrator.  
- Simple, predictable, but does not adapt to network changes.  
- Useful for small or stable networks.  

**Example (Cisco CLI):**  
```text
ip route 192.168.2.0 255.255.255.0 192.168.1.2
```

---

### Dynamic Routing
- Routers use **routing protocols** to exchange route information automatically.  
- Adapts to topology changes and link failures.  
- Examples: RIP, OSPF, EIGRP, BGP.  

Dynamic routing requires more resources but is essential for large, complex networks.

---

### Default Routing
- A **catch-all route** used when no specific path is found in the routing table.  
- Typically used in **small networks** or **edge routers** to forward all unknown traffic to a single next hop (like your ISP’s gateway).  
- Prevents the router from needing a full set of routes for every possible destination.  

**Example (Cisco CLI):**  
```text
ip route 0.0.0.0 0.0.0.0 192.168.1.1
```

This means: “Send all traffic for unknown destinations to 192.168.1.1.”

---

## Routers in Home vs Enterprise Networks

- **Home router**: Typically combines router, switch, wireless access point, firewall, and DHCP server in one device. Provides NAT to share a single ISP-provided IP address across many devices.  
- **Enterprise router**: Dedicated, powerful devices focused on performance, redundancy, and support for multiple routing protocols. Often used with firewalls, load balancers, and dedicated switches.  

---

## Routers and NAT

In IPv4, routers often perform **Network Address Translation (NAT)**:  
- Maps private IP addresses (inside a LAN) to a public IP address (for the Internet).  
- Conserves IPv4 address space.  
- Hides internal network structure for security.  

For a full explanation of NAT, see: [NAT](nat.md).

---

## Common Router Protocols

- **RIP (Routing Information Protocol)** → simple distance-vector, suitable for small networks.  
- **OSPF (Open Shortest Path First)** → link-state, used in medium/large enterprise networks.  
- **EIGRP (Enhanced Interior Gateway Routing Protocol)** → Cisco proprietary hybrid protocol.  
- **BGP (Border Gateway Protocol)** → protocol of the Internet; used between ISPs.  

---

## Further Reading

- [Routing Tables](routing_table.md)  
- [Switches](switches.md)  
- [VLAN](vlan.md)  
- [NAT](nat.md)  
- [OSI Model](osi_model.md)  

---
