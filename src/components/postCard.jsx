
import { Link } from 'react-router-dom';

export function PostCard({ post }) {
  // Fallbacks in case property names vary from the API response
  const id = post._id || post.id;
  const title = post.title || 'Untitled Post';
  const excerpt = post.excerpt || post.content?.slice(0, 120) + '...' || 'No summary available.';

  return (
    <article className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          {title}
        </h2>
        <p className="text-gray-600 text-sm line-clamp-3 mb-4">
          {excerpt}
        </p>
      </div>
      <div>
        <Link
          to={`/posts/${id}`}
          className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
        >
          Read Full Post &rarr;
        </Link>
      </div>
    </article>
  );
}