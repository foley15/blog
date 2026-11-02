import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="text-center py-20 space-y-4">
      <h1 className="text-6xl font-extrabold text-gray-900">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700">Page Not Found</h2>
      <p className="text-gray-500 max-w-sm mx-auto">
        Oops! The page you are looking for doesn't exist or has been moved.
      </p>
      <div>
        <Link
          to="/"
          className="inline-block mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}