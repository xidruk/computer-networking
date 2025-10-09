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
Start by explaining what an IP address is and how it represents a device in a network. Introduce the subnet mask as the “boundary marker” that separates the network portion of an IP address from the host portion.

## Why Subnet Masks Exist
Explain the need for dividing large networks into smaller segments. Mention efficient IP usage, security, and broadcast control.

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
Walk through a real example — breaking a /24 network into smaller subnets, showing binary math and address ranges.

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
