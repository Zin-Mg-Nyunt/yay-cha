import { useEffect, useState } from "react";
import { Alert, Box, CircularProgress } from "@mui/material";
import AddPostForm from "../Components/AddPostForm";
import Post from "../Components/Post";
import Composer from "../Components/Composer";
import { fetchPosts } from "../api";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts()
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <CircularProgress
        sx={{ margin: "auto", display: "block", marginTop: 10 }}
      />
    );
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <Box sx={{ py: 3, display: "flex", flexDirection: "column", gap: 2.5 }}>
      <Composer />
      <AddPostForm />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </Box>
  );
}
