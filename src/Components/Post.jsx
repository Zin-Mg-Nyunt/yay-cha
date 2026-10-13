import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Avatar,
  Typography,
  IconButton,
  Button,
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  FavoriteBorder,
  ChatBubbleOutlined,
  ShareOutlined,
  MoreVert,
  BookmarkBorder,
  DeleteOutlined,
} from "@mui/icons-material";
import colorFor from "./colorFor";
import CommentList from "./Comment";
import AddComment from "./AddComment";

export default function Post({ post, showComments = false, onDelete, onSave }) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClose = () => setAnchorEl(null);
  const open = Boolean(anchorEl);
  return (
    <Box
      sx={{
        overflow: "hidden",
        borderRadius: 3,
        border: 1,
        borderColor: "divider",
        bgcolor: "background.paper",
        cursor: "pointer",
      }}
    >
      <Box sx={{ p: 2.5 }} onClick={() => navigate(`/show/${post.id}`)}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Avatar
            sx={{
              width: 44,
              height: 44,
              color: "white",
              bgcolor: colorFor(post.author.name),
            }}
          >
            {post.author.name[0]}
          </Avatar>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography sx={{ fontWeight: 600, lineHeight: 1.3 }}>
              {post.author.name}
            </Typography>
            <Typography sx={{ color: "text.fade", fontSize: 13 }}>
              @{post.author.username} · {post?.createdAt?.toLocaleString()}
            </Typography>
          </Box>
          <IconButton
            size="small"
            aria-label="more"
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={(event) => {
              event.stopPropagation();
              setAnchorEl(event.currentTarget);
            }}
          >
            <MoreVert sx={{ fontSize: 20, color: "text.fade" }} />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={(event) => event.stopPropagation()}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            slotProps={{ paper: { sx: { minWidth: 160, borderRadius: 2 } } }}
          >
            <MenuItem
              onClick={() => {
                handleClose();
                onSave?.(post.id);
              }}
            >
              <ListItemIcon>
                <BookmarkBorder fontSize="small" />
              </ListItemIcon>
              <ListItemText>Save</ListItemText>
            </MenuItem>
            <MenuItem
              onClick={(event) => {
                handleClose();
                onDelete(post.id);
              }}
              sx={{ color: "error.main" }}
            >
              <ListItemIcon sx={{ color: "inherit" }}>
                <DeleteOutlined fontSize="small" />
              </ListItemIcon>
              <ListItemText>Delete</ListItemText>
            </MenuItem>
          </Menu>
        </Box>

        <Typography sx={{ mt: 1.5 }}>{post.body}</Typography>

        <Box sx={{ display: "flex", gap: 1, mt: 1.5, ml: -1 }}>
          <Button
            color="inherit"
            size="small"
            startIcon={<FavoriteBorder />}
            sx={{ color: "text.fade", textTransform: "none" }}
          >
            {post?.likes?.length}
          </Button>
          <Button
            color="inherit"
            size="small"
            startIcon={<ChatBubbleOutlined />}
            sx={{ color: "text.fade", textTransform: "none" }}
          >
            {post?.comments?.length}
          </Button>
          <Button
            color="inherit"
            size="small"
            startIcon={<ShareOutlined />}
            sx={{ color: "text.fade", textTransform: "none" }}
          >
            {post?.shares?.length}
          </Button>
        </Box>
      </Box>

      {showComments && (
        <>
          <Divider />
          <CommentList comments={post?.comments} />
          <Divider />
          <AddComment />
        </>
      )}
    </Box>
  );
}
