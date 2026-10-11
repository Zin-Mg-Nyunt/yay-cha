import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Tab,
  Tabs,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";
import {
  CalendarMonth,
  Edit,
  FavoriteBorder,
  ChatBubbleOutlined,
  LocationOn,
  MoreVert,
} from "@mui/icons-material";
import { useParams } from "react-router-dom";
import { fetchUser } from "../api";
import { useState, useEffect } from "react";

const stats = [
  { label: "Posts", value: 24 },
  { label: "Followers", value: 128 },
  { label: "Following", value: 96 },
];

const posts = [
  {
    id: 1,
    time: "2h ago",
    body: "Just finished setting up YayCha. Time for a cup of tea and some good conversation.",
    likes: 12,
    comments: 3,
  },
  {
    id: 2,
    time: "1d ago",
    body: "Rainy day in Yangon. Perfect weather for a long chat with friends.",
    likes: 28,
    comments: 7,
  },
  {
    id: 3,
    time: "3d ago",
    body: "Building something new this weekend. Can't wait to share it with everyone here.",
    likes: 45,
    comments: 11,
  },
];

export default function Profile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUser(id)
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  console.log(user);

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <Box sx={{ py: 3 }}>
      <Box
        sx={{
          overflow: "hidden",
          borderRadius: 3,
          border: 1,
          borderColor: "divider",
          bgcolor: "background.paper",
        }}
      >
        {/* Cover */}
        <Box sx={{ height: 160, bgcolor: "banner" }} />

        {/* Header */}
        <Box sx={{ px: 3, pb: 3 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              mt: "-48px",
            }}
          >
            <Avatar
              sx={{
                width: 96,
                height: 96,
                color: "white",
                bgcolor: "primary.main",
                border: 4,
                borderColor: "background.paper",
                fontSize: 36,
                fontWeight: 700,
              }}
            >
              {user.name.charAt(0)}
            </Avatar>
            <Button
              variant="outlined"
              startIcon={<Edit />}
              sx={{ textTransform: "none", fontWeight: 600 }}
            >
              Edit profile
            </Button>
          </Box>

          <Typography sx={{ fontSize: 24, fontWeight: 700, mt: 1.5 }}>
            {user.name}
          </Typography>
          <Typography sx={{ color: "text.fade" }}>{user.username}</Typography>

          <Typography sx={{ mt: 2 }}>{user?.bio}</Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2.5,
              mt: 2,
              color: "text.fade",
              fontSize: 14,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <LocationOn sx={{ fontSize: 18 }} />
              {user?.location}
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <CalendarMonth sx={{ fontSize: 18 }} />
              Joined {user?.createdAt?.toLocaleDateString()}
            </Box>
          </Box>

          {/* <Box sx={{ display: "flex", gap: 4, mt: 2.5 }}>
            {stats.map((stat) => (
              <Box key={stat.label} sx={{ display: "flex", gap: 0.75 }}>
                <Typography sx={{ fontWeight: 700 }}>{user[stat.label]}</Typography>
                <Typography sx={{ color: "text.fade" }}>
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Box> */}
        </Box>

        <Divider />

        {/* Tabs */}
        <Tabs value={0} variant="fullWidth">
          <Tab label="Posts" sx={{ textTransform: "none", fontWeight: 600 }} />
          <Tab
            label="Replies"
            sx={{ textTransform: "none", fontWeight: 600 }}
          />
          <Tab label="Likes" sx={{ textTransform: "none", fontWeight: 600 }} />
        </Tabs>
        <Divider />

        {/* Posts */}
        {user.posts?.map((post, index) => (
          <Box key={post.id}>
            <Box sx={{ display: "flex", gap: 2, p: 3 }}>
              <Avatar
                sx={{
                  width: 44,
                  height: 44,
                  color: "white",
                  bgcolor: "primary.main",
                }}
              >
                {post.author.name.charAt(0)}
              </Avatar>
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "baseline", gap: 1 }}>
                    <Typography sx={{ fontWeight: 600 }}>
                      {post.author.name}
                    </Typography>
                    <Typography sx={{ color: "text.fade", fontSize: 14 }}>
                      @{post.author.username} ·{" "}
                      {post.createdAt?.toLocaleString()}
                    </Typography>
                  </Box>
                  <IconButton size="small" aria-label="more">
                    <MoreVert sx={{ fontSize: 20, color: "text.fade" }} />
                  </IconButton>
                </Box>
                <Typography sx={{ mt: 0.5 }}>{post.body}</Typography>
                <Box
                  sx={{
                    display: "flex",
                    gap: 3,
                    mt: 1.5,
                    color: "text.fade",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.75,
                    }}
                  >
                    <FavoriteBorder sx={{ fontSize: 18 }} />
                    <Typography sx={{ fontSize: 14 }}>
                      {post?.likes?.length}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.75,
                    }}
                  >
                    <ChatBubbleOutlined sx={{ fontSize: 18 }} />
                    <Typography sx={{ fontSize: 14 }}>
                      {post?.comments?.length}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            {index < user.posts?.length - 1 && <Divider />}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
