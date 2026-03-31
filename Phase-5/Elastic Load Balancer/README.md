# Phase-5 Scaling & Automation

## 1. AWS Load Balancer Project (CLB + ALB with Path Routing)

### Overview
This project demonstrates how to deploy and manage scalable web applications on AWS using EC2 instances and Elastic Load Balancers. It includes both Classic Load Balancer (basic distribution) and Application Load Balancer (advanced path-based routing).
________________________________________
### Architecture
User → Load Balancer → Target Groups → EC2 Instances
________________________________________
### EC2 Setup
Two instances were created:

#### Web Server EC2
•	Installed Apache HTTPD 
•	Hosted web content 
•	Path: /web 

#### App Server EC2
•	Installed Apache HTTPD 
•	Hosted application content 
•	Path: /app 
________________________________________
### Installation Commands
- sudo yum install httpd -y
- sudo systemctl start httpd
- sudo systemctl enable httpd
- cd /var/www/html
________________________________________
### Load Balancer Setup

#### Classic Load Balancer (CLB)
- Simple traffic distribution
- No routing intelligence 
-	Used for basic load balancing demo 
________________________________________
#### Application Load Balancer (ALB)
-	Advanced Layer 7 routing 
-	Path-based routing enabled 
________________________________________
### Target Groups
#### Target Group	Instance
- Web-TG	Web EC2
- App-TG	App EC2
________________________________________
### Listener Rules (ALB)

#### Priority	Path	Target Group
-	/web*	Web-TG
-	/app*	App-TG
________________________________________
### Key Concepts Learned
-	EC2 provisioning
- Apache web server setup 
-	Load balancing concepts 
-	Health checks 
-	Target groups 
-	Listener rules & priority 
-	Path-based routing 
________________________________________
### Testing URLs
- http://<ALB-DNS>/web
- http://<ALB-DNS>/app
________________________________________
### Result

Successfully implemented a scalable AWS architecture with intelligent traffic routing using ALB.

### Video Demo

https://youtu.be/1OmzwlzejQk
