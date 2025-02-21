from flask import Flask
from flask_cors import CORS
from routes.item_routes import item_api
from db import db  # Import the db from the new module

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Prevent the app from running if MongoDB is not connected
if db is None:
    raise RuntimeError("MongoDB connection failed. Exiting...")

# Register the blueprint
app.register_blueprint(item_api, url_prefix="/items")


@app.route("/")
def hello_world():
    return "Hello, World!"


if __name__ == "__main__":
    app.run(debug=True)
