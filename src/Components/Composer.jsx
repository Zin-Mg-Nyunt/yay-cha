import { useApp } from "../Themed";
import { Box, Avatar, Button, IconButton } from "@mui/material";
import { Image as ImageIcon } from "@mui/icons-material";
import colorFor from "./colorFor";

export default function Composer() {
  const { setOpenForm } = useApp();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        p: 2,
        borderRadius: 3,
        border: 1,
        borderColor: "divider",
        bgcolor: "background.paper",
      }}
    >
      <Avatar
        sx={{
          width: 44,
          height: 44,
          color: "white",
          bgcolor: colorFor("John Doe"),
        }}
      >
        J
      </Avatar>
      <Button
        onClick={() => setOpenForm(true)}
        sx={{
          flex: 1,
          justifyContent: "flex-start",
          px: 2.5,
          py: 1.1,
          borderRadius: 999,
          bgcolor: "banner",
          color: "text.fade",
          fontSize: 16,
          fontWeight: 400,
          textTransform: "none",
          "&:hover": { bgcolor: "action.hover" },
        }}
      >
        What's on your mind, John?
      </Button>
      <IconButton
        aria-label="add image"
        color="primary"
        onClick={() => setOpenForm(true)}
      >
        <ImageIcon />
      </IconButton>
    </Box>
  );
}
