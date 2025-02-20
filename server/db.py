from pymongo import MongoClient
from config import Config

try:
    client = MongoClient(Config.MONGODB_URI)
    client.admin.command("ping")  # Test connection

    db = client["MEADatabase"]  # ✅ Explicitly specify the database
    print("✅ Connected to MongoDB")

except Exception as e:
    print(f"Failed to connect to MongoDB: {e}")
    db = None
