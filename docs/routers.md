# Routers

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
7. [Routing Table and Route Selection](#routing-table-and-route-selection)
8. [Routers in Home vs Enterprise Networks](#routers-in-home-vs-enterprise-networks)
9. [Routers and NAT](#routers-and-nat)
10. [Common Router Protocols](#common-router-protocols)
11. [Further Reading](#further-reading)

---

## What is a Router?

- A router connects **two or more networks** (e.g., your LAN and your ISP’s network) and directs traffic between them. It makes forwarding decisions based on **IP addresses** at OSI Layer 3.  
- Each router **interface** belongs to a different network or subnet and has its own IP address.  
- A router examines the **destination IP address** of incoming packets and uses its routing table to determine the next hop toward the destination.  
- The router maintains a **Routing Information Base (RIB)** which stores all learned routes. It selects the best routes from the RIB for packet forwarding.  

Think of a router as a network traffic controller that reads the packet’s address and sends it along the appropriate path.

---

## Router Functions

1. **Path Selection (Routing)**: The router chooses the best route for each packet. This uses routing protocols, metrics, and administrative distance to decide which path is optimal.  
2. **Forwarding**: Moving packets from one interface to the next hop toward the destination. This involves looking up the routing table (often using a *longest-prefix match*) and sending the packet out the correct interface.  
3. **Segmentation**: Separating different broadcast domains or subnets. Each router interface defines a new IP subnet.  
4. **Security**: Many routers include access control lists (ACLs), firewalls, or VPN capabilities to filter or secure traffic.  
5. **Address Translation (NAT/PAT)**: Routers often perform **Network Address Translation (NAT)** to map private LAN IP addresses to a public IP. This conserves IPv4 addresses and hides internal network details.  
6. **Loop Prevention (TTL)**: Each IP packet has a Time To Live (TTL) field. A router decrements the TTL by 1 for each hop; if the TTL reaches 0, the packet is discarded. This prevents packets from circulating indefinitely in routing loops.

---

## Router vs Switch

| Feature            | **Router (Layer 3)**                       | **Switch (Layer 2)**                   |
|--------------------|--------------------------------------------|----------------------------------------|
| Uses               | **IP addresses** for forwarding            | **MAC addresses** for forwarding       |
| Scope              | Connects multiple networks (LAN-to-WAN)   | Connects devices within one LAN       |
| Broadcast domains  | **Segments** broadcast domains (each interface is a new domain) | Extends a single broadcast domain (all ports by default) |
| Function           | Forwards packets between networks (inter-subnet) | Forwards frames within the same network (intra-subnet) |
| Example            | Connects a home LAN to the Internet       | Connects PCs and printers in an office LAN |

Routers operate at the Network layer and route traffic between IP subnets, whereas switches operate at the Data Link layer and forward frames based on MAC addresses within the same subnet.

---

## How Routers Work

1. **Packet Arrival**: A packet arrives at one of the router’s interfaces. The router reads the **destination IP address** from the packet header.  
2. **TTL Handling**: The router **decrements the packet’s TTL** (Time to Live) by 1 to prevent loops. If TTL becomes 0, the router drops the packet.  
3. **Routing Table Lookup**: The router consults its routing table (RIB) to find a matching entry. It uses the **longest-prefix match** rule, meaning it selects the entry with the most specific matching network for the destination IP.  
4. **Forward or Drop**: 
   - If a matching route is found, the router forwards the packet out the specified interface toward the next hop or final destination. The outgoing packet’s Layer 2 header is rewritten accordingly.  
   - If no route is found, the packet is dropped (and often the router sends back an ICMP “destination unreachable” message to the source).  

Routers continuously update their routing tables through static configuration or dynamic routing protocols, ensuring they have current paths for directing traffic efficiently.

---

## Types of Routers

- **Core Routers**: High-capacity routers that form the backbone of large networks (e.g., Internet backbone, large ISP or campus cores).  
- **Edge Routers** (or Border Routers): Connect an internal network to external networks.  
- **Distribution Routers**: Sit between core and access layers, aggregating multiple subnet connections.  
- **Wireless Routers**: Routers that also provide Wi-Fi access point functionality.  
- **Virtual Routers**: Software-based routers that perform routing functions without dedicated hardware.  

Each type is optimized for its environment: home routers prioritize ease-of-use and NAT, while enterprise/ISP routers prioritize performance, redundancy, and support for advanced protocols.

---

## Routing Methods

### Static Routing
- Routes are **manually configured** by an administrator (e.g., `ip route` commands).  
- Simple and deterministic, but **does not adapt** to network changes.  
- Ideal for small or fixed networks.

**Example (Cisco CLI):**
```text
ip route 192.168.2.0 255.255.255.0 192.168.1.2
```

### Dynamic Routing
- Routers run routing protocols (such as RIP, OSPF, EIGRP, BGP) to automatically learn and exchange routes with neighbors.  
- Adapts to network changes and is more scalable for large networks.  
- When multiple route sources provide paths to the same destination, routers use metrics and Administrative Distance to choose the best route.

### Default Routing
- A default route is a catch-all entry that matches any destination not found in the routing table.  
- Often used on routers at network edges to forward all “unknown” traffic to a single next-hop (e.g., the ISP’s gateway).  

**Example (Cisco CLI):**
```text
ip route 0.0.0.0 0.0.0.0 192.168.1.1
```

---

## Routing Table and Route Selection

- **Routing Information Base (RIB):** Contains all routes learned from connected networks, static entries, and dynamic protocols.  
- **Forwarding Information Base (FIB):** Contains only the best routes selected from the RIB and is optimized for quick lookup.  
- **Control Plane vs Data Plane:** Route computation happens in the control plane using the RIB; forwarding happens in the data plane using the FIB.  
- **Administrative Distance (AD):** Numeric value (0–255) rating the trustworthiness of a route source (lower = more trusted).  
- **Route Metrics:** Each routing protocol assigns a cost (e.g., OSPF cost, RIP hop count).  
- **Longest-Prefix Match:** The router chooses the most specific matching network prefix.

---

## Routers in Home vs Enterprise Networks

- **Home Router:** All-in-one device combining routing, switching, Wi-Fi, firewall, and DHCP. Provides NAT and simple configuration.  
- **Enterprise/ISP Router:** High-performance, scalable hardware supporting multiple protocols and redundancy.

---

## Routers and NAT

Routers often implement **Network Address Translation (NAT)** to enable IPv4 devices to communicate over the Internet.

- **Purpose:** Maps private IPs to a public IP, conserving IPv4 space and hiding internal details.  
- **How it Works:** The router rewrites the packet’s private source IP with its public IP and remembers the translation. When responses return, it forwards them to the correct internal host.

Example: Home routers use **Port Address Translation (PAT)** — all devices share the same public IP but use different source ports.

---

## Common Router Protocols

- **RIP:** Simple distance-vector protocol (obsolete).  
- **OSPF:** Link-state protocol used in enterprise LANs.  
- **EIGRP:** Cisco-developed hybrid protocol.  
- **BGP:** Path-vector protocol used on the Internet.  
- **IS-IS:** Link-state protocol used by large service providers.

---

## Further Reading

- Routing Tables – Learn how routers organize and lookup routes.  [ [ ROUTING TABLE ] ](routing_table.md)
- Switches – Details on Layer-2 switches and how they differ from routers.  [ [ SWITCHES ] ](switches.md)
- VLAN – Understanding Virtual LANs and inter-VLAN routing.  [ [ VLAN ] ](vlan.md)
- NAT – Deep dive into Network Address Translation.  [ [ NAT ] ](nat.md)
- OSI Model – Reference for networking layers.  [ [ OSI MODEL ] ](osi_model.md)

---

**Sources:** Cisco documentation and authoritative networking references were used to ensure accuracy.
