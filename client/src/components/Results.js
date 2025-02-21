import React, { useState } from "react";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { deleteItem, updateItem } from "../request/request";
import EditDialog from "./EditDialog";

const Results = ({ items, onDelete, onUpdate }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleDelete = async (id) => {
    try {
      await deleteItem(id);
      onDelete(id);
    } catch (error) {
      console.error(`Error deleting item with ID ${id}:`, error);
    }
  };

  const handleEdit = (item) => {
    setSelectedItem(item);
  };

  const handleSave = async (updatedItem) => {
    try {
      const result = await updateItem(updatedItem._id, {
        _id: updatedItem._id,
        name: updatedItem.name,
        text: updatedItem.text,
      });
      onUpdate(result);
      setSelectedItem(null);
    } catch (error) {
      console.error(`Error updating item with ID ${updatedItem._id}:`, error);
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 1000,
        mx: "auto",
        mt: 4,
        p: 2,
        bgcolor: "grey.100",
      }}
    >
      <List>
        {items.map((item) => (
          <ListItem
            key={item._id}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <ListItemText
              primary={
                <Typography variant="h6" component="div" sx={{ maxWidth: 600 }}>
                  {item.name}
                </Typography>
              }
              secondary={
                <Typography
                  variant="body2"
                  component="div"
                  sx={{ maxWidth: 600 }}
                >
                  {item.text}
                </Typography>
              }
            />
            <Box>
              <Button
                variant="outlined"
                sx={{
                  color: "black",
                  borderColor: "black",
                  "&:hover": {
                    bgcolor: "black",
                    color: "white",
                  },
                }}
                onClick={() => handleEdit(item)}
              >
                Edit
              </Button>
              <Button
                variant="outlined"
                sx={{
                  color: "red",
                  borderColor: "red",
                  ml: 1,
                  "&:hover": {
                    bgcolor: "red",
                    color: "white",
                  },
                }}
                onClick={() => handleDelete(item._id)}
              >
                Delete
              </Button>
            </Box>
          </ListItem>
        ))}
      </List>
      {selectedItem && (
        <EditDialog
          open={Boolean(selectedItem)}
          onClose={() => setSelectedItem(null)}
          item={selectedItem}
          onSave={handleSave}
        />
      )}
    </Box>
  );
};

export default Results;
