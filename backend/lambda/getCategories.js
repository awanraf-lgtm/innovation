const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, ScanCommand } = require('@aws-sdk/lib-dynamodb');

const client = new DynamoDBClient({ region: 'us-east-1' });
const dynamodb = DynamoDBDocumentClient.from(client);

exports.handler = async (event) => {
    console.log('Lambda started');
    
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET,OPTIONS',
        'Content-Type': 'application/json'
    };

    try {
        console.log('DynamoDB client ready');

        // Handle preflight OPTIONS request
        if (event.httpMethod === 'OPTIONS') {
            return {
                statusCode: 200,
                headers,
                body: JSON.stringify({ message: 'CORS preflight' })
            };
        }

        console.log('Scanning categories table...');
        
        const params = {
            TableName: 'cellcase-pro-categories'
        };

        const result = await dynamodb.send(new ScanCommand(params));
        
        console.log(`Found ${result.Items.length} categories`);
        
        // Sort by displayOrder and filter active
        const activeCategories = result.Items
            .filter(item => item.isActive === true)
            .sort((a, b) => a.displayOrder - b.displayOrder);

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                success: true,
                data: activeCategories,
                count: activeCategories.length
            })
        };

    } catch (error) {
        console.error('Error in Lambda:', error);
        
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({
                success: false,
                error: 'Internal server error',
                message: error.message
            })
        };
    }
};