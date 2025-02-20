from flask import Blueprint, request, jsonify
from models.item_model import ItemModel
from db import db  # Import the db from the new module

item_api = Blueprint("item_api", __name__)

# Ensure MongoDB is connected before using it
if db is None:
    raise RuntimeError("MongoDB connection failed. Cannot start API.")


@item_api.route("/create_item", methods=["POST"])
def create_item():
    data = request.json

    if not data or not data.get("name") or not data.get("text"):
        return jsonify({"error": "Name and text are required"}), 400

    item = ItemModel(data.get("name"), data.get("text"))

    try:
        db.items.insert_one(item.to_dict())
    except Exception as e:
        return jsonify({"error": f"Failed to insert item: {e}"}), 500

    return jsonify({"message": "Item created successfully"}), 201


@item_api.route("/get_items", methods=["GET"])
def get_items():
    try:
        items = db.items.find()
        items_list = list(items)

        for item in items_list:
            item["_id"] = str(item["_id"])  # Convert ObjectId to string

        return jsonify(items_list), 200
    except Exception as e:
        return jsonify({"error": f"Failed to fetch items: {e}"}), 500
