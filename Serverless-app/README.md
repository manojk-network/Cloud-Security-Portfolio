# 🚀 **Serverless Web App (AWS Lambda + API Gateway + S3 + DynamoDB)**

## 📌 Overview

This project is a fully serverless web application where a static frontend communicates with a backend API to store and retrieve data.

Built using:
AWS Lambda,
Amazon API Gateway,
Amazon S3,
Amazon DynamoDB.

---

## 🧠 Architecture

```plaintext
User → S3 (Frontend)
        ↓
   API Gateway (HTTP endpoint)
        ↓
     Lambda (Business logic)
        ↓
   DynamoDB (Storage)
```

---

## ⚙️ Services Used

* Amazon S3 — Hosts frontend (HTML, JS)
* Amazon API Gateway — Exposes REST API
* AWS Lambda — Handles backend logic
* Amazon DynamoDB — Stores data
* AWS Identity and Access Management — Manages permissions

---

## 🔥 Features

* Fully serverless (no EC2 required)
* Scalable and cost-efficient
* Real-time API communication
* Data persistence using DynamoDB
* Secure access using IAM roles

---

## ⚡ Deployment Steps

### 1️⃣ Create DynamoDB Table

* Table Name: `Items-Table`
* Partition Key: `id` (String)

---

### 2️⃣ Create Lambda Function

* Runtime: Python
* Upload backend code
* Attach IAM role with:

  * DynamoDB access
  * CloudWatch logs

---

### 3️⃣ Create API Gateway

* Create HTTP API
* Integrate with Lambda
* Add route:

```plaintext
POST /items
GET /items
```

* Enable CORS
* Deploy API

👉 Copy **Invoke URL**

---

### 4️⃣ Connect Frontend to API (IMPORTANT)

Update your frontend JavaScript:

```javascript
const API_ENDPOINT = "https://your-api-id.execute-api.region.amazonaws.com/prod/items";
```

👉 This is how frontend communicates with backend
👉 NOT configured inside API Gateway

---

### 5️⃣ Deploy Frontend to S3

* Create S3 bucket
* Enable static website hosting
* Upload frontend files
* Add bucket policy for public access

---

## 🔐 Security

* IAM roles used (no hardcoded credentials)
* Least privilege access recommended
* CORS enabled for frontend communication

---

## 📸 Application Flow

1. User enters data in frontend (S3)
2. Frontend sends request to API Gateway
3. API Gateway triggers Lambda
4. Lambda processes request
5. Data stored/retrieved from DynamoDB

---

## 🚀 Future Improvements

* Add authentication (JWT / Cognito)
* Input validation and error handling
* Use CloudFront for CDN
* Logging & monitoring improvements

---

## 🧠 Key Learning

* Serverless architecture design
* API integration between frontend & backend
* AWS service interaction using IAM
* Real-world cloud application flow

---

## 📌 Conclusion

This project demonstrates a complete serverless architecture using AWS services, focusing on scalability, cost efficiency, and real-world API integration.


