# Cloud Networking Basics

## Table of Contents
1. [Introduction](#introduction)
2. [What is Cloud Networking?](#what-is-cloud-networking)
3. [Virtual Private Cloud (VPC)](#virtual-private-cloud-vpc)
   - [Subnets](#subnets)
   - [Routing and Internet Gateways](#routing-and-internet-gateways)
   - [VPC Peering](#vpc-peering)
4. [Networking in AWS](#networking-in-aws)
5. [Networking in Azure](#networking-in-azure)
6. [Networking in GCP](#networking-in-gcp)
7. [Security Considerations](#security-considerations)
8. [Resources](#resources)
9. [Conclusion](#conclusion)

---

## Introduction
Cloud networking enables **communication between resources in cloud environments**. It provides flexibility, scalability, and isolation for applications deployed in **AWS, Azure, and GCP**. Understanding cloud networking concepts like **VPCs, subnets, and peering** is essential for designing secure and efficient cloud architectures.

---

## What is Cloud Networking?
Cloud networking involves **connecting cloud resources** such as virtual machines, containers, and storage while controlling traffic flow, security, and accessibility. Cloud providers offer **software-defined networking (SDN)** tools to configure networks efficiently without physical hardware.

---

## Virtual Private Cloud (VPC)
A **VPC** is a logically isolated section of the cloud where you can launch resources in a secure, configurable network environment.

### Subnets
- Subnets divide a VPC into smaller segments.  
- Can be **public** (accessible from the internet) or **private** (internal-only).  
- Each subnet has its **CIDR block** defining its IP address range.  

### Routing and Internet Gateways
- **Route tables** define how traffic flows within a VPC or to external networks.  
- **Internet Gateways (IGW)** allow communication between VPC resources and the internet.  
- **NAT Gateways** enable private subnets to access the internet securely.  

### VPC Peering
- **VPC Peering** connects two VPCs, allowing resources in one VPC to communicate with another.  
- Traffic remains private and does not traverse the public internet.  
- Common in multi-account or multi-region architectures.

---

## Networking in AWS
- AWS uses **VPCs** as the primary networking construct.  
- Features include **subnets, route tables, security groups, network ACLs, peering, and transit gateways**.  
- Supports **elastic IPs**, **private IPs**, and VPN connectivity.  
- Reference: [AWS VPC Guide](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html)

---

## Networking in Azure
- Azure uses **Virtual Networks (VNets)**, which are conceptually similar to VPCs.  
- Supports **subnets, route tables, Network Security Groups (NSG), peering, VPNs, and ExpressRoute**.  
- Enables integration with on-premises networks.  
- Documentation: [Azure Virtual Network](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview)

---

## Networking in GCP
- GCP uses **Virtual Private Cloud (VPC)** networks.  
- Features include **subnets (auto or custom), firewall rules, routes, peering, VPN, and Cloud NAT**.  
- Global VPCs allow multi-region deployments with centralized management.  
- Reference: [GCP VPC Documentation](https://cloud.google.com/vpc/docs/vpc)

---

## Security Considerations
- Use **firewalls/security groups** to restrict access.  
- Deploy **private subnets** for sensitive workloads.  
- Encrypt traffic between VPCs and on-premises networks.  
- Monitor and log traffic with cloud-native tools like **CloudWatch, Azure Monitor, or Stackdriver**.  

---

## Resources
- [AWS VPC Documentation](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html)  
- [Azure Virtual Network Docs](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview)  
- [GCP VPC Docs](https://cloud.google.com/vpc/docs/vpc)  
- [Cloud Networking Concepts - Google Cloud](https://cloud.google.com/network)  
- [AWS Networking Deep Dive - YouTube](https://www.youtube.com/watch?v=HfoWLOFryGg)

---

## Conclusion
Cloud networking is essential for designing **scalable, secure, and efficient cloud architectures**. Understanding **VPCs, subnets, routing, and peering** across AWS, Azure, and GCP allows administrators and developers to build robust applications while maintaining performance and security.
