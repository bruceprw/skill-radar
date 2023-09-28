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
    "rank",
    "regions",
    "name",
    "id"
]

def lambda_handler(event, context):
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
        cur.execute(f"SELECT users.sn, users.first_name, users.last_name, users.email, users.rank, users.regions, skills.name, skills.id from users LEFT JOIN map on users.sn = map.sn LEFT JOIN skills on map.skill = skills.id")
        row = cur.fetchone()
        users = []
        while row:
            user = []
            user.append(row)
            row = cur.fetchone()
            userDict = dict(zip(userkeys, list(user[0])))  # zip tuple into a list
            users.append(userDict)

        
        # Construct body
        userstmp = {}
        usersArray = []
        for user in users:
            if user['sn'] in userstmp:
                skilldict = {'name': user['name'], 'id': user['id']}
                del user['name']
                del user['id']
                userstmp[user['sn']]['attributes'].append(skilldict)
            else:
                skilldict = {'name': user['name'], 'id': user['id']}
                del user['name']
                del user['id']
                userstmp[user['sn']] = user
                userstmp[user['sn']]['attributes'] = [skilldict]
        for entry in userstmp:
            usersArray.append(userstmp[entry])


    # Return response object
    return {
    "isBase64Encoded": True,
    "statusCode": 200,
    "headers": {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin":  '*'
    },
    "body": json.dumps(usersArray)
    }