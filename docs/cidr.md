# CIDR (Classless Inter-Domain Routing)

**CIDR (Classless Inter-Domain Routing)** is a method for allocating and routing IP addresses more efficiently.  
It replaces the old **classful addressing system**, which was too rigid and caused waste of IP address space.  

CIDR introduces the **prefix length notation** (e.g., `/24`) to define how many bits belong to the network portion of an address.

---

## Table of Contents
1. [What is CIDR?](#what-is-cidr)
2. [Why Was CIDR Introduced?](#why-was-cidr-introduced)
3. [CIDR Notation](#cidr-notation)
4. [CIDR Prefix and Host Capacity](#cidr-prefix-and-host-capacity)
5. [CIDR vs Classful Addressing](#cidr-vs-classful-addressing)
6. [CIDR in Routing](#cidr-in-routing)
7. [CIDR and Subnetting](#cidr-and-subnetting)
8. [Examples of CIDR](#examples-of-cidr)
9. [Advantages of CIDR](#advantages-of-cidr)
10. [Further Reading](#further-reading)

---

## What is CIDR?

CIDR allows networks to be defined with **any prefix length**, not just fixed class boundaries (Class A, B, C).  
- Example: Instead of being forced to use a Class C (`255.255.255.0` or `/24`), you can use `/27` or `/29` depending on your needs.  

This flexibility avoids wasting addresses and enables more efficient routing.

---

## Why Was CIDR Introduced?

Before CIDR, IP addresses were divided into classes:

- **Class A**: 16 million hosts (wasted for small networks).  
- **Class B**: 65,534 hosts (still very large).  
- **Class C**: 254 hosts (often too small).  

This rigid system caused:  
1. **IP address exhaustion** – huge blocks wasted.  
2. **Routing table explosion** – too many entries in global routers.  

CIDR solved both problems by:  
- Allowing variable-length prefixes.  
- Supporting **route aggregation** (summarizing multiple routes into one).  

---

## CIDR Notation

CIDR uses **slash notation** to indicate the number of **network bits**.

Example:  
- `192.168.1.0/24` → 24 bits network, 8 bits host.  
- `192.168.1.0/26` → 26 bits network, 6 bits host.  

---

## CIDR Prefix and Host Capacity

| CIDR Prefix | Subnet Mask       | Network Bits | Host Bits | Usable Hosts |
|-------------|-------------------|--------------|-----------|--------------|
| /8          | 255.0.0.0         | 8            | 24        | 16,777,214   |
| /16         | 255.255.0.0       | 16           | 16        | 65,534       |
| /24         | 255.255.255.0     | 24           | 8         | 254          |
| /26         | 255.255.255.192   | 26           | 6         | 62           |
| /30         | 255.255.255.252   | 30           | 2         | 2            |

*Formula:*  
- Usable hosts = `(2^host bits) - 2`  

---

## CIDR vs Classful Addressing

**Classful addressing**:  
- Fixed blocks: Class A (/8), Class B (/16), Class C (/24).  
- Wasteful: a small company could only get 65,000 addresses even if it needed 500.  

**CIDR addressing**:  
- Flexible prefix length (e.g., `/22`, `/28`).  
- Networks sized according to need.  
- Aggregation reduces routing complexity.  

---

## CIDR in Routing

Routers use CIDR for **route summarization** (also called *supernetting*).  

Example:  
- Instead of listing:  
  - `192.168.0.0/24`  
  - `192.168.1.0/24`  
  - `192.168.2.0/24`  
  - `192.168.3.0/24`  

We can aggregate them as:  
- `192.168.0.0/22`  

This shrinks routing tables, improving efficiency and speed.

---

## CIDR and Subnetting

- **Subnetting** breaks a large block into smaller subnets.  
- **CIDR** generalizes this by allowing any prefix length.  
- CIDR is sometimes called **“supernetting”** when combining multiple networks.  

So, subnetting and CIDR are two sides of the same coin:  
- Subnetting = dividing networks.  
- CIDR = combining or flexibly defining them.  

---

## Examples of CIDR

1. **Small Office Network**  
   - Need ~50 hosts.  
   - `/26` gives 62 usable hosts → perfect.  

2. **ISP Aggregation**  
   - ISP owns `200.10.0.0 – 200.10.15.255`.  
   - Instead of advertising 16 Class C routes, ISP announces:  
     - `200.10.0.0/20`  

---

## Advantages of CIDR

- Efficient use of IPv4 space.  
- Delayed IPv4 exhaustion.  
- Smaller routing tables.  
- Flexibility: networks can be exactly as large as needed.  
- Foundation for modern IP routing and internet backbone.  

---

## Further Reading

- [Subnet Mask](subnet_mask.md)  
- [Subnetting](subnetting.md)  
- [VLSM](vlsm.md)  
- [IPv4](ipv4.md)  
- [IPv6](ipv6.md)
