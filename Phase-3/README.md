# Phase 3 - Storage , Database & Security
## AWS Core Services Hands-on (S3, IAM, EBS, RDS, EFS)
## Overview

This repository contains my hands-on implementation of core AWS services including storage, access control, databases, and shared file systems.

## Services Covered

### Amazon S3 + IAM

#### Tasks

- Created S3 bucket

- Uploaded files

- Configured IAM user & permissions

- Hosted static website
   

### Learned: Storage + Access Control

### Amazon EBS (Elastic Block Store)
#### Commands Used
```
lsblk
sudo mkfs -t ext4 /dev/xvdf
sudo mkdir /data
sudo mount /dev/xvdf /data
cd /data
touch file.txt
ls
```
### Learned: Block storage attached to EC2

### Amazon RDS (MySQL)
#### Commands Used
```
sudo yum install -y mysql
mysql -h <RDS-ENDPOINT> -u admin -p
CREATE DATABASE testdb;
USE testdb;
CREATE TABLE users(id INT, name VARCHAR(20));
INSERT INTO users VALUES (1, 'Manu');
SELECT * FROM users;
```
### Learned: Managed database + EC2 connectivity

### Amazon EFS (Elastic File System)
#### Commands Used
```
sudo yum install -y amazon-efs-utils
sudo mkdir -p /efs
sudo mount -t efs -o tls fs-XXXXXXXX:/ /efs
cd /efs
sudo touch test.txt
ls
```

### Multi-instance Test
#### Instance 1
```
sudo touch /efs/from1.txt
```

#### Instance 2
```
ls /efs
✅ Auto-mount Setup
sudo nano /etc/fstab
```
Add:
```
fs-XXXXXXXX:/ /efs efs defaults,_netdev 0 0
```
Test:
```
sudo mount -a
```
### Learned: Shared storage across multiple EC2 instances

## Key Concepts Learned

- Security Groups (NFS 2049, SSH 22, MySQL 3306)

- Difference between S3, EBS, EFS

- EC2 ↔ RDS connectivity

- Multi-instance shared storage

## Challenges Faced

- EFS mount errors

- Security group misconfiguration

- Confusion between SSH vs NFS

- Path mismatch issues

### Solved by debugging networking + permissions step-by-step



## Demo Videos

- S3 + IAM → https://youtu.be/WZlo6wn_EIM

- EBS → https://youtu.be/pIYNWMaj9yY

- RDS → https://youtu.be/K9_5WjGTaFI

- EFS → https://youtu.be/fRd9OJFDVC4

## Outcome

- Built strong foundation in:

- Cloud storage

- Access control

- Databases

- Shared architectures
