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

userkeys = [
    "sn",
    "FirstName",
    "Surname",
    "Email",
    "rank"
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
        cur.execute(f"SELECT * FROM users WHERE sn = '{servicenumber}'")
        row_count = cur.rowcount
        row = cur.fetchone()
        user = []
        while row:
            user.append(row)
            row = cur.fetchone()
        userDict = dict(zip(userkeys, list(user[0])))  # zip tuple into a list
        # Construct body
        bodyJson = userDict
        
        # Return response object
    return {
    "isBase64Encoded": True,
    "statusCode": 200,
    "headers": {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin":  '*'
    },
    "body": json.dumps(bodyJson)
    }
