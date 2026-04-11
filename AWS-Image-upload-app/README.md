---
# 🚀 **Image Upload Web App (AWS Elastic Beanstalk + S3 + RDS)**

## 📌 Overview

This project is a cloud-based web application deployed using
AWS Elastic Beanstalk that allows users to upload images.
The application stores images in
Amazon S3 and metadata in
Amazon RDS.

It demonstrates a production-style architecture with load balancing, auto scaling, and secure IAM configuration.

---

## 🧠 Architecture

```plaintext
User → Load Balancer → EC2 (Elastic Beanstalk)
                         ↓
                     Flask App
                     ↓        ↓
                   S3        RDS
```

---

## ⚙️ Services Used

* AWS Elastic Beanstalk — Application deployment & scaling
* Amazon EC2 — Backend compute
* Amazon S3 — Image storage
* Amazon RDS — Database
* AWS Identity and Access Management — Permissions
* Elastic Load Balancing — Traffic distribution
* Auto Scaling — High availability

---

## 🔥 Features

* Upload images via web interface
* Store files securely in S3
* Save metadata in RDS
* Auto scaling & load balancing enabled
* IAM roles for secure access

---

## 🛠️ Tech Stack

* Python (Flask)
* Boto3 (AWS SDK)
* MySQL (RDS)
* Gunicorn (production server)

---

## 📂 Project Structure

```plaintext
image-upload-app/
│
├── app.py
├── requirements.txt
├── Procfile
└── uploads/
```

---

## ⚡ Deployment Steps

### 1. Create S3 Bucket

* Store uploaded images

---

### 2. Create RDS Database

* MySQL database
* Configure security group (allow EC2 access)

---

### 3. Create IAM Role

* Attach:

  * S3 Full Access (for upload)
  * RDS access (via network + credentials)

---

### 4. Deploy using Elastic Beanstalk

* Upload ZIP file containing:

  * `app.py`
  * `requirements.txt`
  * `Procfile`

* Choose:

  * Python platform
  * Enable Load Balancer
  * Enable Auto Scaling

---

### 5. Configure Environment Variables

```plaintext
S3_BUCKET=your-bucket-name
RDS_HOST=your-endpoint
RDS_USER=username
RDS_PASSWORD=password
RDS_DB=database_name
RDS_PORT=3306
AWS_REGION=your-region
```

---

## 🔐 Security

* IAM roles used instead of hardcoding credentials
* Security groups restrict database access
* Public access only for required services

---

## 📸 Output

* Users upload images via UI
* Images stored in S3
* Metadata saved in RDS

---

## 🚀 Future Improvements

* Add authentication (login system)
* Use CloudFront for CDN
* Add file validation & size limits
* Move to serverless architecture

---

## 🧠 Key Learning

* End-to-end AWS deployment
* Real-world architecture design
* Secure IAM usage
* Scaling and load balancing concepts

---
## Video demo
https://youtu.be/Z2iFkCMPP3s

## 📌 Conclusion

This project demonstrates how to build and deploy a scalable, production-ready web application using AWS managed services.

---

