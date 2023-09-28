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
    "Rank"
]

def lambda_handler(event, context):
    # Parse query string
    attribute = (event['queryStringParameters']['attributes'])
    if len(attribute) > 1:
        attributes = tuple(attribute)
        statement = f"SELECT users.sn,users.first_name,users.last_name,users.email,users.rank FROM users LEFT JOIN map ON map.sn = users.sn LEFT JOIN skills ON map.skill = skills.id WHERE skills.id IN {attributes} GROUP BY users.sn"
    else:
        attributes = attribute[0]
        statement = f"SELECT users.sn,users.first_name,users.last_name,users.email,users.rank FROM users LEFT JOIN map ON map.sn = users.sn LEFT JOIN skills ON map.skill = skills.id WHERE skills.id = {attributes} GROUP BY users.sn"
    print(f'Trying to lookup parent category: {attributes}')
    
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
        cur.execute(statement)
        row = cur.fetchone()
        users = []
        while row:
            user = []
            user.append(row)
            row = cur.fetchone()
            userDict = dict(zip(userkeys, list(user[0])))  # zip tuple into a list
            users.append(userDict)
        
        # Construct body
        bodyJson = users

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