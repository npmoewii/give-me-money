import os
from dotenv import load_dotenv
load_dotenv()


db_host = os.getenv("DB_HOST", "localhost")
db_port = int(os.getenv("DB_port", "3306"))
db_username = os.getenv("DB_USERNAME", "root")
db_password = os.getenv("DB_PASSWORD", "")
db_name = os.getenv("DB_NAME", "gmm_debt")
port = os.getenv("DEBT_PORT", "7001")
user_service = os.getenv("USER_BASE_ADDRESS", "http://localhost:7000")
print("Load config")
