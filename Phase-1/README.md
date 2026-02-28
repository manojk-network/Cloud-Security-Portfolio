# Phase 1 – VPC & Networking Basics

## Objective
In Phase 1, we set up the **foundational network infrastructure** for our cloud environment. This includes creating a Virtual Private Cloud (VPC), subnets, route tables, and an Internet Gateway to allow public internet access.

---

## Services Used

| Service | Purpose |
|---------|---------|
| Amazon VPC | Created a secure virtual network for our cloud resources |
| AWS Subnets | Defined public and private subnets for resource segmentation |
| AWS Route Tables | Managed routing between subnets and the Internet Gateway |
| Amazon Internet Gateway | Enabled internet access for public subnet |

---

## Steps Performed

1. Created a **VPC** with CIDR block `10.0.0.0/16`.
2. Created **two subnets**:
   - Public subnet → 10.0.1.0/24
   - Private subnet → 10.0.2.0/24
3. Created a **route table** for the public subnet:
   - Route `0.0.0.0/0` → attached **Internet Gateway**
4. Attached the **Internet Gateway** to the VPC.
5. Associated the **public subnet** with the route table.

---

## Architecture Diagram

![Phase 1 Architecture](https://github.com/manojk-network/Cloud-Security-Portfolio/blob/81e5dab4dd2e40613f8d07fcf23eee47451124eb/Phase-1/Screenshots/Resource%20Map.png)

---

## Screenshots

### VPC Overview
![VPC](https://github.com/manojk-network/Cloud-Security-Portfolio/blob/81e5dab4dd2e40613f8d07fcf23eee47451124eb/Phase-1/Screenshots/VPC%20Overview.png)

### Subnets
![Subnets](https://github.com/manojk-network/Cloud-Security-Portfolio/blob/81e5dab4dd2e40613f8d07fcf23eee47451124eb/Phase-1/Screenshots/Private%20Subnet.png)

![Subnets](https://github.com/manojk-network/Cloud-Security-Portfolio/blob/81e5dab4dd2e40613f8d07fcf23eee47451124eb/Phase-1/Screenshots/Public%20Subnet.png)

### Route Table
![Route Table](
https://github.com/manojk-network/Cloud-Security-Portfolio/blob/81e5dab4dd2e40613f8d07fcf23eee47451124eb/Phase-1/Screenshots/Routes%20Tab.png
)

### Internet Gateway
![Internet Gateway](https://github.com/manojk-network/Cloud-Security-Portfolio/blob/81e5dab4dd2e40613f8d07fcf23eee47451124eb/Phase-1/Screenshots/IGW.png)

---

## Youtube demo

https://youtu.be/2hMN2ndtVUM

## Outcome

- Successfully created a **secure VPC** with public and private subnets.  
- Public subnet has **internet access** via Internet Gateway.  
- This foundational network setup will be used in **Phase 2** for deploying EC2 instances and testing connectivity.

---

## Notes / Learnings

- Always plan CIDR blocks **carefully** to avoid conflicts.  
- Public subnets require an Internet Gateway; private subnets require NAT (next phase).  
- Route tables must be **associated correctly** with subnets to work.  
