# Routing Tables

A **routing table** is a data structure, essentially a digital map, stored inside a router or any Layer 3 device. It holds the information necessary to make forwarding decisions. For every packet it receives, the router consults this table to determine the best path to send the packet toward its final destination IP address.

Without a routing table, a router would be useless; it would have no idea where to send any data that wasn't for its own local networks.

---

## Table of Contents
1. [The Two Tables: RIB vs FIB](#the-two-tables-rib-vs-fib)
2. [Anatomy of a Route Entry](#anatomy-of-a-route-entry)
3. [How Routes Get in the Table (Route Sources)](#how-routes-get-in-the-table-route-sources)
   - [Directly Connected Routes (AD 0)](#directly-connected-routes-ad-0)
   - [Static Routes (AD 1)](#static-routes-ad-1)
   - [Dynamic Routes (AD-varies)](#dynamic-routes-ad-varies)
   - [Default Route (Route of Last Resort)](#default-route-route-of-last-resort)
4. [How a Router Chooses the Best Route](#how-a-router-chooses-the-best-route)
   - [Step 1: The FIB Lookup (Longest Prefix Match)](#step-1-the-fib-lookup-longest-prefix-match)
   - [Step 2: The RIB Selection (AD--Metric)](#step-2-the-rib-selection-ad--metric)
5. [Reading a Routing Table (Examples)](#reading-a-routing-table-examples)
6. [Further Reading](#further-reading)

---

## The Two Tables: RIB vs. FIB

The term *routing table* is often used generally, but in modern, high-performance routers, this “map” is actually split into two distinct tables that live on different *planes* of the router.

### 1. RIB (Routing Information Base)
- **Plane:** Control Plane (the "brain")  
- **What it is:** The master database of all routes. It’s the *map library* that holds every possible route the router has learned from all sources (static configuration, OSPF, BGP, etc.).  
- **Purpose:** To aggregate all routing information, apply policies, and use criteria (like Administrative Distance and Metric) to select the single best route for every known destination network.

### 2. FIB (Forwarding Information Base)
- **Plane:** Data Plane (the "workhorse," often in hardware/ASICs)  
- **What it is:** The “shipping list” or “cheat sheet.” It contains only the single best, active route for every destination, copied directly from the RIB.  
- **Purpose:** High-speed forwarding. When a packet arrives, the data plane hardware only looks at this simple, optimized table to make a forwarding decision instantly.  

**Analogy:** The RIB is like Google Maps with all possible routes and modes. The FIB is the simplified turn-by-turn directions you follow while driving.

---

## Anatomy of a Route Entry

Each line in a routing table is an entry that contains several key pieces of information used for forwarding decisions.

---

## How Routes Get in the Table (Route Sources)

A router’s RIB is populated from four main sources, listed from most trusted to least trusted.

### Directly Connected Routes (AD 0)
- **What they are:** Networks physically attached to the router.  
- **Creation:** Automatic when an interface is assigned an IP address (e.g., `192.168.1.1/24`).  
- **Trust:** Most trusted routes (Administrative Distance = 0).  

### Static Routes (AD 1)
- **What they are:** Routes manually configured by an administrator.  
- **Example:**  
  ```text
  ip route 10.0.0.0 255.255.255.0 192.168.1.2
  ```
- **Trust:** High (AD = 1). Simple and secure but do not adapt automatically to changes.

### Dynamic Routes (AD varies)
- **What they are:** Routes learned automatically from routing protocols like OSPF, EIGRP, RIP, or BGP.  
- **Purpose:** Enable routers to share and adapt routes dynamically.  
- **Typical AD Values:**  
  - OSPF: 110  
  - EIGRP: 90  
  - RIP: 120  
  - BGP: 20 (external) / 200 (internal)

### Default Route (Route of Last Resort)
- **What it is:** A special static route that matches all destinations (`0.0.0.0/0`).  
- **Example:**  
  ```text
  ip route 0.0.0.0 0.0.0.0 192.168.1.1
  ```
- **Purpose:** Used when no other route matches; crucial for edge routers connected to the Internet.

---

## How a Router Chooses the Best Route

Routers use a two-step process for choosing and applying routes.

### Step 1: The FIB Lookup (Longest Prefix Match)

When a packet arrives, the router’s data plane checks its FIB using the **Longest Prefix Match (LPM)** rule.  
The most specific route always wins.

**Example Scenario:**  
A packet for `192.168.1.50` arrives. The router has:  
```
192.168.0.0/16
192.168.1.0/24
0.0.0.0/0
```
**Decision:** All match, but `/24` is the longest prefix → it’s chosen.

### Step 2: The RIB Selection (AD & Metric)

If multiple routes to the same destination exist in the RIB, the router uses tie-breakers.

#### Tie-Breaker 1: Administrative Distance (AD)
- Chooses the route from the most trusted source (lowest AD).  
**Example:**  
Static route (AD = 1) vs. OSPF (AD = 110) → Static wins.

#### Tie-Breaker 2: Metric
- If the ADs are equal, choose the route with the lowest metric.  
**Example:**  
Two OSPF routes: one with Metric 20 and one with 50 → Metric 20 wins.

---

## Reading a Routing Table (Examples)

### Cisco IOS Example
```text
Router> show ip route
O    10.1.1.0/24 [110/2] via 10.1.1.2, 00:05:30, GigabitEthernet0/1
```
**Breakdown:**  
- `O` → Learned via OSPF  
- `10.1.1.0/24` → Destination network  
- `[110/2]` → Administrative Distance = 110, Metric = 2  
- `via 10.1.1.2` → Next hop  
- `GigabitEthernet0/1` → Exit interface  

### Linux Example
```bash
$ ip route show
default via 192.168.1.1 dev eth0
10.1.1.0/24 via 10.1.1.2 dev eth0
192.168.1.0/24 dev eth0 proto kernel scope link src 192.168.1.10
```
**Interpretation:**  
- `default` → Route of last resort  
- `via` → Next-hop address  
- `dev` → Outgoing interface  

---

## Further Reading

- [Routers](routers.md)  
- [NAT](nat.md)  
- [VLAN](vlan.md)  
- [Switches](switches.md)

---
