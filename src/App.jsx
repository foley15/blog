// src/App.jsx
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Navbar } from './components/navbar';
import { ErrorBoundary } from './components/errorBoundary';

// Lazy loaded pages for performance
const HomePage = lazy(() => import('./pages/homePage'));
const PostDetailPage = lazy(() => import('./pages/postDetailPage'));
const CreatePostPage = lazy(() => import('./pages/createPostPage'));
const NotFoundPage = lazy(() => import('./pages/notFoundPage'));

// Create TanStack Query client instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

// Loading fallback component for Suspense
function PageLoader() {
  return (
    <div className="flex justify-center items-center py-32">
      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ErrorBoundary>
          <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />
            <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-8">
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/posts/:id" element={<PostDetailPage />} />
                  <Route path="/create" element={<CreatePostPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </Suspense>
            </main>
          </div>
        </ErrorBoundary>
      </BrowserRouter>
    </QueryClientProvider>
  );
}