import { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  InputBase,
  Typography,
} from "@mui/material";
import {
  ArrowBack,
  ChatBubbleOutlined,
  FavoriteBorder,
  MoreVert,
  Send,
  ShareOutlined,
} from "@mui/icons-material";
import {
  deepOrange,
  deepPurple,
  green,
  indigo,
  pink,
  teal,
} from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

const colors = [
  deepPurple[500],
  deepOrange[500],
  teal[500],
  pink[500],
  indigo[500],
  green[600],
];

function colorFor(name) {
  let sum = 0;
  for (const char of name) sum += char.charCodeAt(0);
  return colors[sum % colors.length];
}

const post = {
  id: 1,
  name: "Aye Chan",
  username: "ayechan",
  time: "2h",
  body: "Rainy day in Yangon. Perfect weather for a long chat with friends and a hot cup of tea. What's your favorite thing to do when it rains?",
  likes: 28,
  shares: 3,
};

const initialComments = [
  {
    id: 1,
    name: "Kyaw Zin",
    time: "1h",
    text: "Staying in with a good book and some laphet thoke. Can't beat it.",
  },
  {
    id: 2,
    name: "Su Su",
    time: "1h",
    text: "Same here, staying in all day. Perfect excuse to do nothing.",
  },
  {
    id: 3,
    name: "Hnin Wai",
    time: "45m",
    text: "Send some rain to Mandalay please! It's so hot here.",
  },
  {
    id: 4,
    name: "Thant",
    time: "30m",
    text: "Perfect weather for coding marathons.",
  },
  {
    id: 5,
    name: "Min Htet",
    time: "12m",
    text: "Tea and pakora, that's the answer.",
  },
  {
    id: 6,
    name: "Nandar",
    time: "5m",
    text: "Love this. Rainy days are the best days.",
  },
];

function Comment({ comment }) {
  return (
    <Box sx={{ display: "flex", gap: 1.5, my: 1 }}>
      <Avatar
        sx={{
          width: 36,
          height: 36,
          fontSize: 15,
          color: "white",
          bgcolor: colorFor(comment.name),
        }}
      >
        {comment.name[0]}
      </Avatar>
      <Box sx={{ minWidth: 0 }}>
        <Box
          sx={{
            px: 2,
            py: 1,
            borderRadius: 3,
            bgcolor: "banner",
            display: "inline-block",
          }}
        >
          <Typography sx={{ fontSize: 14, fontWeight: 600 }}>
            {comment.name}
          </Typography>
          <Typography sx={{ fontSize: 15 }}>{comment.text}</Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 2, mt: 0.25, ml: 1.5 }}>
          <Typography sx={{ color: "text.fade", fontSize: 12 }}>
            {comment.time}
          </Typography>
          <Typography
            sx={{
              color: "text.fade",
              fontSize: 12,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Like
          </Typography>
          <Typography
            sx={{
              color: "text.fade",
              fontSize: 12,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Reply
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default function Show() {
  const navigate = useNavigate();
  const [comments, setComments] = useState(initialComments);
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = text.trim();
    if (!value) return;
    setComments((current) => [
      ...current,
      { id: Date.now(), name: "John Doe", time: "now", text: value },
    ]);
    setText("");
  };

  return (
    <Box sx={{ py: 3 }}>
      <Button
        startIcon={<ArrowBack />}
        onClick={() => navigate(-1)}
        sx={{ mb: 2, textTransform: "none", fontWeight: 600 }}
      >
        Back
      </Button>

      <Box
        sx={{
          overflow: "hidden",
          borderRadius: 3,
          border: 1,
          borderColor: "divider",
          bgcolor: "background.paper",
        }}
      >
        {/* Post */}

        <Box sx={{ p: 2.5 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Avatar
              sx={{
                width: 48,
                height: 48,
                color: "white",
                bgcolor: colorFor(post.name),
              }}
            >
              {post.name[0]}
            </Avatar>
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Typography sx={{ fontWeight: 600, lineHeight: 1.3 }}>
                {post.name}
              </Typography>
              <Typography sx={{ color: "text.fade", fontSize: 13 }}>
                @{post.username} · {post.time}
              </Typography>
            </Box>
            <IconButton size="small" aria-label="more">
              <MoreVert sx={{ fontSize: 20, color: "text.fade" }} />
            </IconButton>
          </Box>

          <Typography sx={{ mt: 2, fontSize: 18, lineHeight: 1.5 }}>
            {post.body}
          </Typography>

          <Box sx={{ display: "flex", gap: 1, mt: 2, ml: -1 }}>
            <Button
              color="inherit"
              size="small"
              startIcon={<FavoriteBorder />}
              sx={{ color: "text.fade", textTransform: "none" }}
            >
              {post.likes}
            </Button>
            <Button
              color="inherit"
              size="small"
              startIcon={<ChatBubbleOutlined />}
              sx={{ color: "text.fade", textTransform: "none" }}
            >
              {comments.length}
            </Button>
            <Button
              color="inherit"
              size="small"
              startIcon={<ShareOutlined />}
              sx={{ color: "text.fade", textTransform: "none" }}
            >
              {post.shares}
            </Button>
          </Box>
        </Box>

        <Divider />

        {/* Comments */}
        <Box sx={{ p: 2.5, display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography sx={{ fontWeight: 700 }}>
            Comments ({comments.length})
          </Typography>

          {comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </Box>

        <Divider />

        {/* Add comment */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            p: 2,
            bgcolor: "banner",
          }}
        >
          <Avatar
            sx={{
              width: 36,
              height: 36,
              fontSize: 15,
              color: "white",
              bgcolor: "primary.main",
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
      </Box>
    </Box>
  );
}
