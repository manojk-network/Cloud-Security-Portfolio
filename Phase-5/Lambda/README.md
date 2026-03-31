# 🚀 AWS Serverless API Project (Lambda + API Gateway)
•	API is scalable and efficient 
•	Lambda executes only when triggered

## 📌 Project Overview

This project demonstrates how to build a **serverless API** using:

- AWS Lambda (compute)
- API Gateway (public access)
- Proxy Resource (dynamic routing)

---

## 🧠 Architecture

User → API Gateway → Lambda → Response

---

## 🎯 Goal

Create a public API URL that triggers a Lambda function and returns a response.

---

## 🧱 Step-by-Step Implementation

### 1️⃣ Create Lambda Function
```
- Go to AWS Lambda
- Click **Create function**
- Choose **Author from scratch**
- Runtime: Python 3.10
```
#### Code:
```python
def lambda_handler(event, context):
    return {
        "statusCode": 200,
        "body": "Hello from Lambda API"
    }
```
👉 Deploy the function
________________________________________
### Test Lambda
•	Click Test 
•	Ensure function returns response 
________________________________________
### Create API Gateway
```
•	Go to API Gateway 
•	Create REST API 
👉 Why?
API Gateway provides a public URL to access Lambda.
```
_______________________________________
### Create Proxy Resource
```
•	Go to Resources 
•	Click Create Resource 
•	Enable Proxy Resource ({proxy+}) 
👉 Why?
Allows handling all routes dynamically
```
________________________________________
### Create Method
```
•	Select /{proxy+} 
•	Click Create Method 
•	Choose ANY 
👉 Why?
Accept all request types (GET, POST, etc.)
```
________________________________________
### Connect Lambda
```
•	Integration type → Lambda 
•	Enable Lambda Proxy Integration 
•	Select Lambda function 
👉 Why?
Pass full request to Lambda
```
________________________________________
### Deploy API
```
•	Click Deploy API 
•	Create Stage → dev 
👉 Why?
Makes API live and generates URL
```
________________________________________
### Test API
```
Example URL:
https://xxxx.execute-api.region.amazonaws.com/dev/test
```
👉 Output:
Hello from Lambda API
________________________________________
### Common Mistakes
```
❌ Opening only /dev
✔ Must add path → /dev/test
________________________________________
❌ Not deploying API
✔ Always deploy after changes
________________________________________
❌ Wrong Lambda integration
✔ Ensure method is connected to Lambda
```
________________________________________
🧠 Key Concepts Learned
```
•	Lambda = runs code without servers 
•	API Gateway = public entry point 
•	Resource = URL path 
•	Method = request type + Lambda connection 
•	Proxy = handles all routes 
•	Stage = API environment (dev/prod)
```
________________________________________
🔥 Final Flow
User → API Gateway → Resource → Method → Lambda → Response
________________________________________
🏁 Conclusion
This project demonstrates a complete serverless architecture where:
•	No server management is required 


