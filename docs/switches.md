# Switches

A **network switch** is a device that connects multiple devices within a **Local Area Network (LAN)** and directs data to the correct destination using **MAC addresses**. Unlike hubs (which blindly send data to all devices), switches intelligently forward data only where it needs to go. This makes them a fundamental building block of modern networks.

---

## Table of Contents
1. [What is a Switch?](#what-is-a-switch)
2. [Why Switches are Important](#why-switches-are-important)
3. [How Switches Work](#how-switches-work)
   - [MAC Address Learning](#mac-address-learning)
   - [Forwarding and Filtering](#forwarding-and-filtering)
   - [Flooding and Broadcasts](#flooding-and-broadcasts)
4. [Switching Process in Detail](#switching-process-in-detail)
5. [Types of Switches](#types-of-switches)
   - [Unmanaged Switches](#unmanaged-switches)
   - [Managed Switches](#managed-switches)
   - [Layer 2 Switches](#layer-2-switches)
   - [Layer 3 Switches](#layer-3-switches)
   - [PoE Switches](#poe-switches)
6. [Switches vs Hubs vs Routers](#switches-vs-hubs-vs-routers)
7. [Switches and VLANs](#switches-and-vlans)
8. [Switch Security Features](#switch-security-features)
9. [Practical Examples of Switch Usage](#practical-examples-of-switch-usage)
10. [Further Reading](#further-reading)

---

## What is a Switch?

A switch is a **Layer 2 (Data Link Layer)** device in the OSI model, though some operate at **Layer 3 (Network Layer)**. It connects devices (computers, printers, servers, etc.) in a LAN and ensures data packets are delivered only to their intended destination.

Think of a switch like a **post office clerk**: instead of delivering every letter to every house, the clerk reads the address and sends it only where it belongs.

---

## Why Switches are Important

- **Reduce collisions** compared to hubs.
- **Efficient data delivery** using MAC addresses.
- **Support for VLANs** to segment networks.
- **Scalability** for growing networks.
- **Security features** like port security and access control.

Without switches, modern LANs would be inefficient, insecure, and nearly impossible to scale.

---

## How Switches Work

Switches build and use a **MAC Address Table (or CAM table)** to decide where to forward frames.

### MAC Address Learning
- Each device has a unique **MAC address**.
- When a device sends data, the switch records the source MAC and the port it came from.
- Over time, the switch learns where all devices are located.

### Forwarding and Filtering
- When a frame arrives, the switch checks the **destination MAC address**.
- If the address is in the MAC table, the switch forwards the frame to the correct port.
- If not, it floods the frame to all ports (except the source).

### Flooding and Broadcasts
- Unknown destination? → Flood the frame.
- Broadcast traffic (like ARP requests) → Sent to **all ports**.

This ensures communication even when the switch doesn’t yet know all devices.

---

## Switching Process in Detail

1. A frame enters the switch on a port.
2. The switch **records the source MAC address** and associates it with that port.
3. The switch checks its MAC table for the **destination MAC**.
4. If found, the frame is forwarded only to that port.
5. If not found, the switch **floods** the frame to all ports.
6. Over time, the switch learns the entire LAN topology.

This intelligent forwarding is why switches are faster and more efficient than hubs.

---

## Types of Switches

### Unmanaged Switches
- Plug-and-play, no configuration needed.
- Common in small offices or homes.

### Managed Switches
- Offer configuration options via CLI, web, or SNMP.
- Support VLANs, QoS, port mirroring, and security features.
- Used in enterprise environments.

### Layer 2 Switches
- Operate at the Data Link Layer.
- Forward based on MAC addresses only.

### Layer 3 Switches
- Combine switch + router capabilities.
- Can forward based on **IP addresses**.
- Support **inter-VLAN routing**.

### PoE Switches
- Provide **Power over Ethernet** to devices (IP phones, cameras, APs).
- Eliminate the need for separate power supplies.

---

## Switches vs Hubs vs Routers

| Feature            | Hub                           | Switch                         | Router                           |
|--------------------|-------------------------------|--------------------------------|----------------------------------|
| OSI Layer          | Layer 1 (Physical)            | Layer 2 (Data Link)            | Layer 3 (Network)                |
| Data Delivery      | Sends to all devices          | Sends only to destination MAC  | Sends based on IP addresses      |
| Efficiency         | Low                           | High                           | High (but slower than switches)  |
| Scope              | Small LAN                     | LAN                            | LAN ↔ WAN                        |

---

## Switches and VLANs

Switches support **Virtual LANs (VLANs)**, which allow you to:
- Segment a physical network into multiple logical networks.
- Improve security by isolating traffic.
- Improve efficiency by reducing broadcast domains.

Example: Separate VLANs for HR, Finance, and IT in a single physical switch.

For more details: [VLAN](vlan.md)

---

## Switch Security Features

Modern switches can improve security with:
- **Port security** → Limit devices per port.
- **MAC filtering** → Allow only approved devices.
- **Access Control Lists (ACLs)** → Restrict traffic based on rules.
- **Storm control** → Prevent broadcast/multicast floods.
- **802.1X authentication** → User/device authentication before access.

---

## Practical Examples of Switch Usage

- A home network using an unmanaged switch to connect PCs, printers, and a NAS.
- An office network using managed switches with VLANs to separate departments.
- A data center using Layer 3 switches for routing between server racks.

---

## Further Reading

- [Routers](routers.md)
- [Routing Tables](routing_table.md)
- [VLAN](vlan.md)
- [OSI Model](osi_model.md)

---