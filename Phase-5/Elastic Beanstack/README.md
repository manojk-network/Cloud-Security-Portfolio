# AWS Elastic Beanstalk Web App Deployment
## Overview
This project demonstrates how to deploy a web application using AWS Elastic Beanstalk, a Platform as a Service (PaaS) that automates infrastructure provisioning, deployment, scaling, and monitoring.
The goal of this project is to understand end-to-end application deployment without manually managing servers.
________________________________________
## Key Concepts Covered
```
•	Platform as a Service (PaaS) 
•	Environment provisioning 
•	IAM Roles and permissions 
•	Networking (VPC, Public IP) 
•	Compute provisioning using Amazon EC2 
•	Storage basics using Amazon EBS 
•	Monitoring and alarms 
•	Application lifecycle (deploy → monitor → terminate)
```
________________________________________
## Architecture
User → Browser → Elastic Beanstalk → EC2 Instance → Application
________________________________________
## Deployment Steps
```
1. Create Application
•	Navigate to Elastic Beanstalk 
•	Click Create Application 
•	Define application and environment name 
________________________________________
2. Select Environment
•	Choose Web Server Environment 
•	Select platform (Python / Node.js / etc.) 
________________________________________
3. Upload Application Code
•	Upload ZIP file containing application files 
•	Ensure files are at root (no nested folder) 
________________________________________
4. Configure Service Access
•	Create/select IAM Role 
•	Grant permissions for: 
o	EC2 
o	Logging 
o	Resource management 
________________________________________
5. Configure Networking
•	Select default VPC 
•	Enable Public IP for internet access 
•	Choose availability zones 
________________________________________
6. Database Configuration (Optional)
•	Disabled for this project 
•	Can be enabled using Amazon RDS for persistent storage 
________________________________________
7. Instance & Scaling Configuration
•	Instance type: t3.micro 
•	Scaling: Single instance (for learning) 
•	Security group: Allow HTTP (port 80) 
________________________________________
8. Monitoring & Logging
•	Enable basic monitoring 
•	Configure alarms for CPU/health metrics 
________________________________________
9. Deploy Application
•	Review configuration 
•	Click Create Environment 
•	Wait for deployment 
________________________________________
10. Access Application
•	Use generated domain URL from Elastic Beanstalk 
________________________________________
11. Cleanup (Important)
•	Terminate environment 
•	Delete application to avoid AWS charges
```
________________________________________
## Monitoring & Alerts
```
•	Cloud monitoring tracks: 
o	CPU usage 
o	Instance health 
•	Alarms trigger alerts when thresholds are exceeded
```
________________________________________
## Security Considerations
```
•	IAM Roles used instead of hardcoded credentials 
•	Security groups restrict access to necessary ports 
•	No sensitive data stored in code
```
________________________________________
## Learning Outcomes
```
By completing this project, you will understand:
•	How cloud platforms abstract infrastructure 
•	How applications are deployed in production-like environments 
•	How AWS services interact behind the scenes 
•	The difference between EC2 (IaaS) and Elastic Beanstalk (PaaS)
```
________________________________________
## Key Takeaway
Elastic Beanstalk allows developers to focus on code while AWS manages infrastructure, scaling, and deployment.

## Video Demo
https://youtu.be/nnSU3cRv1dg 

