# Subnet Mask

## Table of Contents
1. [Introduction](#introduction)
2. [Why Subnet Masks Exist](#why-subnet-masks-exist)
3. [Binary Foundations: Bits and IP Addresses](#binary-foundations-bits-and-ip-addresses)
4. [What a Subnet Mask Actually Does](#what-a-subnet-mask-actually-does)
5. [How Network and Host Portions Work](#how-network-and-host-portions-work)
6. [Classful vs. Classless Addressing (CIDR)](#classful-vs-classless-addressing-cidr)
7. [Subnet Mask Notation: Dotted Decimal and /CIDR](#subnet-mask-notation-dotted-decimal-and-cidr)
8. [Subnetting Step-by-Step Example](#subnetting-step-by-step-example)
9. [Finding the Network, Broadcast, and Host Range](#finding-the-network-broadcast-and-host-range)
10. [Common Subnet Masks and Their Meanings](#common-subnet-masks-and-their-meanings)
11. [Subnetting Practice Scenarios](#subnetting-practice-scenarios)
12. [VLSM (Variable Length Subnet Masking)](#vlsm-variable-length-subnet-masking)
13. [Real-World Applications](#real-world-applications)
14. [Subnet Masks in IPv6](#subnet-masks-in-ipv6)
15. [Subnet Mask Quick Reference Table](#subnet-mask-quick-reference-table)
16. [Tools and Further Reading](#tools-and-further-reading)

---

## Introduction

If you’ve ever looked at an IP address like `192.168.1.10` and wondered what decides *where* that address belongs, you’re standing at the gates of subnet masks.  

A subnet mask is one of those quiet heroes of computer networking  rarely noticed, often misunderstood, but absolutely essential. It tells your device which part of an IP address refers to the **network** (the neighborhood) and which part refers to the **host** (your specific house).

Think of it like a postal system.  
An IP address is a full street address, but the subnet mask defines which part is the *city* and which part is the *house number*. Without it, devices would have no idea which ones are “local” neighbors and which ones live in faraway networks.

For example:
`IP Address: 192.168.1.10`
`Subnet Mask: 255.255.255.0`

That mask quietly says, “The first three sections (192.168.1) identify the network everything sharing that part is local. The last number identifies the individual device.”

Even if you’ve configured hundreds of routers, it helps to revisit subnet masks with fresh eyes because every IP calculation, every route, and every firewall rule depends on this fundamental division of network and host.

---

## Why Subnet Masks Exist

Back in the early days of the internet, networks were divided into fixed “classes” Class A, B, and C each with a preset size. It was simple but wasteful.  
A company with only 100 computers might receive an address block big enough for 65,000. Another with 70,000 devices might need several networks stitched together awkwardly.

Subnet masks were invented to solve this problem by adding flexibility. Instead of rigid classes, a subnet mask lets you *custom-shape* your network. You decide how many bits describe the network and how many bits describe the hosts.

In practice, that means you can split one big network into smaller ones or merge smaller ones into a larger whole depending on what you need.  
A subnet mask defines these boundaries precisely, allowing devices and routers to understand whether another IP is within the same local network or must be reached through a gateway.

For instance, if two computers have:
`192.168.1.10/24`
`192.168.2.20/24`

their subnet masks (`/24` means 255.255.255.0) tell them they live in different neighborhoods. They’ll talk to each other *through* a router, not directly. Change their masks to `/16` (255.255.0.0), and suddenly they’re back on the same street no router needed.

In short: the subnet mask exists to make IP addressing efficient, organized, and scalable.  
Without it, the internet would either waste vast address space or drown in confusion.

> **Tip for beginners:** If subnet masks seem abstract, remember this: they are *not* random numbers. They are precise blueprints that tell computers how to understand the map of the network.  
> **Tip for pros:** Re-examining subnet masks often reveals hidden inefficiencies in address planning the foundation of clean network design.

---

## Binary Foundations: Bits and IP Addresses
Show how IP addresses and subnet masks are composed of 32 bits. Briefly explain how binary numbers work and what 255.255.255.0 looks like in binary.

## What a Subnet Mask Actually Does
Describe how the subnet mask determines which part of an IP belongs to the network and which part to the host. Include an example like `192.168.1.10` with mask `255.255.255.0`.

## How Network and Host Portions Work
Illustrate how changing the subnet mask changes the ratio between network bits and host bits. Visualize using binary diagrams or tables.

## Classful vs. Classless Addressing (CIDR)
Explain older classful systems (A, B, C) and how CIDR replaced them with flexible prefix lengths.

## Subnet Mask Notation: Dotted Decimal and /CIDR
Clarify the two ways to write masks (e.g., `255.255.255.0` and `/24`) and show how to convert between them.

## Subnetting Step-by-Step Example
Walk through a real example breaking a /24 network into smaller subnets, showing binary math and address ranges.

## Finding the Network, Broadcast, and Host Range
Teach how to identify:
- Network address
- Broadcast address
- First and last usable host addresses

## Common Subnet Masks and Their Meanings
Provide quick explanations of common masks:
- `/24` (small LANs)
- `/30` (point-to-point)
- `/16` (large internal networks)

## Subnetting Practice Scenarios
Include small exercises for readers to test their understanding (e.g., find subnet for 10.0.5.18/20).

## VLSM (Variable Length Subnet Masking)
For a detailed explanation, see [`docs/vlsm.md`](docs/vlsm.md).

## Real-World Applications
Show how subnetting is applied in enterprises, ISPs, and home networks.

## Subnet Masks in IPv6
Briefly explain how IPv6 uses prefix lengths (e.g., `/64`) instead of dotted decimal notation.

## Subnet Mask Quick Reference Table

| CIDR | Subnet Mask        | # of Hosts | # of Subnets | Network Bits | Host Bits |
|------|--------------------|------------|---------------|---------------|------------|
| /8   | 255.0.0.0          | 16,777,214 | 1             | 8             | 24         |
| /16  | 255.255.0.0        | 65,534     | 256           | 16            | 16         |
| /24  | 255.255.255.0      | 254        | 65,536        | 24            | 8          |
| /25  | 255.255.255.128    | 126        | 131,072       | 25            | 7          |
| /26  | 255.255.255.192    | 62         | 262,144       | 26            | 6          |
| /27  | 255.255.255.224    | 30         | 524,288       | 27            | 5          |
| /28  | 255.255.255.240    | 14         | 1,048,576     | 28            | 4          |
| /29  | 255.255.255.248    | 6          | 2,097,152     | 29            | 3          |
| /30  | 255.255.255.252    | 2          | 4,194,304     | 30            | 2          |

## Tools and Further Reading
- [Subnet Calculator (IPCalc)](https://jodies.de/ipcalc)
- [Subnetting Practice Tool](https://subnettingpractice.com/)
- [RFC 4632 – Classless Inter-domain Routing (CIDR)](https://datatracker.ietf.org/doc/html/rfc4632)
