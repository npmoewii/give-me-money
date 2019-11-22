import os
from dotenv import load_dotenv
load_dotenv()


db_host = os.getenv("DB_HOST")
db_port = int(os.getenv("DB_port"))
db_username = os.getenv("DB_USERNAME")
db_password = os.getenv("DB_PASSWORD")
db_name = os.getenv("DB_NAME")
port = os.getenv("TRANSACTION_PORT")
user_service=os.getenv("USER_BASE_ADDRESS")
print("Load config")