# Built a complete AWS Auto Scaling project from scratch.
________________________________________
## What’s covered
-	Launch Template (EC2 setup blueprint) 
-	Auto Scaling Group (manages instances) 
-	Target Tracking Policy (auto scaling logic) 
-	User Data script (auto web server setup) 
-	Stress testing (to trigger scaling) 
________________________________________
## How it works
- High CPU → New EC2 instance created
- Low CPU → Extra instance terminated
________________________________________
## Commands used
- sudo su
- yum install -y stress
- stress --cpu 1
________________________________________
## Key learning
- AWS scales based on average CPU, not one instance
- Scaling needs time + sustained load
- Target tracking makes scaling automatic

https://youtu.be/d-IfysjMdB8?si=fPMHbBJFNuWEm29f

