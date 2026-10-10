import { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  InputBase,
  Typography,
} from "@mui/material";
import { Close as CloseIcon, Image as ImageIcon } from "@mui/icons-material";
import { useApp } from "../Themed";

export default function AddPostForm({ onAdd }) {
  const { openForm, setOpenForm } = useApp();
  const [body, setBody] = useState("");

  const handleClose = () => {
    setOpenForm(false);
    setBody("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const text = body.trim();
    if (!text) return;
    onAdd(text);
    handleClose();
  };

  return (
    <Dialog open={openForm} onClose={handleClose} fullWidth maxWidth="xs">
      <Box component="form" onSubmit={handleSubmit}>
        <DialogTitle
          sx={{
            textAlign: "center",
            fontWeight: 700,
            fontSize: 20,
            position: "relative",
            py: 2,
          }}
        >
          Create post
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 12,
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: "banner",
            }}
            size="small"
          >
            <CloseIcon sx={{ fontSize: 20 }} />
          </IconButton>
        </DialogTitle>
        <Divider />

        <DialogContent sx={{ pt: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
            <Avatar
              sx={{
                width: 44,
                height: 44,
                color: "white",
                bgcolor: "primary.main",
              }}
            >
              J
            </Avatar>
            <Box>
              <Typography sx={{ fontWeight: 600, lineHeight: 1.3 }}>
                John Doe
              </Typography>
              <Typography sx={{ color: "text.fade", fontSize: 13 }}>
                @johndoe
              </Typography>
            </Box>
          </Box>

          <InputBase
            autoFocus
            multiline
            fullWidth
            minRows={4}
            placeholder="What's on your mind, John?"
            value={body}
            onChange={(event) => setBody(event.target.value)}
            sx={{ fontSize: 20, alignItems: "flex-start" }}
          />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mt: 2,
              px: 1.5,
              py: 0.5,
              borderRadius: 2,
              border: 1,
              borderColor: "divider",
            }}
          >
            <Typography sx={{ fontWeight: 600, fontSize: 15 }}>
              Add to your post
            </Typography>
            <IconButton aria-label="add image" color="primary">
              <ImageIcon />
            </IconButton>
          </Box>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            size="large"
            disabled={!body.trim()}
            sx={{
              mt: 2,
              fontWeight: 600,
              textTransform: "none",
            }}
          >
            Post
          </Button>
        </DialogContent>
      </Box>
    </Dialog>
  );
}
