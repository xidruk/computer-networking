# Subnetting and Subnet Masks

## What is Subnetting?
Subnetting is the practice of dividing a network into smaller logical networks called subnets. It's a fundamental concept in IP networking that allows for better network management, improved security, and more efficient use of IP address space.

## Why Do We Need Subnetting?
1. **Network Management:** Easier to manage smaller, organized networks
2. **Security:** Isolate network segments and control traffic flow
3. **Efficient Resource Use:** Better allocation of IP addresses
4. **Reduced Network Traffic:** Broadcast domains are smaller
5. **Performance:** Better network performance through traffic isolation

## Understanding Subnet Masks
A subnet mask is a 32-bit number that masks an IP address and divides it into network and host portions. It determines which part of the IP address identifies the network and which part identifies the host.

### Common Subnet Masks
| Subnet Mask | CIDR | Binary | Usable Hosts |
|------------|------|--------|--------------|
| 255.0.0.0 | /8 | 11111111.00000000.00000000.00000000 | 16,777,214 |
| 255.255.0.0 | /16 | 11111111.11111111.00000000.00000000 | 65,534 |
| 255.255.255.0 | /24 | 11111111.11111111.11111111.00000000 | 254 |
| 255.255.255.128 | /25 | 11111111.11111111.11111111.10000000 | 126 |
| 255.255.255.192 | /26 | 11111111.11111111.11111111.11000000 | 62 |
| 255.255.255.224 | /27 | 11111111.11111111.11111111.11100000 | 30 |

## How Subnetting Works
When a host wants to communicate with another IP address, it uses the subnet mask to determine if the destination is on the same network:

1. The host performs a bitwise AND operation between:
   - Its own IP address and subnet mask
   - The destination IP address and subnet mask
2. If the results match, the destination is on the same network
3. If they don't match, the packet must be sent to a gateway

### Example:
```
Host IP:     192.168.1.100
Subnet Mask: 255.255.255.0
Target IP:   192.168.1.200

Calculation:
192.168.1.100 AND 255.255.255.0 = 192.168.1.0
192.168.1.200 AND 255.255.255.0 = 192.168.1.0

Result: Same network (192.168.1.0)
```

## Calculating Subnets
To calculate subnets, follow these steps:

1. Determine how many subnets you need
2. Determine how many hosts per subnet you need
3. Choose an appropriate subnet mask
4. Calculate the network, broadcast, and usable host ranges

### Formula:
- Number of subnets = 2^n (where n is the number of borrowed bits)
- Number of hosts per subnet = 2^m - 2 (where m is the number of host bits)

## Real-Life Example: Corporate Network
Consider a company with three departments:
- Marketing (needs 50 hosts)
- Development (needs 100 hosts)
- Administration (needs 25 hosts)

Solution:
```
Network: 192.168.0.0/24
Subnet Division:
- Marketing: 192.168.0.0/26 (62 hosts)
- Development: 192.168.0.64/25 (126 hosts)
- Administration: 192.168.0.192/27 (30 hosts)
```

## Subnet Planning Steps
1. **Inventory:** List all network requirements
2. **Address Space:** Choose appropriate private IP range
3. **Sizing:** Determine subnet sizes based on host counts
4. **Assignment:** Allocate subnets to network segments
5. **Documentation:** Document all subnet information

## Benefits of Proper Subnetting
- Reduced network congestion
- Improved security through segmentation
- Easier network management
- Better resource utilization
- Simplified troubleshooting

## Common Subnetting Mistakes to Avoid
1. Not planning for future growth
2. Incorrect subnet mask calculations
3. Overlapping subnets
4. Insufficient documentation
5. Not considering broadcast domain size

## Online Subnet Calculators
- [Subnet Calculator by Calculator.net](https://www.calculator.net/ip-subnet-calculator.html)
- [SubnetIPv4.com](https://subnetipv4.com/)
- [IP Subnet Calculator by Site24x7](https://www.site24x7.com/tools/ipv4-subnet-calculator.html)

## Practical Exercises
1. **Basic Subnetting:**
   ```
   Network: 192.168.1.0/24
   Requirement: Create 4 equal subnets
   Solution:
   - 192.168.1.0/26 (0-63)
   - 192.168.1.64/26 (64-127)
   - 192.168.1.128/26 (128-191)
   - 192.168.1.192/26 (192-255)
   ```

2. **Variable Length Subnet Masking (VLSM):**
   ```
   Network: 172.16.0.0/16
   Requirements:
   - Subnet A: 1000 hosts
   - Subnet B: 500 hosts
   - Subnet C: 250 hosts
   Solution:
   - A: 172.16.0.0/22 (1022 hosts)
   - B: 172.16.4.0/23 (510 hosts)
   - C: 172.16.6.0/24 (254 hosts)
   ```

## Best Practices
1. Always document your subnetting scheme
2. Plan for future growth
3. Use VLSM when appropriate
4. Keep broadcast domains reasonably sized
5. Consider security boundaries
6. Maintain consistent naming conventions

## Troubleshooting Subnet Issues
1. Verify subnet mask configuration
2. Check for duplicate IP addresses
3. Confirm router configurations
4. Test connectivity between subnets
5. Review routing tables

## Further Reading
- [Subnetting - Wikipedia](https://en.wikipedia.org/wiki/Subnetwork)
- [Practical Subnetting - GeeksforGeeks](https://www.geeksforgeeks.org/subnetting-in-computer-network/)
- [Cisco's Guide to Subnetting](https://www.cisco.com/c/en/us/support/docs/ip/routing-information-protocol-rip/13788-3.html)