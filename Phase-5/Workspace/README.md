# ☁️ Amazon WorkSpaces Cloud Desktop Lab

## 📌 Project Overview
This project demonstrates how to deploy and configure a cloud-based virtual desktop using Amazon WorkSpaces. It simulates a real-world enterprise setup where users access secure desktops from anywhere using AWS infrastructure.

---

## 🎯 Objective
- Create a cloud virtual desktop environment
- Configure directory-based user authentication
- Assign WorkSpaces to users
- Understand networking, bundles, and security configuration
- Access a remote desktop using WorkSpaces client

---

## 🏗️ Architecture Overview

- Identity Layer → AWS Managed Microsoft AD (Directory Service)
- Network Layer → VPC + Subnets + Availability Zones
- Compute Layer → WorkSpaces virtual desktop
- Access Layer → WorkSpaces Client + Registration Code

---

## ⚙️ Services Used

- Amazon WorkSpaces
- AWS Directory Service (Managed Microsoft AD)
- Amazon VPC
- IAM (basic access permissions)
- EC2 (underlying infrastructure conceptually)

---

## 🚀 Step-by-Step Implementation

### 1. Create Directory
- Choose AWS Managed Microsoft AD
- Configure:
  - Organization name
  - DNS name
  - Admin password

👉 Purpose: Establish identity system for users

---

### 2. Configure Networking
- Select VPC
- Choose subnets in different Availability Zones

👉 Purpose: Ensure secure and highly available network environment

---

### 3. Create Users
- Add users inside directory service

👉 Purpose: Define login identities for WorkSpaces access

---

### 4. Create WorkSpace
- Select directory user
- Choose bundle (OS + CPU + RAM + apps)
- Select running mode (AlwaysOn / AutoStop)
- Enable encryption (Root + User volumes)

👉 Purpose: Provision virtual desktop for the user

---

### 5. Launch & Access
- Install WorkSpaces client
- Enter registration code
- Login using directory credentials

👉 Purpose: Access cloud desktop from local machine

---

## 📦 Key Concepts Learned

- **Directory Service** → Authentication system
- **Bundle** → Pre-configured desktop (OS + resources)
- **Running Mode** → Cost vs availability control
- **VPC/Subnet** → Secure network placement
- **Availability Zones** → High availability design
- **User Volume / Root Volume** → Storage separation

---

## 🧠 Architecture Flow
User → Directory Login → WorkSpace Provision → Network (VPC/Subnet) → Cloud Desktop Access


---

## 🔐 Security Features

- Encrypted root and user volumes
- Directory-based authentication
- Isolated VPC networking
- Controlled access via registration code

---

## 📌 Outcome

Successfully deployed a fully functional cloud desktop environment accessible from anywhere using AWS WorkSpaces.

---



