# Routing Tables

A **routing table** is a data structure inside a router (or Layer 3 device) that stores information about possible routes a packet can take to reach its destination. Think of it as the router’s **map or GPS** — it tells the router where to forward packets based on their **destination IP addresses**.

---

## Table of Contents
1. [What is a Routing Table?](#what-is-a-routing-table)
2. [How Routing Tables Work](#how-routing-tables-work)
3. [Structure of a Routing Table](#structure-of-a-routing-table)
4. [Types of Routes](#types-of-routes)
   - [Directly Connected Routes](#directly-connected-routes)
   - [Static Routes](#static-routes)
   - [Dynamic Routes](#dynamic-routes)
   - [Default Routes](#default-routes)
5. [Routing Decision Process](#routing-decision-process)
6. [Examples of Routing Tables](#examples-of-routing-tables)
7. [Why Routing Tables are Important](#why-routing-tables-are-important)
8. [Further Reading](#further-reading)

---

## What is a Routing Table?

A routing table contains **entries (routes)** that tell the router:
- Which network destinations exist.  
- How to reach them (via which interface or next hop).  
- What metrics or priorities apply to each route.  

Without a routing table, a router would not know where to send packets beyond its directly connected networks.

---

## How Routing Tables Work

1. A packet arrives at the router.  
2. The router checks the **destination IP address**.  
3. The router looks for the **best matching entry** in its routing table.  
4. The router forwards the packet to the corresponding **next hop** (another router) or **outgoing interface**.  
5. If no match is found, the packet is dropped (unless a **default route** exists).  

---

## Structure of a Routing Table

Typical fields in a routing table entry:

| Field            | Description |
|------------------|-------------|
| **Destination**  | Network or host address (e.g., 192.168.1.0/24). |
| **Subnet Mask / Prefix Length** | Defines the size of the destination network. |
| **Next Hop**     | IP address of the next router along the path. |
| **Interface**    | Outgoing router interface (e.g., GigabitEthernet0/1). |
| **Metric**       | Cost/priority of the route (lower is better). |
| **Route Source** | Where the route came from (connected, static, OSPF, BGP, etc.). |

---

## Types of Routes

### Directly Connected Routes
- Created automatically when you configure an interface with an IP address.  
- Example: if a router’s interface is 192.168.1.1/24, then `192.168.1.0/24` will appear in the table.  

### Static Routes
- Manually added by administrators.  
- Example:  
  ```
  ip route 10.0.0.0 255.255.255.0 192.168.1.2
  ```
  This means “to reach 10.0.0.0/24, send packets to 192.168.1.2.”  

### Dynamic Routes
- Learned automatically from **routing protocols** like RIP, OSPF, EIGRP, or BGP.  
- Adapt to changes in the network.  

### Default Routes
- A special route used when no other route matches.  
- Often points to the ISP gateway.  
- Example:  
  ```
  ip route 0.0.0.0 0.0.0.0 192.168.1.1
  ```

---

## Routing Decision Process

When multiple routes exist, the router uses:
1. **Longest Prefix Match (LPM):** The most specific subnet wins.  
   - Example: If both `10.0.0.0/8` and `10.1.2.0/24` exist, a packet for `10.1.2.5` uses the `/24` route.  
2. **Administrative Distance (AD):** Trustworthiness of the route source.  
   - Directly connected (AD = 0) is more trusted than static (1), which is more trusted than dynamic protocols.  
3. **Metric:** Used if multiple routes from the same source exist. Lower metric = better path.  

---

## Examples of Routing Tables

### Cisco IOS Example:
```
Router> show ip route
C    192.168.1.0/24 is directly connected, FastEthernet0/0
S    10.0.0.0/24 [1/0] via 192.168.1.2
D    172.16.0.0/16 [90/2102400] via 192.168.1.3, 00:00:23, FastEthernet0/1
```

### Linux Example:
```
$ route -n
Destination   Gateway      Genmask        Iface
192.168.1.0   0.0.0.0      255.255.255.0  eth0
10.0.0.0      192.168.1.2  255.255.255.0  eth0
0.0.0.0       192.168.1.1  0.0.0.0        eth0
```

---

## Why Routing Tables are Important

- They ensure data is delivered to the right destination.  
- Misconfigured routes can cause **network outages**.  
- Key to troubleshooting connectivity issues.  
- Provide insight into **how packets travel** across a network.  

---

## Further Reading

- [Routers](routers.md)  
- [Switches](switches.md)  
- [VLAN](vlan.md)  
- [NAT](nat.md)  

---
