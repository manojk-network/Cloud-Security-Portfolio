import json
import boto3
import os
import uuid
from datetime import datetime

# Initialize DynamoDB resource
# Using environment variable for table name, fallback to a default
TABLE_NAME = os.environ.get('DYNAMODB_TABLE', 'items-table')
dynamodb = boto3.resource('dynamodb')

def lambda_handler(event, context):
    """
    AWS Lambda handler function for ServerlessFlow application.
    Supports GET (fetch all items) and POST (create new item).
    """
    
    # Enable CORS
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'OPTIONS,GET,POST'
    }
    
    http_method = event.get('httpMethod', '')
    
    # Handle preflight CORS request
    if http_method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': headers,
            'body': ''
        }
        
    table = dynamodb.Table(TABLE_NAME)
    
    if http_method == 'GET':
        return handle_get(table, headers)
    elif http_method == 'POST':
        return handle_post(event, table, headers)
    else:
        return {
            'statusCode': 405,
            'headers': headers,
            'body': json.dumps({'error': f'Method {http_method} not allowed'})
        }

def handle_get(table, headers):
    try:
        # Note: scan() is used here for simplicity. 
        # In production with large datasets, consider query() or pagination.
        response = table.scan()
        items = response.get('Items', [])
        
        # Sort items by timestamp descending (newest first)
        items.sort(key=lambda x: x.get('timestamp', ''), reverse=True)
        
        return {
            'statusCode': 200,
            'headers': headers,
            'body': json.dumps(items)
        }
    except Exception as e:
        print(f"Error fetching items: {str(e)}")
        return {
            'statusCode': 500,
            'headers': headers,
            'body': json.dumps({'error': 'Internal server error'})
        }

def handle_post(event, table, headers):
    try:
        body = event.get('body')
        if not body:
            return {
                'statusCode': 400,
                'headers': headers,
                'body': json.dumps({'error': 'Missing request body'})
            }
            
        if isinstance(body, str):
            body = json.loads(body)
            
        item_name = body.get('name')
        if not item_name:
            return {
                'statusCode': 400,
                'headers': headers,
                'body': json.dumps({'error': 'Item name is required'})
            }
            
        # Create new item
        item = {
            'id': str(uuid.uuid4()),
            'name': item_name,
            'timestamp': datetime.utcnow().isoformat() + 'Z'
        }
        
        # Save to DynamoDB
        table.put_item(Item=item)
        
        return {
            'statusCode': 201,
            'headers': headers,
            'body': json.dumps(item)
        }
    except Exception as e:
        print(f"Error creating item: {str(e)}")
        return {
            'statusCode': 500,
            'headers': headers,
            'body': json.dumps({'error': 'Internal server error'})
        }
