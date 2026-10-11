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

export default function colorFor(name) {
  let sum = 0;
  for (const char of name) sum += char.charCodeAt(0);
  return colors[sum % colors.length];
}
