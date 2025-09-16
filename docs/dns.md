

# 🗂️ DNS (Domain Name System)

DNS (Domain Name System) is a global, distributed system that translates human-friendly domain names (like www.example.com) into machine-readable IP addresses. It acts as the Internet’s directory, enabling seamless access to websites and online services without needing to remember complex numbers. DNS is essential for usability, scalability, and security on the Internet.

---

## Table of Contents

1. [What is DNS?](#what-is-dns)
   - [The role of DNS in the Internet](#the-role-of-dns-in-the-internet)
   - [Why DNS is needed](#why-dns-is-needed)
2. History of DNS
3. How does DNS work?
	- DNS resolution process
	- Example: Getting on the web
	- Hardware components in DNS queries
	- Steps in a DNS lookup
4. Types of DNS servers
	- DNS recursor (recursive resolver)
	- Root nameserver
	- TLD nameserver
	- Authoritative nameserver
5. Types of DNS queries
	- Recursive query
	- Iterative query
	- Non-recursive query
6. DNS records
	- Common DNS record types
	- Example of a DNS config
7. DNS caching
	- Browser DNS caching
	- OS-level DNS caching
	- ISP/recursive resolver caching
8. The power of DNS
	- Scalability and reliability
	- Security aspects

---

# 1. What is DNS?

DNS, or **Domain Name System**, is the foundational technology that makes the Internet easy to use for everyone. At its core, DNS is a system that translates human-friendly domain names (like `google.com` or `wikipedia.org`) into the numerical IP addresses that computers use to communicate with each other. This translation is crucial because, while humans prefer names, computers and network devices require numbers to route data correctly.

---

## The role of DNS in the Internet

Imagine the Internet as a vast city, and every website is a house with a unique address. DNS acts as the city’s directory, helping you find the exact address of any house (website) you want to visit. When you type a website name into your browser, DNS quickly finds the corresponding IP address so your device can connect to the right server.  

Without DNS, you would need to remember and enter long strings of numbers for every site you visit, which would be nearly impossible for most people.

DNS also enables the growth and scalability of the Internet. By allowing domain names to be mapped to different IP addresses, websites can move servers, change hosting providers, or use multiple servers for reliability and speed—all without users needing to know anything has changed.

---

## Why DNS is needed

- **Human Usability**: People remember names much more easily than numbers. DNS lets us use memorable names instead of complex IP addresses.  
- **Scalability**: DNS supports billions of devices and websites, making it possible for the Internet to grow without running out of addresses or names.  
- **Flexibility**: Website owners can change their server’s IP address or move their site to a new provider without affecting how users access their site.  
- **Security**: DNS can help protect users from malicious sites by enabling security features like DNS filtering and domain reputation checks.  
- **Reliability**: DNS is distributed globally, so even if part of the system fails, the rest can continue to operate, keeping the Internet running smoothly.  
