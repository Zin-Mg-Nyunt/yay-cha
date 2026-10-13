import { Alert, Box, CircularProgress } from "@mui/material";
import AddPostForm from "../Components/AddPostForm";
import Post from "../Components/Post";
import Composer from "../Components/Composer";
import { deletePost, fetchPosts } from "../api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { queryClient } from "../Themed";
export default function Home() {
  const {
    data: posts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  const { mutate: deletePostMutation } = useMutation({
    mutationFn: (id) => deletePost(id),
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: ["posts"] });
      const oldPosts = queryClient.getQueryData(["posts"]);
      queryClient.setQueryData(["posts"], (old) => {
        return old.filter((post) => post.id !== id);
      });
      return { oldPosts };
    },
    onError: (_error, _id, context) => {
      alert(_error.message);
      queryClient.setQueryData(["posts"], context.oldPosts);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  if (isLoading)
    return (
      <CircularProgress
        sx={{ margin: "auto", display: "block", marginTop: 10 }}
      />
    );
  if (error) return <Alert severity="error">{error.message}</Alert>;

  return (
    <Box sx={{ py: 3, display: "flex", flexDirection: "column", gap: 2.5 }}>
      <Composer />
      <AddPostForm />
      {posts?.map((post) => (
        <Post key={post.id} post={post} onDelete={deletePostMutation} />
      ))}
    </Box>
  );
}
