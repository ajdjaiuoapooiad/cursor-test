'use client';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Sidebar />
      <main className="lg:ml-64 pt-16">
        <div className="max-w-screen-xl mx-auto px-4 py-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout; 