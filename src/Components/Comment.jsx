import { Box, Avatar, Typography } from "@mui/material";
import colorFor from "./colorFor";

function Comment({ comment }) {
  return (
    <Box sx={{ display: "flex", gap: 1.5, my: 1 }}>
      <Avatar
        sx={{
          width: 36,
          height: 36,
          fontSize: 15,
          color: "white",
          bgcolor: colorFor(comment.author.name),
        }}
      >
        {comment.author.name[0]}
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
            {comment.author.name}
          </Typography>
          <Typography sx={{ fontSize: 15 }}>{comment.body}</Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 2, mt: 0.25, ml: 1.5 }}>
          <Typography sx={{ color: "text.fade", fontSize: 12 }}>
            {comment.createdAt?.toLocaleString()}
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

export default function CommentList({ comments = [] }) {
  return (
    <Box
      sx={{
        p: 2.5,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography sx={{ fontWeight: 700 }}>
        Comments ({comments.length})
      </Typography>

      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </Box>
  );
}
