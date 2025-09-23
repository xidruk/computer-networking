# VLSM (Variable Length Subnet Mask)

**VLSM (Variable Length Subnet Mask)** is a technique that allows us to apply subnet masks of different sizes to the same IP network block.  
This gives network administrators the flexibility to allocate IP addresses more efficiently based on actual needs.  

---

## Table of Contents
1. [What is VLSM?](#what-is-vlsm)
2. [Why Do We Need VLSM?](#why-do-we-need-vlsm)
3. [How VLSM Works](#how-vlsm-works)
4. [Step-by-Step VLSM Process](#step-by-step-vlsm-process)
5. [VLSM Example](#vlsm-example)
6. [VLSM vs CIDR](#vlsm-vs-cidr)
7. [Advantages of VLSM](#advantages-of-vlsm)
8. [Further Reading](#further-reading)

---

## What is VLSM?

- In traditional subnetting, all subnets created from a block must be the **same size**.  
- With **VLSM**, you can create **subnets of different sizes** depending on the needs of each part of your network.  

This means:  
- Small subnets for small groups of hosts.  
- Larger subnets for larger departments.  
- No unnecessary waste of IP addresses.

---

## Why Do We Need VLSM?

Imagine you have a company network with these departments:  

- HR: 10 devices  
- Sales: 50 devices  
- IT: 200 devices  

Without VLSM:  
- You must assign the same subnet size everywhere (e.g., /24 for each).  
- Huge waste in HR (244 unused addresses).  

With VLSM:  
- HR can use a /28 subnet (14 usable addresses).  
- Sales can use a /26 subnet (62 usable addresses).  
- IT can use a /24 subnet (254 usable addresses).  

Result → Efficient IP address usage.

---

## How VLSM Works

VLSM is built on the idea of **applying different subnet masks to different parts of the same network**.

- Start with a **network block** (e.g., `192.168.0.0/24`).  
- Subnet it into smaller blocks.  
- Assign smaller or larger subnets according to department needs.  

---

## Step-by-Step VLSM Process

1. **List subnet requirements** (how many hosts needed in each subnet).  
2. **Sort them from largest to smallest** (to minimize overlap and waste).  
3. **Assign the largest subnet first** using the network block.  
4. **Continue allocating smaller subnets** from the remaining address space.  
5. **Verify no overlap** and ensure enough space remains.  

---

## VLSM Example

Suppose you have the network: `192.168.1.0/24` (254 usable hosts).  
You need subnets for:  
- Department A: 100 hosts  
- Department B: 50 hosts  
- Department C: 25 hosts  
- Department D: 10 hosts  

### Step 1: Sort requirements
- Dept A → 100 hosts  
- Dept B → 50 hosts  
- Dept C → 25 hosts  
- Dept D → 10 hosts  

### Step 2: Assign subnets
- Dept A → `/25` (128 addresses, 126 usable) → `192.168.1.0/25`  
- Dept B → `/26` (64 addresses, 62 usable) → `192.168.1.128/26`  
- Dept C → `/27` (32 addresses, 30 usable) → `192.168.1.192/27`  
- Dept D → `/28` (16 addresses, 14 usable) → `192.168.1.224/28`  

Now the block is fully and efficiently used.

---

## VLSM vs CIDR

- **CIDR**: Used for IP allocation and routing in the internet backbone. It defines flexible prefix lengths and allows **route aggregation**.  
- **VLSM**: Used for **subnetting within a private network**, creating subnets of different sizes.  

Think of it like this:  
- CIDR = external/global optimization.  
- VLSM = internal/local optimization.  

---

## Advantages of VLSM

- Eliminates IP address waste.  
- Supports scalable and hierarchical subnet design.  
- Ensures networks are sized **exactly to requirements**.  
- Critical for IPv4 address conservation.  

---

## Further Reading

- [Subnet Mask](subnet_mask.md)  
- [Subnetting](subnetting.md)  
- [CIDR](cidr.md)  
- [IPv4](ipv4.md)  
- [IPv6](ipv6.md)  
