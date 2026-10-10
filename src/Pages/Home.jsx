import { useState } from "react";
import { Avatar, Box, Button, IconButton, Typography } from "@mui/material";
import AddPostForm from "../Components/AddPostForm";
import { useApp } from "../Themed";
import {
  ChatBubbleOutlined,
  FavoriteBorder,
  Image as ImageIcon,
  MoreVert,
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

const colors = [
  deepPurple[500],
  deepOrange[500],
  teal[500],
  pink[500],
  indigo[500],
  green[600],
];

const initialPosts = [
  {
    id: 1,
    name: "Aye Chan",
    username: "ayechan",
    time: "5m",
    body: "Just finished setting up YayCha. Time for a cup of tea and some good conversation.",
    likes: 12,
    shares: 1,
    comments: [
      { id: 1, name: "Kyaw Zin", text: "Welcome! Tea first, always." },
      { id: 2, name: "Su Su", text: "Love the purple theme." },
    ],
  },
  {
    id: 2,
    name: "Kyaw Zin",
    username: "kyawzin",
    time: "22m",
    body: "Rainy day in Yangon. Perfect weather for a long chat with friends.",
    likes: 28,
    shares: 3,
    comments: [
      { id: 1, name: "Aye Chan", text: "Same here, staying in all day." },
      { id: 2, name: "Hnin Wai", text: "Send some rain to Mandalay please!" },
      { id: 3, name: "Thant", text: "Perfect reading weather." },
    ],
  },
  {
    id: 3,
    name: "Su Su",
    username: "susu",
    time: "1h",
    body: "Building something new this weekend. Can't wait to share it with everyone here.",
    likes: 45,
    shares: 6,
    comments: [
      { id: 1, name: "Thant", text: "Excited to see it!" },
      { id: 2, name: "Min Htet", text: "Count me in for testing." },
    ],
  },
  {
    id: 4,
    name: "Hnin Wai",
    username: "hninwai",
    time: "2h",
    body: "Morning coffee or morning tea? Settle this for me once and for all.",
    likes: 63,
    shares: 2,
    comments: [
      { id: 1, name: "Kyaw Zin", text: "Tea. Laphet yay, no contest." },
      { id: 2, name: "Su Su", text: "Coffee, but only on Mondays." },
      { id: 3, name: "Aye Chan", text: "Why not both?" },
    ],
  },
  {
    id: 5,
    name: "Thant",
    username: "thant",
    time: "3h",
    body: "Finally learned how to use flexbox properly. It only took me three years.",
    likes: 91,
    shares: 14,
    comments: [
      { id: 1, name: "Min Htet", text: "Welcome to the club." },
      { id: 2, name: "Hnin Wai", text: "Now try grid." },
    ],
  },
  {
    id: 6,
    name: "Min Htet",
    username: "minhtet",
    time: "5h",
    body: "Sunset from the rooftop tonight was unreal. Some days the city really shows off.",
    likes: 134,
    shares: 9,
    comments: [
      { id: 1, name: "Su Su", text: "Please share a photo!" },
      { id: 2, name: "Thant", text: "Jealous of that view." },
      { id: 3, name: "Aye Chan", text: "Golden hour never disappoints." },
    ],
  },
  {
    id: 7,
    name: "Nandar",
    username: "nandar",
    time: "7h",
    body: "Recommend me a good book for the weekend. Anything but another productivity guide.",
    likes: 37,
    shares: 0,
    comments: [
      { id: 1, name: "Kyaw Zin", text: "Try a good old mystery novel." },
      { id: 2, name: "Hnin Wai", text: "Anything by Haruki Murakami." },
    ],
  },
  {
    id: 8,
    name: "Zaw Lin",
    username: "zawlin",
    time: "9h",
    body: "Street food run done. Mohinga for breakfast is the best decision I made today.",
    likes: 156,
    shares: 21,
    comments: [
      { id: 1, name: "Nandar", text: "Which stall? I need the address." },
      { id: 2, name: "Min Htet", text: "Mohinga is life." },
      { id: 3, name: "Su Su", text: "Now I'm hungry, thanks." },
    ],
  },
  {
    id: 9,
    name: "Phyo Phyo",
    username: "phyophyo",
    time: "12h",
    body: "Reminder to take a break from the screen. Stretch, drink water, look outside.",
    likes: 78,
    shares: 11,
    comments: [
      { id: 1, name: "Zaw Lin", text: "Needed this, thank you." },
      { id: 2, name: "Thant", text: "Already on my third glass." },
    ],
  },
  {
    id: 10,
    name: "Aye Chan",
    username: "ayechan",
    time: "1d",
    body: "Thanks for the warm welcome everyone. This community is already feeling like home.",
    likes: 210,
    shares: 8,
    comments: [
      { id: 1, name: "Phyo Phyo", text: "Glad to have you here!" },
      { id: 2, name: "Nandar", text: "The more the merrier." },
      { id: 3, name: "Kyaw Zin", text: "Tea is on me next time." },
    ],
  },
];

function colorFor(name) {
  let sum = 0;
  for (const char of name) sum += char.charCodeAt(0);
  return colors[sum % colors.length];
}

function Composer() {
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
        sx={{ width: 44, height: 44, color: "white", bgcolor: "primary.main" }}
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

function Post({ post }) {
  return (
    <Box
      sx={{
        overflow: "hidden",
        borderRadius: 3,
        border: 1,
        borderColor: "divider",
        bgcolor: "background.paper",
      }}
    >
      <Box sx={{ p: 2.5 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Avatar
            sx={{
              width: 44,
              height: 44,
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

        <Typography sx={{ mt: 1.5 }}>{post.body}</Typography>

        <Box sx={{ display: "flex", gap: 1, mt: 1.5, ml: -1 }}>
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
            {post.comments.length}
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
    </Box>
  );
}

export default function Home() {
  const [posts, setPosts] = useState(initialPosts);

  const addPost = (body) => {
    setPosts((current) => [
      {
        id: Date.now(),
        name: "John Doe",
        username: "johndoe",
        time: "now",
        body,
        likes: 0,
        shares: 0,
        comments: [],
      },
      ...current,
    ]);
  };

  return (
    <Box sx={{ py: 3, display: "flex", flexDirection: "column", gap: 2.5 }}>
      <Composer />
      <AddPostForm onAdd={addPost} />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </Box>
  );
}
