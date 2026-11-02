
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
          DevBlog 📝
        </Link>
        <nav className="flex gap-4 items-center">
          <Link 
            to="/" 
            className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/create" 
            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm"
          >
            New Post
          </Link>
        </nav>
      </div>
    </header>
  );
}