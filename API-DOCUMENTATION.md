# API Documentation - CellCase Pro Backend

## Base URL
```
https://ynrbuyia43.execute-api.us-east-1.amazonaws.com/prod
```

## Authentication
Currently no authentication required. All endpoints are public.

## Headers
All requests should include:
```
Content-Type: application/json
```

## CORS
CORS is enabled for:
- Origin: `https://awanraf-lgtm.github.io`
- Methods: `GET, OPTIONS`
- Headers: `Content-Type, Authorization`

---

## Categories API

### GET /categories
Retrieve all active product categories.

**Endpoint:** `GET /categories`

**Parameters:** None

**Response:**
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
    },
    {
      "categoryId": "samsung-cases",
      "name": "Samsung Cases", 
      "description": "Durable cases for Samsung Galaxy series",
      "slug": "samsung-cases",
      "imageUrl": "/images/categories/samsung-cases.jpg",
      "isActive": true,
      "displayOrder": 2,
      "createdAt": "2025-12-15T21:41:22Z",
      "updatedAt": "2025-12-15T21:41:22Z"
    }
  ],
  "count": 5
}
```

**Status Codes:**
- `200 OK` - Success
- `500 Internal Server Error` - Server error

**Example Usage:**

**JavaScript/Fetch:**
```javascript
const response = await fetch('https://ynrbuyia43.execute-api.us-east-1.amazonaws.com/prod/categories');
const data = await response.json();
console.log(data.data); // Array of categories
```

**PowerShell:**
```powershell
Invoke-RestMethod -Uri "https://ynrbuyia43.execute-api.us-east-1.amazonaws.com/prod/categories" -Method GET
```

**cURL:**
```bash
curl -X GET "https://ynrbuyia43.execute-api.us-east-1.amazonaws.com/prod/categories" \
  -H "Content-Type: application/json"
```

---

## Error Handling

All endpoints return errors in this format:

```json
{
  "success": false,
  "error": "Error type",
  "message": "Detailed error message"
}
```

**Common Error Codes:**
- `500` - Internal server error
- `502` - Bad Gateway (Lambda timeout/error)
- `403` - Forbidden (CORS issues)
- `404` - Not Found (invalid endpoint)

---

## Rate Limits

- **API Gateway**: 10,000 requests per second (burst)  
- **Lambda**: 1,000 concurrent executions
- **DynamoDB**: 40,000 RCUs on-demand

---

## Data Models

### Category Object
```typescript
interface Category {
  categoryId: string;      // Unique identifier
  name: string;           // Display name
  description: string;    // Category description  
  slug: string;          // URL-friendly name
  imageUrl: string;      // Image path/URL
  isActive: boolean;     // Visibility status
  displayOrder: number;  // Sort order
  createdAt: string;     // ISO 8601 timestamp
  updatedAt: string;     // ISO 8601 timestamp
}
```

### API Response Wrapper
```typescript
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  count?: number;
  error?: string;
  message?: string;
}
```

---

## Development

### Local Testing
Use the AWS CLI to test DynamoDB directly:

```powershell
# Get all categories
aws dynamodb scan --table-name cellcase-pro-categories --region us-east-1

# Get specific category  
aws dynamodb get-item --table-name cellcase-pro-categories --key '{"categoryId":{"S":"iphone-cases"}}' --region us-east-1

# Add new category
aws dynamodb put-item --table-name cellcase-pro-categories --item file://category.json --region us-east-1
```

### Monitoring
Check Lambda logs:
```powershell
aws logs describe-log-groups --log-group-name-prefix "/aws/lambda/cellcase-get-categories" --region us-east-1
```

### Performance
- **Cold start**: ~200ms (first request)
- **Warm response**: ~50ms (subsequent requests)
- **DynamoDB latency**: ~10ms single-digit milliseconds

---

## Roadmap

### Coming Soon:
- [ ] **Products API** - GET /products, GET /products/{id}
- [ ] **Search API** - GET /search?q={query}
- [ ] **Cart API** - POST /cart, PUT /cart/{id}, DELETE /cart/{id}
- [ ] **Orders API** - POST /orders, GET /orders/{id}
- [ ] **Authentication** - JWT-based auth with AWS Cognito
- [ ] **Admin API** - CRUD operations for products/categories