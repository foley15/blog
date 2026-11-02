
const BASE_URL = 'https://api.oluwasetemi.dev/posts';

// Fetch all posts
export async function fetchPosts() {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  const data = await response.json();
  // Depending on API shape, data might be an array or nested under a key
  return Array.isArray(data) ? data : data.data || [];
}

// Fetch a single post by ID
export async function fetchPostById(id) {
  const response = await fetch(`${BASE_URL}/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch the post');
  }
  const data = await response.json();
  return data.data || data;
}

// Create a new post
export async function createPost(newPostData) {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPostData),
  });

  if (!response.ok) {
    throw new Error('Failed to create post');
  }

  return response.json();
}