# Phase 2 – EC2, NAT & Security Groups

## Objective
In Phase 2, we deployed **compute resources** on AWS and configured network security. This phase focuses on connecting public and private EC2 instances securely and enabling internet access for the private subnet via NAT.

---

## Services Used

| Service | Purpose |
|---------|---------|
| Amazon EC2 | Launched public and private instances for testing and workload deployment |
| AWS Security Groups | Configured firewall rules to control inbound/outbound traffic for each instance |
| Amazon NAT Gateway | Enabled private subnet internet access without exposing instances publicly |
| Amazon Elastic IP | Assigned static IP to public EC2 instance for stable connectivity |
| Terminal / Connectivity Test | Verified SSH access and internet connectivity from private EC2 |

---

## Steps Performed

1. Created **Security Groups** for public and private EC2:
   - Public SG: allow SSH (port 22) and HTTP (port 80) from anywhere
   - Private SG: allow SSH only from Public EC2 SG
2. Launched **Public EC2** in public subnet with **Elastic IP**
3. Launched **Private EC2** in private subnet with **no public IP**
4. Created **NAT Gateway** in public subnet and updated private route table
5. Verified **connectivity**:
   - SSH from local → public EC2
   - SSH from public EC2 → private EC2
   - Internet access from private EC2 via NAT (`curl google.com`)


---
## Youtube Video

	
https://youtu.be/7V2r4g9UfNk

---

## Outcome

- Successfully deployed **public and private EC2 instances** with proper firewall rules
- Enabled **internet access** for private EC2 via NAT
- Verified **secure connectivity** between public and private instances
- Foundation ready for **Phase 3 – IAM, S3, and storage services**
