# Subnetting

**Subnetting** is the process of dividing a large network into smaller, more manageable networks called **subnets**.  
It is done by manipulating the **subnet mask** to allocate more bits to the network portion of an IP address and fewer bits to the host portion.  

---

## Table of Contents
1. [What is Subnetting?](#what-is-subnetting)
2. [Why Do We Need Subnetting?](#why-do-we-need-subnetting)
3. [How Subnetting Works](#how-subnetting-works)
   - [Step 1: Determine the Network Address](#step-1-determine-the-network-address)
   - [Step 2: Choose a Subnet Mask](#step-2-choose-a-subnet-mask)
   - [Step 3: Calculate Number of Subnets and Hosts](#step-3-calculate-number-of-subnets-and-hosts)
   - [Step 4: Find Subnet Ranges](#step-4-find-subnet-ranges)
4. [Subnetting Example](#subnetting-example)
5. [Subnetting in Binary](#subnetting-in-binary)
6. [Advantages of Subnetting](#advantages-of-subnetting)
7. [Subnetting, CIDR, and VLSM](#subnetting-cidr-and-vlsm)
8. [Further Reading](#further-reading)

---

## What is Subnetting?

- In IPv4, each address has two parts:  
  - **Network ID** – identifies the overall network.  
  - **Host ID** – identifies the specific device (host) in that network.  

Subnetting allows us to break a single network into **smaller sub-networks** by borrowing bits from the **host portion** and using them as additional **network bits**.  

---

## Why Do We Need Subnetting?

1. **Efficient IP Address Usage**  
   - Without subnetting, large blocks of addresses are wasted.  
   - Subnetting ensures we use IP space efficiently.  

2. **Reduced Network Congestion**  
   - Smaller subnets mean fewer devices per broadcast domain.  
   - This reduces unnecessary traffic.  

3. **Improved Security**  
   - Subnets can be used to isolate different departments or services.  

4. **Simplified Management**  
   - Easier to troubleshoot and manage smaller networks.  

---

## How Subnetting Works

### Step 1: Determine the Network Address
Start with the **IP address** and **default subnet mask**.  
Example:  
- IP: `192.168.1.0`  
- Default mask: `255.255.255.0` (/24)  

This gives **1 network** with **254 hosts**.  

---

### Step 2: Choose a Subnet Mask
Decide how many subnets you need or how many hosts per subnet.  

- Borrow bits from the **host portion**.  
- Each borrowed bit **doubles** the number of subnets.  
- Each borrowed bit **halves** the number of hosts per subnet.  

---

### Step 3: Calculate Number of Subnets and Hosts

Formulas:  
- **Number of subnets** = `2^n` (where `n` = number of borrowed bits)  
- **Number of hosts per subnet** = `(2^h) - 2` (where `h` = number of host bits left)  
  *We subtract 2 for the network and broadcast addresses.*  

---

### Step 4: Find Subnet Ranges
Each subnet has:
- A **network address** (first address).  
- A **host range** (usable addresses).  
- A **broadcast address** (last address).  

---

## Subnetting Example

Suppose we have:  
- Network: `192.168.1.0/24`  
- We want **4 subnets**.  

1. `/24` means **8 host bits**.  
2. To create 4 subnets, we borrow 2 bits:  
   - New prefix = `/26`  
   - New mask = `255.255.255.192`  

Calculation:  
- Number of subnets = `2^2 = 4`  
- Hosts per subnet = `(2^6) - 2 = 62`  

Subnets:  

| Subnet # | Network Address | Usable Hosts Range        | Broadcast Address |
|----------|-----------------|---------------------------|-------------------|
| 1        | 192.168.1.0     | 192.168.1.1 – 192.168.1.62  | 192.168.1.63      |
| 2        | 192.168.1.64    | 192.168.1.65 – 192.168.1.126 | 192.168.1.127     |
| 3        | 192.168.1.128   | 192.168.1.129 – 192.168.1.190 | 192.168.1.191     |
| 4        | 192.168.1.192   | 192.168.1.193 – 192.168.1.254 | 192.168.1.255     |

---

## Subnetting in Binary

Subnetting is essentially binary math.  

Example:  
- IP: `192.168.1.0`  
- Default mask: `11111111.11111111.11111111.00000000` (/24)  

If we borrow 2 bits:  
- New mask: `11111111.11111111.11111111.11000000` (/26)  

This creates 4 subnets. Each subnet’s **increment** is `64` in the last octet.  

---

## Advantages of Subnetting

- Saves IP addresses by dividing large blocks.  
- Improves network performance (smaller broadcast domains).  
- Enhances security by isolating networks.  
- Enables better control and management of traffic.  

---

## Subnetting, CIDR, and VLSM

- **Subnetting** is the foundation: dividing a network into smaller parts.  
- **CIDR (Classless Inter-Domain Routing)** introduced flexible prefix notation (e.g., `/26`) instead of rigid classes.  
- **VLSM (Variable Length Subnet Masking)** allows using different masks for different subnets within the same network, making address allocation even more efficient.  

---

## Further Reading

- [Subnet Mask](subnet_mask.md)  
- [VLSM](vlsm.md)  
- [CIDR](cidr.md)  
- [IPv4](ipv4.md)  
- [IPv6](ipv6.md)
