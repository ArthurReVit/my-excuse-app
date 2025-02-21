import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
  Typography,
} from "@mui/material";

const EditDialog = ({ open, onClose, item, onSave }) => {
  const [newName, setNewName] = useState(item.name);
  const [newText, setNewText] = useState(item.text);

  const handleSave = () => {
    onSave({ _id: item._id, name: newName, text: newText });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Edit Item</DialogTitle>
      <DialogContent>
        <Box display="flex" justifyContent="space-between">
          <Box flex={1} mr={2}>
            <Typography variant="h6">Original Name</Typography>
            <Typography variant="body2">{item.name}</Typography>
            <Typography variant="h6" mt={2}>
              Original Text
            </Typography>
            <Typography variant="body2">{item.text}</Typography>
          </Box>
          <Box flex={1}>
            <TextField
              label="New Name"
              variant="outlined"
              fullWidth
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              margin="normal"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "black",
                  },
                  "&:hover fieldset": {
                    borderColor: "black",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "black",
                  },
                },
              }}
            />
            <TextField
              label="New Text"
              variant="outlined"
              fullWidth
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              margin="normal"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "black",
                  },
                  "&:hover fieldset": {
                    borderColor: "black",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "black",
                  },
                },
              }}
            />
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
          variant="outlined"
          sx={{
            color: "red",
            borderColor: "red",
            "&:hover": {
              bgcolor: "red",
              color: "white",
            },
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleSave}
          variant="outlined"
          sx={{
            color: "black",
            borderColor: "black",
            "&:hover": {
              bgcolor: "black",
              color: "white",
            },
          }}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditDialog;
