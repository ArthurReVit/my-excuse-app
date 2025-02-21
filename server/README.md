# My Excuse App - Server

## Description:

This will be a pretty basic python flask app made just to practice the basics of python and flask.

## Latest commit:

## 21/02/2025:

- Merge testing branch with master

### Project Documentation

#### Overview

This project is a simple Flask application designed to demonstrate basic CRUD operations with a MongoDB database. It includes routes for creating and retrieving items, with a focus on practicing Python and Flask fundamentals.

#### Project Structure

- **app.py**: The main entry point of the application. It initializes the Flask app and registers the routes.
- **config.py**: Contains configuration settings, including the MongoDB URI.
- **db.py**: Manages the connection to the MongoDB database.
- **routes/item_routes.py**: Defines the API endpoints for creating, retrieving, updating, and deleting items.
- **models/item_model.py**: Contains the `ItemModel` class, which represents an item with a unique ID, name, and text.
- **config_demo.py**: A template for `config.py` to demonstrate how to set up configuration without exposing sensitive information.

#### How It Works

1. **Database Connection**: The application connects to a MongoDB database using the URI specified in `config.py`. The connection is managed in `db.py`.

2. **API Endpoints**:
   - **Create Item**: POST `/items/create_item` - Accepts JSON data to create a new item in the database.
   - **Get Items**: GET `/items/get_items` - Retrieves all items from the database and returns them as JSON.
   - **Update Item**: PUT `/items/update_item` - Updates an existing item in the database based on its `_id`. Requires `_id`, `name`, and `text` in the request JSON.
   - **Delete Item**: DELETE `/items/delete_item` - Deletes an item from the database based on its `_id`. Requires `_id` in the request JSON.

3. **Error Handling**: The application checks for a successful database connection before starting. If the connection fails, it raises an error and prevents the app from running. Each route also includes error handling to manage database operation failures.

4. **Blueprints**: The application uses Flask blueprints to organize routes, making it easier to manage and scale.

#### Running the Application

1. Ensure you have Python and pip installed.
2. Install the required packages using:
   ```bash
   pip install -r requirements.txt
   ```
3. Set up your `config.py` with the correct MongoDB URI.
4. Run the application:
   ```bash
   python app.py
   ```
5. Access the API endpoints via a tool like Postman or a web browser.

#### Notes

- Ensure your MongoDB instance is running and accessible.
- The application is configured to run in debug mode for development purposes.

This documentation provides a basic understanding of how the project is structured and operates. Feel free to expand on it as your project evolves.
