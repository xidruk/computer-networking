# Practicing Subnetting

Subnetting is a skill — and like all skills, it improves with practice. This section contains a collection of exercises designed to test your understanding of subnet masks, FLSM (Fixed Length Subnet Masking), and VLSM (Variable Length Subnet Masking).

Each exercise includes a specific network requirement and asks you to plan and calculate the appropriate subnets. No solutions are provided — you’ll need to think them through and verify your answers.

---

## 🧭 Table of Exercises

| ID | Complexity | Needed / Requirements | Type | Link |
|----|-------------|-----------------------|------|------|
| 1  | Easy | Divide 192.168.10.0/24 into 4 equal subnets | FLSM | [Exercise 1](#exercise-1) |
| 2  | Easy | Create 8 subnets for 8 departments from 10.0.0.0/24 | FLSM | [Exercise 2](#exercise-2) |
| 3  | Medium | A company needs subnets for 30, 20, 10, and 2 hosts | VLSM | [Exercise 3](#exercise-3) |
| 4  | Medium | You have 172.16.0.0/16 and need 10 subnets of 500 hosts each | FLSM | [Exercise 4](#exercise-4) |
| 5  | Medium | Design subnets for a branch office needing 3 networks: 60, 25, and 10 hosts | VLSM | [Exercise 5](#exercise-5) |
| 6  | Hard | Given 192.168.100.0/24, plan subnets for 6 departments with 100, 50, 25, 10, 5, and 2 hosts | VLSM | [Exercise 6](#exercise-6) |
| 7  | Hard | Subnet 10.1.0.0/16 to create 20 subnets with at least 2000 hosts each | FLSM | [Exercise 7](#exercise-7) |
| 8  | Hard | From 192.168.0.0/22, create subnets for departments needing 100, 50, 30, and 10 hosts | VLSM | [Exercise 8](#exercise-8) |
| 9  | Expert | You manage an ISP block 203.0.113.0/24 — allocate subnets for 4 clients with 80, 40, 20, and 10 hosts | VLSM | [Exercise 9](#exercise-9) |
| 10 | Expert | From 172.20.0.0/20, design a VLSM plan for a campus with varying host sizes (500, 300, 200, 100, 50) | VLSM | [Exercise 10](#exercise-10) |

---

## 🧩 Exercises

### Exercise 1
**Network:** 192.168.10.0/24  
**Goal:** Divide the network into **4 equal subnets**.  
**Type:** FLSM  
**Hint:** Each subnet must have the same number of hosts.

---

### Exercise 2
**Network:** 10.0.0.0/24  
**Goal:** Create **8 subnets**, one for each department.  
**Type:** FLSM  
**Hint:** Focus on how many bits you need to borrow to create 8 subnets.

---

### Exercise 3
**Scenario:** A company requires subnets for departments with **30, 20, 10, and 2 hosts**.  
**Base Network:** 192.168.50.0/24  
**Type:** VLSM  
**Hint:** Start with the largest subnet and allocate downward.

---

### Exercise 4
**Network:** 172.16.0.0/16  
**Goal:** Create **10 subnets**, each supporting **at least 500 hosts**.  
**Type:** FLSM  
**Hint:** Determine how many host bits to reserve for 500 usable IPs.

---

### Exercise 5
**Scenario:** A branch office needs **3 subnets** supporting **60, 25, and 10 hosts**.  
**Base Network:** 10.10.10.0/24  
**Type:** VLSM  
**Hint:** Optimize address usage — avoid wasting IPs on smaller networks.

---

### Exercise 6
**Scenario:** You’re given 192.168.100.0/24 and need to create subnets for **100, 50, 25, 10, 5, and 2 hosts**.  
**Type:** VLSM  
**Hint:** Remember — each subnet must have at least 2 addresses reserved for network and broadcast.

---

### Exercise 7
**Network:** 10.1.0.0/16  
**Goal:** Create **20 subnets**, each capable of supporting **at least 2000 hosts**.  
**Type:** FLSM  
**Hint:** Think about how many bits to borrow from the host portion.

---

### Exercise 8
**Network:** 192.168.0.0/22  
**Goal:** Create subnets for departments needing **100, 50, 30, and 10 hosts**.  
**Type:** VLSM  
**Hint:** Try fitting these subnets efficiently into the /22 range without overlaps.

---

### Exercise 9
**Scenario:** You manage an ISP block **203.0.113.0/24**.  
**Goal:** Allocate subnets for **4 clients** needing **80, 40, 20, and 10 hosts**.  
**Type:** VLSM  
**Hint:** Work top-down — assign from the largest client to the smallest.

---

### Exercise 10
**Scenario:** A campus network uses **172.20.0.0/20**.  
**Goal:** Design a **VLSM plan** for five departments needing **500, 300, 200, 100, and 50 hosts**.  
**Type:** VLSM  
**Hint:** Efficiently distribute the address space; minimize wasted IPs.

---

## 📘 Further Practice

- [What is a Subnet Mask?](subnet-mask.md)  
- [Subnetting Explained](subnetting.md)  
- [Routers](routers.md)  
- [Routing Tables](routing_tables.md)

---

Happy subnetting — may your CIDR blocks be ever efficient!
