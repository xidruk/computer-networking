# DHCP (Dynamic Host Configuration Protocol)

## What is DHCP?
DHCP stands for Dynamic Host Configuration Protocol. It is a network management protocol used to automatically assign IP addresses and other network configuration parameters to devices on a network, allowing them to communicate efficiently.

## How Does DHCP Work?
1. **Discovery:** When a device connects to a network, it sends a DHCPDISCOVER message to find available DHCP servers.
2. **Offer:** DHCP servers respond with a DHCPOFFER message, offering an IP address and configuration details.
3. **Request:** The device replies with a DHCPREQUEST message, indicating which offer it accepts.
4. **Acknowledgment:** The server sends a DHCPACK message to confirm the assignment and provide the device with its IP address and configuration.

## Benefits of DHCP
- Simplifies network administration
- Reduces configuration errors
- Allows devices to move between networks easily

## Further Reading
- [DHCP - GeeksforGeeks](https://www.geeksforgeeks.org/dhcp-dynamic-host-configuration-protocol/)
