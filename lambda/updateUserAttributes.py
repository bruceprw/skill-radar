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
    attribute = (event['queryStringParameters']['attribute'])
    mentor = (event['queryStringParameters']['mentoring'])
    attributetype = (event['queryStringParameters']['type'])
    print(f'Trying to update {attribute} to servicenumber: {servicenumber}')

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
        stuff = []
        stuff.append(servicenumber)
        stuff.append(attribute)
        cur.execute("SELECT sn, COUNT(*) FROM map WHERE sn = %s AND skill = %s GROUP BY sn", stuff)
        # gets the number of rows affected by the command executed
        row_count = cur.rowcount
        print ("number of affected rows: {}".format(row_count))
        if row_count != 0:
            cur.execute(f"UPDATE map SET type = {attributetype}, mentoring = {mentor} WHERE sn = %s AND skill = %s", stuff)
            conn.commit()
            body = "Updated attribute"
        else: 
            body = "User does not have selected attribute"
        # Return response object
        return {
            "isBase64Encoded": True,
            "statusCode": 200,
            "headers": {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin":  '*'
            },
            "body": body
        }

    # Return response object
    return bodyJson