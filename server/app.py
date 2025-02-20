from flask import Flask
from pymongo import MongoClient
from config import Config

app = Flask(__name__)


client = MongoClient(Config.MONGODB_URI)
db = client.get_default_database()


@app.route("/")
def hello_world():
    return "Hello, World!"


if __name__ == "__main__":
    app.run(debug=True)
