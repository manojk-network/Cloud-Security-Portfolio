# AWS Phase 4 – DNS, CDN & Messaging (Route 53, CloudFront, SNS, SQS, CloudWatch)

## Overview

- This project demonstrates event-driven architecture, messaging, monitoring, and content delivery using AWS.
Services used include SNS, SQS, CloudWatch, CloudFront, and Route 53.
It is a typical real-world cloud setup for scalable and monitored web applications.

## Architecture

- SNS (Simple Notification Service) → Sends messages
- SQS (Simple Queue Service) → Stores messages
- CloudWatch → Monitors metrics & triggers alerts
- EC2 → Generates CPU metrics 
- Route 53 → Manages DNS for domain names
- CloudFront → Distributes content globally using CDN

## Services Used

- Amazon SNS
- Amazon SQS
- Amazon CloudWatch
- Amazon EC2
- Amazon Route 53
- Amazon CloudFront
  
## Implementation Steps

 ### Messaging & Monitoring
- Create SNS Topic → publish messages
- Create SQS Queue → store messages
- Connect SNS → SQS via subscription
- Configure Access Policy to allow SNS → SQS
- Test message flow: publish & pull messages
- Monitor SQS metrics in CloudWatch
- Create CPU alarm on EC2

### DNS (Route 53) 
- Route 53 manages domain names and routing traffic
- Can create hosted zones for domains
- Supports A/AAAA/CNAME records for web servers
- Allows health checks to route traffic only to healthy instances
  
### CDN (CloudFront) 
- CloudFront is a Content Delivery Network
- Caches your web content at edge locations globally
- Reduces latency for end-users
- Connects to S3, EC2, or other origins
- Supports HTTPS, caching policies, and access control
  
### Security Concepts Applied
- Resource-based policies (SNS → SQS)
- IAM vs Policy vs Security Groups
- Controlled access between services
- CloudFront origin access can secure content
  
### Testing
- SNS → SQS message delivery verified
- Message polling from SQS tested
- CloudWatch CPU alarm triggered
  
## Key Learnings
- Difference between SNS (push) and SQS (queue)
- How event-driven systems work
- Monitoring using CloudWatch alarms
- Purpose of Route 53 (DNS) and CloudFront (CDN)
- Basic setup for global content delivery
  
## Cleanup
- Delete SNS topics & subscriptions
- Delete SQS queue
- Remove CloudWatch alarms
- Terminate EC2 instance
- Release Elastic IP (if created)
  
## Conclusion

Phase 4 demonstrates:

- Messaging & event-driven systems (SNS + SQS)
- Monitoring & alerting (CloudWatch)
- Domain management & global content distribution (Route 53 + CloudFront)

#### This is a complete DNS, CDN, and messaging setup, ready for real-world cloud architecture practice.

## Video Demo
https://youtu.be/bHtepb673n0
