const api = "http://localhost:8000";

export async function fetchPosts() {
  const response = await fetch(`${api}/posts`);
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return await response.json();
}

export async function fetchPost(id) {
  const response = await fetch(`${api}/posts/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch post");
  }
  return await response.json();
}

export async function createPost(post) {
  const response = await fetch(`${api}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
  if (!response.ok) {
    throw new Error("Failed to create new post");
  }
  return await response.json();
}

export async function updatePost(id, post) {
  const response = await fetch(`${api}/posts/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
  if (!response.ok) {
    throw new Error("Failed to update existing post");
  }
  return await response.json();
}

export async function deletePost(id) {
  const response = await fetch(`${api}/posts/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete existing post");
  }
  return await response.json();
}

// fetch user

export async function fetchUsers() {
  try {
    const response = await fetch(`${api}/users`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function fetchUser(id) {
  try {
    const response = await fetch(`${api}/users/${id}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function createUser(user) {
  try {
    const response = await fetch(`${api}/users/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function updateUser(id, user) {
  try {
    const response = await fetch(`${api}/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function deleteUser(id) {
  try {
    const response = await fetch(`${api}/users/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
}
