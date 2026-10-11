import { useState } from "react";
import { Box, Button } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import CommentList from "../Components/Comment";
import AddComment from "../Components/AddComment";
import Post from "../Components/Post";

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

const post = {
  id: 1,
  name: "Aye Chan",
  username: "ayechan",
  time: "2h",
  body: "Rainy day in Yangon. Perfect weather for a long chat with friends and a hot cup of tea. What's your favorite thing to do when it rains?",
  likes: 28,
  shares: 3,
  comments: initialComments,
};

export default function Show() {
  const navigate = useNavigate();
  const [comments, setComments] = useState(initialComments);
  const addComment = (value) => {
    setComments((current) => [
      ...current,
      { id: Date.now(), name: "John Doe", time: "now", text: value },
    ]);
  };

  return (
    <>
      <Box sx={{ py: 2 }}>
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate(-1)}
          sx={{ textTransform: "none", fontWeight: 600 }}
        >
          Back
        </Button>
      </Box>
      <Post post={post} showComments={true} addComment={addComment} />
    </>
  );
}
