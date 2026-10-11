import { useState, useEffect } from "react";
import { Box, Button, CircularProgress, Alert } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import Post from "../Components/Post";
import { fetchPost } from "../api";

export default function Show() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPost(id)
      .then((post) => {
        setPost(post);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <CircularProgress
        sx={{ margin: "auto", display: "block", marginTop: 10 }}
      />
    );
  if (error) return <Alert severity="error">{error}</Alert>;

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
      <Post post={post} showComments={true} />
    </>
  );
}
