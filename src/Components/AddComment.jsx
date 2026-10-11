import { Box, Avatar, InputBase, IconButton } from "@mui/material";
import { Send } from "@mui/icons-material";
import { useState } from "react";
import colorFor from "./colorFor";

export default function AddComment({ onSubmit }) {
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = text.trim();
    if (!value) return;
    onSubmit(value);
    setText("");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        p: 2,
        bgcolor: "banner",
        border: 1,
        borderColor: "divider",
        overflow: "hidden",
      }}
    >
      <Avatar
        sx={{
          width: 36,
          height: 36,
          fontSize: 15,
          color: "white",
          bgcolor: colorFor("John Doe"),
        }}
      >
        J
      </Avatar>
      <InputBase
        placeholder="Write a comment..."
        value={text}
        onChange={(event) => setText(event.target.value)}
        sx={{
          flex: 1,
          px: 2,
          py: 0.75,
          borderRadius: 999,
          bgcolor: "background.paper",
        }}
      />
      <IconButton
        type="submit"
        color="primary"
        aria-label="send comment"
        disabled={!text.trim()}
      >
        <Send />
      </IconButton>
    </Box>
  );
}
