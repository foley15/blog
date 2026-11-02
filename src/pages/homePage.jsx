// src/pages/HomePage.jsx
import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from '../api/postsAPI';
import { PostCard } from '../components/postCard';

export default function HomePage() {
  const { data: posts, isLoading, isError, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg my-6 text-center">
        <p className="font-semibold">Error loading posts</p>
        <p className="text-sm">{error.message}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-extrabold text-gray-900">Latest Articles</h1>
        <p className="text-gray-600 text-sm mt-1">Explore thoughts, tutorials, and insights.</p>
      </div>

      {posts?.length === 0 ? (
        <p className="text-gray-500 text-center py-10">No posts found. Create your first one!</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {posts.map((post) => (
            <PostCard key={post._id || post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}