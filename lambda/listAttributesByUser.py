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

attributekeys = [
    "name",
    "description",
    "type",
    "awarderid",
    "date",
    "mentoring"
]

def lambda_handler(event, context):
    # Parse query string
    servicenumber = str(event['queryStringParameters']['sn'])
    print(f'Trying to lookup service number: {servicenumber}')

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
        # Find user details
        cur.execute(f"SELECT skills.name,skills.description,map.type,map.awarder,map.date_awarded,map.mentoring FROM users LEFT JOIN map ON map.sn = users.sn LEFT JOIN skills ON map.skill = skills.id WHERE users.sn = {servicenumber}")
        row = cur.fetchone()
        attributes = []
        while row:
            print(row)
            attribute = []
            attribute.append(row)
            row = cur.fetchone()
            attributeDict = dict(zip(attributekeys, list(attribute[0])))  # zip tuple into a list
            attributes.append(attributeDict)
        
        # Construct body
        bodyJson = attributes

    # Return response object
    return {
        "isBase64Encoded": True,
        "statusCode": 200,
        "headers": { 'Content-Type': 'application/json' },
        "body": json.dumps(bodyJson)
    }