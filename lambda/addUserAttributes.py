import json
import logging
import pymysql # arn:aws:lambda:eu-west-2:770693421928:layer:Klayers-p311-pymysql:1
import os
import boto3

# Get secrets
client = boto3.client('secretsmanager')
secrets = client.get_secret_value(
    SecretId='arn:aws:secretsmanager:eu-west-2:896803506373:secret:team9/aurora-N8R8Xg'
)

secretstring = json.loads(secrets['SecretString'])
# set rds settings
name = secretstring['username']
password = secretstring['password']
rds_host = secretstring['host']
db_name = secretstring['dbClusterIdentifier']

print('Starting function')
logger = logging.getLogger()
logger.setLevel(logging.INFO)

def lambda_handler(event, context):
    # Parse query string
    servicenumber = str(event['queryStringParameters']['sn'])
    attributes = event['queryStringParameters']['attributes'].split(',')
    print(f'Trying to add attribute(s) {attributes} to servicenumber: {servicenumber}')

    # Connect to the database
    try:
        conn = pymysql.connect(host=rds_host, user=name, passwd=password, db=db_name, connect_timeout=5)
    except pymysql.MySQLError as e:
        logger.error("ERROR: Unexpected error: Could not connect to MySQL instance.")
        logger.error(e)
        sys.exit()
    
    logger.info("SUCCESS: Connection to RDS MySQL instance succeeded")

    # Open cursor on DB Connection
    with conn.cursor() as cur:
        for attribute in attributes:
            stuff = []
            stuff.append(servicenumber)
            stuff.append(attribute)
            print(stuff)
            cur.execute(f"INSERT into map(sn, skill)values({servicenumber},{attribute})")
            conn.commit()
        conn.close()

    # Return response object
    return {
        "isBase64Encoded": True,
        "statusCode": 200,
        "headers": {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin":  '*'
        },
        "body": "Request received"
    }