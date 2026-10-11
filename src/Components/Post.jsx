import { useNavigate } from "react-router-dom";
import {
  Box,
  Avatar,
  Typography,
  IconButton,
  Button,
  Divider,
} from "@mui/material";
import {
  FavoriteBorder,
  ChatBubbleOutlined,
  ShareOutlined,
  MoreVert,
} from "@mui/icons-material";
import colorFor from "./colorFor";
import CommentList from "./Comment";
import AddComment from "./AddComment";

export default function Post({ post, showComments = false }) {
  const navigate = useNavigate();
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
          <IconButton size="small" aria-label="more">
            <MoreVert sx={{ fontSize: 20, color: "text.fade" }} />
          </IconButton>
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
