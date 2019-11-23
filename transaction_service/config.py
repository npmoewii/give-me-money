import os
from dotenv import load_dotenv
load_dotenv()


db_host = os.getenv("DB_HOST", "localhost")
db_port = int(os.getenv("DB_port", "3306"))
db_username = os.getenv("DB_USERNAME", "root")
db_password = os.getenv("DB_PASSWORD", "")
db_name = os.getenv("DB_NAME", "gmm_transaction")
port = os.getenv("TRANSACTION_PORT", "7002")
user_service = os.getenv("USER_BASE_ADDRESS", "7000")
print("Load config")
