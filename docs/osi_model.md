# OSI Model (Open Systems Interconnection)

![OSI Model](../static/osi.avif)

## History of the OSI Model
The OSI (Open Systems Interconnection) model was developed by the International Organization for Standardization (ISO) in the late 1970s and published in 1984. Before the OSI model, networking protocols were proprietary and incompatible, making it difficult for devices from different vendors to communicate. The OSI model was created to standardize networking and promote interoperability between systems.

## Why Do We Need the OSI Model?
- Provides a universal set of standards for networking
- Enables interoperability between different hardware and software
- Simplifies network design, troubleshooting, and development
- Helps understand and isolate network issues by dividing functions into layers

## The Seven Layers of the OSI Model
The OSI model consists of seven layers, each with specific functions:

| Layer | Number | Function |
|-------|--------|----------|
| Physical | 1 | Transmits raw bit streams over physical medium (cables, radio, etc.) |
| Data Link | 2 | Handles error detection/correction, framing, and MAC addressing |
| Network | 3 | Manages logical addressing and routing (IP, routers) |
| Transport | 4 | Provides reliable data transfer, flow control, and error recovery (TCP, UDP) |
| Session | 5 | Manages sessions and controls dialog between applications |
| Presentation | 6 | Translates, encrypts, and compresses data |
| Application | 7 | Provides network services to end-user applications (HTTP, FTP, SMTP) |

### Layer Details
**1. Physical Layer:**
	- Deals with hardware transmission of raw data bits
	- Examples: Ethernet cables, fiber optics, Wi-Fi signals

**2. Data Link Layer:**
	- Responsible for node-to-node data transfer
	- Handles MAC addresses, error detection, and correction
	- Examples: Switches, network cards

**3. Network Layer:**
	- Handles routing and forwarding of data packets
	- Manages logical addressing (IP addresses)
	- Examples: Routers, Layer 3 switches

**4. Transport Layer:**
	- Ensures reliable data transfer between hosts
	- Provides flow control, segmentation, and error recovery
	- Examples: TCP, UDP

**5. Session Layer:**
	- Manages sessions and controls dialog between applications
	- Responsible for establishing, maintaining, and terminating connections

**6. Presentation Layer:**
	- Translates data formats, encrypts, and compresses data
	- Examples: SSL/TLS, JPEG, MPEG

**7. Application Layer:**
	- Provides network services directly to user applications
	- Examples: HTTP, FTP, SMTP, DNS

## Summary
The OSI model is essential for understanding how networks operate, troubleshooting issues, and designing interoperable systems. Each layer has a distinct role, and together they enable seamless communication across diverse devices and platforms.