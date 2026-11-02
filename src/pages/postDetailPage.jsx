import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchPostById } from '../api/postsAPI';

export default function PostDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: post, isLoading, isError } = useQuery({
    queryKey: ['post', id],
    queryFn: () => fetchPostById(id),
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (isError || !post) {
    return (
      <div className="text-center py-12 space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">Post not found</h2>
        <button
          onClick={() => navigate(-1)}
          className="text-blue-600 underline font-medium hover:text-blue-800"
        >
          &larr; Go back
        </button>
      </div>
    );
  }

  return (
    <article className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm space-y-6">
      <button
        onClick={() => navigate(-1)}
        className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-1"
      >
        &larr; Back to previous page
      </button>

      <h1 className="text-3xl font-extrabold text-gray-900">{post.title}</h1>

      <div className="prose max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap">
        {post.content}
      </div>
    </article>
  );
}