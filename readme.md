# Computer Networking 🌐

This repository covers the basics of computer networking. It is designed to introduce you to the fundamentals and essential concepts, helping you take your first steps into the vast world of networking.

---

## Table of Contents

1. **Introduction**
   - [Definition of Computer Network](#definition-of-computer-network)
   - [Why Networks are Important](#why-networks-are-important)
   - [Basic Networking Terms](#basic-networking-terms)
2. **Types of Computer Networks**
   - LAN, WAN, MAN, PAN, WLAN, CAN, SAN, VPN, GAN
3. **Network Devices**
   - Repeater, Hub, Switch, Bridge, Router
   - Access Point, Firewall, Load Balancer
   - Virtual Switch, Virtual Router, Host / Computer
4. **Network Communication Types**
   - Unicast, Broadcast, Multicast, Anycast
5. **IP Addressing and Subnetting**
   - IPv4, IPv6, Subnetting, VLSM, CIDR, MAC Address
6. **Protocols**
   - TCP, UDP, TCP/IP, DHCP, DNS
7. **Routing & Switching Concepts**
   - Routers, Routing Table, Switches, VLAN
8. **OSI Model**
   - Overview, Layer 1-7
9. **Network Services**
   - NAT, Gateways, QoS, Load Balancing
   - VPN, Cloud Networking, Wireless Networking
10. **Network Security**
    - Firewall, Network Security Basics
11. **Network Data Units**
    - Frames, Packets, Segments, Ports
12. **Troubleshooting & Monitoring**
    - Network Troubleshooting, Monitoring Tools
---

## Introduction

### Definition of Computer Network
A **computer network** is a collection of interconnected devices—such as computers, servers, and other hardware—that communicate with each other to share resources, exchange information, and enable collaboration. Networks can be small, like a home network connecting a few devices, or large, spanning cities or even countries.  

By allowing devices to communicate, networks make it possible to share files, access the internet, run applications remotely, and coordinate complex systems efficiently.


### Why Networks are Important
Computer networks are the backbone of modern digital life. They allow businesses, schools, governments, and individuals to:

- **Share Resources:** Printers, storage devices, and internet connections can be shared among multiple users.  
- **Communicate Quickly:** Email, messaging apps, and video calls rely on networks to transmit information instantly.  
- **Access Remote Services:** Cloud computing, web applications, and online databases require a reliable network connection.  
- **Enable Collaboration:** Teams can work together in real time, regardless of geographic location.  
- **Support Scalability:** Networks allow organizations to grow by adding new devices and services without disrupting existing systems.

In short, networks make modern computing fast, flexible, and efficient.


### Basic Networking Terms
To get started with networking, here are some foundational terms:

- **Node / Host:** Any device connected to a network (computer, server, printer, etc.).  
- **Link / Connection:** The physical or wireless medium that connects devices.  
- **Protocol:** A set of rules that devices follow to communicate correctly. Examples include TCP/IP, UDP, and HTTP.  
- **Bandwidth:** The maximum amount of data that can be transmitted over a network in a given time.  
- **Latency:** The delay between sending and receiving data.  
- **Packet:** A small unit of data sent across a network.  
- **MAC Address:** A unique identifier assigned to each network device.  
- **IP Address:** A numerical label that identifies a device on a network.

> These concepts form the building blocks of networking. As you progress through this guide, you will see how they work together to create powerful, reliable networks.

---

## Types of Computer Networks

There are many types of computer networks, each designed for specific purposes and environments. Below is a table highlighting some of the most common network types, along with brief and expanded explanations.

| Network Type | Short Explanation | Expanded Explanation |
|-------------|------------------|---------------------|
| LAN (Local Area Network) | Connects computers within a limited area like a home, school, or office. | [Learn more about LANs](https://www.geeksforgeeks.org/local-area-network-lan/) - LANs are fast, secure, and ideal for small geographic areas. |
| WAN (Wide Area Network) | Covers a large geographic area, often connecting multiple LANs. | [Learn more about WANs](https://www.geeksforgeeks.org/wide-area-network-wan/) - WANs use public or private transmission systems to link distant locations. |
| MAN (Metropolitan Area Network) | Spans a city or large campus. | [Learn more about MANs](https://www.geeksforgeeks.org/metropolitan-area-network-man/) - MANs are larger than LANs but smaller than WANs, often used by organizations with multiple buildings. |
| PAN (Personal Area Network) | Connects devices within a person's workspace, like Bluetooth. | [Learn more about PANs](https://www.geeksforgeeks.org/personal-area-network-pan/) - PANs are used for short-range communication between personal devices. |
| WLAN (Wireless LAN) | LAN using wireless technology. | [Learn more about WLANs](https://www.geeksforgeeks.org/wireless-local-area-network-wlan/) - WLANs provide mobility and flexibility within a local area. |
| CAN (Campus Area Network) | Connects networks within a campus, like a university. | [Learn more about CANs](https://www.geeksforgeeks.org/campus-area-network-can/) - CANs are designed for large institutions with multiple buildings. |
| SAN (Storage Area Network) | Dedicated to data storage devices. | [Learn more about SANs](https://www.geeksforgeeks.org/storage-area-network-san/) - SANs provide high-speed connections for data storage and retrieval. |
| VPN (Virtual Private Network) | Securely connects remote users to a private network over the internet. | [Learn more about VPNs](https://www.geeksforgeeks.org/virtual-private-network-vpn/) - VPNs use encryption to protect data and ensure privacy. |
| GAN (Global Area Network) | Connects networks across the globe. | [Learn more about GANs](https://www.geeksforgeeks.org/global-area-network-gan/) - GANs are used for worldwide communication and data sharing. |


---

## Network Devices

Network devices are essential components that enable communication, data transfer, and security within computer networks. Below is a comprehensive table describing key network devices, their visual representation, definitions, roles, how they work, and links to further reading.

| Device | Visual View | Definition | Role | How It Works | Expanded Explain |
|--------|-------------|------------|------|--------------|------------------|
| Repeater | ![Repeater](static/repeater.png) | A device that regenerates and amplifies signals to extend the range of a network. | Extends network coverage by boosting weak signals. | Receives weak signals and retransmits them at full strength. | [Repeater - GeeksforGeeks](https://www.geeksforgeeks.org/repeater-in-computer-network/) |
| Bridge | ![Bridge](static/bridge.png) | Connects and filters traffic between two network segments. | Divides networks to reduce traffic and improve performance. | Examines incoming data and forwards it to the correct segment. | [Bridge - GeeksforGeeks](https://www.geeksforgeeks.org/bridge-in-computer-network/) |
| Host (Computer) | ![Host](static/computer-3.png) | Any device (PC, server, etc.) that sends or receives data on a network. | Acts as a source or destination for network communication. | Uses network protocols to communicate with other devices. | [Host - GeeksforGeeks](https://www.geeksforgeeks.org/host-in-computer-network/) |
| Hub | ![Hub](static/hub.png) | A basic device that connects multiple computers in a network. | Central connection point for devices in a LAN. | Broadcasts incoming data to all connected devices. | [Hub - GeeksforGeeks](https://www.geeksforgeeks.org/hub-in-computer-network/) |
| Router | ![Router](static/router.png) | Directs data packets between networks and manages traffic. | Connects different networks and routes data efficiently. | Uses routing tables to determine the best path for data. | [Router - GeeksforGeeks](https://www.geeksforgeeks.org/router-in-computer-network/) |
| Switch | ![Switch](static/workgroup-switch.png) | Connects devices in a network and forwards data only to the intended recipient. | Improves network efficiency and security. | Learns device addresses and sends data to the correct port. | [Switch - GeeksforGeeks](https://www.geeksforgeeks.org/switch-in-computer-network/) |
| Access Point | ![Access Point](static/wireless-access-point.png) | Provides wireless connectivity to devices in a network. | Enables Wi-Fi access for mobile and wireless devices. | Transmits and receives wireless signals to/from devices. | [Access Point - GeeksforGeeks](https://www.geeksforgeeks.org/access-point-in-computer-network/) |
| Firewall | ![Firewall](static/firewall.png) | Monitors and controls incoming and outgoing network traffic. | Protects networks from unauthorized access and threats. | Uses rules to allow or block traffic based on security policies. | [Firewall - GeeksforGeeks](https://www.geeksforgeeks.org/firewall-in-computer-network/) |
| Load Balancer | ![Load Balancer](static/load-balancer.png) | Distributes network or application traffic across multiple servers. | Ensures high availability and reliability. | Monitors server health and directs traffic to optimal resources. | [Load Balancer - GeeksforGeeks](https://www.geeksforgeeks.org/load-balancer-in-computer-network/) |
| Virtual Switch | ![Virtual Switch](static/virtual-switch-controller-vsc3.png) | Software-based switch for virtualized environments. | Connects virtual machines within a host or across hosts. | Uses software to manage traffic between VMs. | [Virtual Switch - GeeksforGeeks](https://www.geeksforgeeks.org/virtual-switch-in-computer-network/) |
| Virtual Router | ![Virtual Router](static/vpc-router.png) | Software-based router for virtual networks. | Routes traffic between virtual networks and devices. | Uses software to perform routing functions in cloud or virtual environments. | [Virtual Router - GeeksforGeeks](https://www.geeksforgeeks.org/virtual-router-in-computer-network/) |

> **Note:** This table highlights some of the most widely used network devices around the world. There are many other specialized devices not listed here, each serving unique roles in different networking environments.

---

## Network Communication Types


In computer networks, data can be transmitted in different ways depending on the number of senders and receivers. Understanding these communication types is crucial for grasping how networks operate efficiently.

| Type       | Description | Example | When to Use |
|------------|-------------|---------|-------------|
| **Unicast** | One-to-one communication where a single sender transmits data to a single receiver. | Sending an email from your computer to a friend. | Use for private, direct communication between devices. |
| **Broadcast** | One-to-all communication where a sender sends data to **all devices** in a network segment. | ARP requests in a local network. | Use for announcements or discovering devices in a LAN. |
| **Multicast** | One-to-many communication where data is sent to a **specific group** of devices. | Streaming a video to a group of subscribers. | Use for group communication where only a subset of devices need the data. |
| **Anycast** | One-to-nearest communication where data is delivered to the **closest node** among a group of potential receivers. | Accessing the nearest DNS server. | Use to reduce latency and improve efficiency in distributed networks. |

> **Tip:** For a deeper, step-by-step explanation of how each type works, along with diagrams and examples, check out the dedicated guide: [Network Communication Types](docs/netcom.md).

---

