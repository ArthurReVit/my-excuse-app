# My Excuse App - Client

## Description

This is the client for the My Excuse App. It is a simple React app that allows you to create, read, update, and delete items in the database.

## Latest Commit

### 22/02/2025

- Setup for the entire client
- Added Form component that handles the creation of a new item
- Added EditDialog component that handles the editing of an item
- Added Results component that handles the display of the items
- Added the request file that handles the requests to the server

## Features

- **Form Component**: Handles the creation of new items.
- **EditDialog Component**: Manages the editing of existing items.
- **Results Component**: Displays the list of items and provides options to edit or delete them.
- **Request Module**: Handles all API requests to the server.

## Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd client
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Setup**:
   - Create a `.env` file in the root of the `client` directory.
   - Add the following line with your API URL:
     ```
     REACT_APP_API_URL=http://your-api-url
     ```

4. **Run the application**:
   ```bash
   npm start
   ```

## Usage

- **Adding Items**: Use the form to add new items to the list.
- **Editing Items**: Click the "Edit" button next to an item to modify its details.
- **Deleting Items**: Click the "Delete" button to remove an item from the list.
