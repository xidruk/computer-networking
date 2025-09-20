# Network Troubleshooting Basics

## Table of Contents
1. [Introduction](#introduction)
2. [Why Network Troubleshooting is Important](#why-network-troubleshooting-is-important)
3. [Ping](#ping)
4. [Traceroute](#traceroute)
5. [NSLookup](#nslookup)
6. [Tcpdump](#tcpdump)
7. [Wireshark Basics](#wireshark-basics)
8. [Best Practices for Troubleshooting](#best-practices-for-troubleshooting)
9. [Resources](#resources)
10. [Conclusion](#conclusion)

---

## Introduction
Network troubleshooting is a critical skill for network administrators, IT professionals, and advanced users. Tools like **ping, traceroute, nslookup, tcpdump, and Wireshark** help diagnose connectivity issues, analyze network performance, and detect problems before they escalate.

---

## Why Network Troubleshooting is Important
- Ensures reliable connectivity for users and applications.  
- Detects and resolves issues quickly.  
- Improves network performance and uptime.  
- Helps in planning and optimizing network infrastructure.

---

## Ping
Ping checks the **reachability** of a host and measures **round-trip time (RTT)**.

**Example commands:**

```bash
# Linux/macOS
ping -c 4 8.8.8.8

# Windows
ping 8.8.8.8 -n 4
```

---

## Traceroute
Traceroute identifies the **path packets take** from your device to a destination host.

**Example commands:**

```bash
# Linux/macOS
traceroute google.com

# Windows
tracert google.com
```

---

## NSLookup
NSLookup queries **DNS servers** to resolve domain names to IP addresses.

**Example commands:**

```bash
nslookup example.com
nslookup -type=MX example.com
nslookup example.com 8.8.8.8
```

---

## Tcpdump
Tcpdump captures and displays **network packets** for analysis.

**Example commands:**

```bash
sudo tcpdump -i eth0 -c 10
sudo tcpdump -i eth0 -n
sudo tcpdump -i eth0 port 80
```

---

## Wireshark Basics
Wireshark is a **graphical packet analyzer** for detailed network inspection.

**Basic filters:**

```
ip.addr == 192.168.1.10   # Filter by IP address
tcp.port == 80             # Filter HTTP traffic
icmp                       # Filter ICMP packets
```

**Tips:** Capture traffic on the correct interface and use filters to isolate specific packets.

---

## Best Practices for Troubleshooting
- Start with **ping** for basic connectivity.  
- Use **traceroute** to identify network paths and latency.  
- Verify DNS using **nslookup**.  
- Capture and analyze packets with **tcpdump** or **Wireshark**.  
- Document findings and troubleshoot methodically.

---

## Resources
Here are some recommended resources to learn these network troubleshooting tools in depth:

- [Ping & Traceroute tutorial - Cisco](https://www.cisco.com/c/en/us/support/docs/ip/routing-information-protocol-rip/13788-3.html)  
- [NSLookup guide - Microsoft Docs](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/nslookup)  
- [Tcpdump official documentation](https://www.tcpdump.org/manpages/tcpdump.1.html)  
- [Wireshark official documentation](https://www.wireshark.org/docs/)  
- [Practical Packet Analysis, 4th Edition](https://www.nostarch.com/packetanalysis4) (Book)  
- [Network Troubleshooting Basics - Linux Journal](https://www.linuxjournal.com/article/8695)

---

## Conclusion
Mastering tools like **ping, traceroute, nslookup, tcpdump, and Wireshark** is essential for effective network troubleshooting. With these skills, administrators can quickly identify and resolve issues, ensuring smooth network operations and reliable connectivity.
