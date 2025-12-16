# AWS Backend Infrastructure - CellCase Pro

## ✅ **COMPLETED INFRASTRUCTURE**

### 🗄️ **DynamoDB Database**
- **Table Name**: `cellcase-pro-categories`
- **Region**: `us-east-1`
- **Primary Key**: `categoryId` (String)
- **Billing Mode**: Pay-per-request (serverless)
- **Items**: 5 active categories
- **ARN**: `arn:aws:dynamodb:us-east-1:067847735126:table/cellcase-pro-categories`

#### Category Schema:
```json
{
  "categoryId": "string",        // Primary key
  "name": "string",             // Display name
  "description": "string",      // Category description
  "slug": "string",             // URL-friendly name
  "imageUrl": "string",         // Image path
  "isActive": "boolean",        // Visibility status
  "displayOrder": "number",     // Sort order
  "createdAt": "string",        // ISO timestamp
  "updatedAt": "string"         // ISO timestamp
}
```

### 🚀 **Lambda Function**
- **Function Name**: `cellcase-get-categories`
- **Runtime**: Node.js 18.x
- **Handler**: `getCategories.handler`
- **Role**: `cellcase-lambda-role`
- **Memory**: 128 MB
- **Timeout**: 3 seconds
- **ARN**: `arn:aws:lambda:us-east-1:067847735126:function:cellcase-get-categories`

#### Dependencies:
- `@aws-sdk/client-dynamodb`: ^3.0.0
- `@aws-sdk/lib-dynamodb`: ^3.0.0

### 🌐 **API Gateway**
- **API Name**: `cellcase-api`
- **API ID**: `ynrbuyia43`
- **Type**: REST API (Edge-optimized)
- **Base URL**: `https://ynrbuyia43.execute-api.us-east-1.amazonaws.com`
- **Stage**: `prod`

#### Endpoints:
| Method | Path | Description | Lambda Function |
|--------|------|-------------|----------------|
| GET | `/categories` | Get all active categories | cellcase-get-categories |
| OPTIONS | `/categories` | CORS preflight | cellcase-get-categories |

#### Live Endpoint:
```
https://ynrbuyia43.execute-api.us-east-1.amazonaws.com/prod/categories
```

### 🔐 **IAM Role & Permissions**
- **Role Name**: `cellcase-lambda-role`
- **Policies**:
  - `AWSLambdaBasicExecutionRole` (CloudWatch logs)
  - `AmazonDynamoDBReadOnlyAccess` (DynamoDB read)
- **Trust Policy**: Lambda service

## 📊 **API Response Format**

### Success Response:
```json
{
  "success": true,
  "data": [
    {
      "categoryId": "iphone-cases",
      "name": "iPhone Cases",
      "description": "Premium protective cases for all iPhone models",
      "slug": "iphone-cases",
      "imageUrl": "/images/categories/iphone-cases.jpg",
      "isActive": true,
      "displayOrder": 1,
      "createdAt": "2025-12-15T21:41:22Z",
      "updatedAt": "2025-12-15T21:41:22Z"
    }
  ],
  "count": 5
}
```

### Error Response:
```json
{
  "success": false,
  "error": "Internal server error",
  "message": "Error details"
}
```

## 🧪 **Testing Commands**

### Test API Endpoint:
```powershell
Invoke-RestMethod -Uri "https://ynrbuyia43.execute-api.us-east-1.amazonaws.com/prod/categories" -Method GET
```

### Test DynamoDB Direct:
```powershell
aws dynamodb scan --table-name cellcase-pro-categories --region us-east-1
```

### Check Lambda Logs:
```powershell
aws logs describe-log-groups --log-group-name-prefix "/aws/lambda/cellcase-get-categories" --region us-east-1
```

## 💰 **Cost Analysis**
All services are within AWS Free Tier limits:

| Service | Free Tier | Current Usage | Monthly Cost |
|---------|-----------|---------------|--------------|
| DynamoDB | 25 GB + 25 RCU/WCU | ~5KB, <1 RCU | $0.00 |
| Lambda | 1M requests + 400K GB-sec | <100 requests | $0.00 |
| API Gateway | 1M API calls | <100 calls | $0.00 |
| CloudWatch | 10 GB logs | <1 MB | $0.00 |
| **TOTAL** | | | **$0.00** |

## 🔧 **Management Commands**

### Update Lambda Code:
```powershell
cd backend/lambda
npm install
Compress-Archive -Path * -DestinationPath getCategories.zip -Force
aws lambda update-function-code --function-name cellcase-get-categories --zip-file fileb://getCategories.zip --region us-east-1
```

### Add New Category:
```powershell
aws dynamodb put-item --table-name cellcase-pro-categories --item file://new-category.json --region us-east-1
```

### Deploy API Changes:
```powershell
aws apigateway create-deployment --rest-api-id ynrbuyia43 --stage-name prod --region us-east-1
```

## 🚀 **Frontend Integration**

### React API Call Example:
```javascript
const API_BASE_URL = 'https://ynrbuyia43.execute-api.us-east-1.amazonaws.com/prod';

const fetchCategories = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/categories`);
    const data = await response.json();
    
    if (data.success) {
      return data.data; // Array of categories
    } else {
      throw new Error(data.error);
    }
  } catch (error) {
    console.error('Failed to fetch categories:', error);
    return [];
  }
};
```

## 📋 **Next Steps**
1. ✅ Categories API - **COMPLETED**
2. 🔄 Products API - Create Lambda + DynamoDB table
3. 🔄 Cart API - Session/user-based cart management
4. 🔄 Orders API - Order processing and storage
5. 🔄 User Authentication - AWS Cognito integration
6. 🔄 Image Storage - S3 bucket for product images
7. 🔄 Payment Processing - Stripe/PayPal integration

## 🛡️ **Security Notes**
- ✅ CORS enabled for GitHub Pages domain
- ✅ IAM roles follow principle of least privilege  
- ✅ No hardcoded credentials in code
- ✅ API Gateway throttling enabled
- ✅ CloudWatch monitoring active