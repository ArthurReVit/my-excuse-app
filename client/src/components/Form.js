import React, { useState } from "react";
import { Box, Button, TextField, Snackbar } from "@mui/material";
import { createItem } from "../request/request";

const Form = ({ onAdd }) => {
  const [itemName, setItemName] = useState("");
  const [itemText, setItemText] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newItem = await createItem({ name: itemName, text: itemText });
      onAdd(newItem);
      setItemName("");
      setItemText("");
      setOpenSnackbar(true);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 1000,
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        p: 2,
        bgcolor: "grey.100",
      }}
    >
      <TextField
        label="Item Name"
        variant="outlined"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        fullWidth
      />
      <TextField
        label="Item Text"
        variant="outlined"
        value={itemText}
        onChange={(e) => setItemText(e.target.value)}
        fullWidth
      />
      <Button
        type="submit"
        variant="contained"
        sx={{ bgcolor: "black", color: "white" }}
      >
        Add Item
      </Button>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="Item added successfully"
      />
    </Box>
  );
};

export default Form;
