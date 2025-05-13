'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bookmark, MessageSquare, Settings, Users, TrendingUp, Hash, Bell } from 'lucide-react';

const Sidebar = () => {
  const pathname = usePathname();

  const sidebarItems = [
    { href: '/trending', label: 'トレンド', icon: TrendingUp },
    { href: '/messages', label: 'メッセージ', icon: MessageSquare },
    { href: '/bookmarks', label: 'ブックマーク', icon: Bookmark },
    { href: '/friends', label: '友達', icon: Users },
    { href: '/notifications', label: '通知', icon: Bell },
    { href: '/hashtags', label: 'ハッシュタグ', icon: Hash },
    { href: '/settings', label: '設定', icon: Settings },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-0 pt-16">
      <div className="p-4">
        <div className="space-y-1">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 group
                  ${isActive 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                  }`}
              >
                <Icon className={`w-5 h-5 transition-transform duration-200 group-hover:scale-110
                  ${isActive ? 'text-blue-600' : 'text-gray-500 group-hover:text-blue-600'}`} 
                />
                <span className="font-medium">{item.label}</span>
                {isActive && (
                  <div className="absolute left-0 w-1 h-8 bg-blue-600 rounded-r-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* トレンドトピック */}
        <div className="mt-8">
          <h3 className="px-3 text-sm font-semibold text-gray-500 uppercase tracking-wider">
            トレンドトピック
          </h3>
          <div className="mt-2 space-y-1">
            {['#プログラミング', '#デザイン', '#テクノロジー'].map((topic) => (
              <Link
                key={topic}
                href={`/hashtags/${topic.slice(1)}`}
                className="flex items-center space-x-2 p-3 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-all duration-200"
              >
                <Hash className="w-4 h-4 text-gray-400" />
                <span className="text-sm">{topic}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* フッター */}
        <div className="mt-auto pt-4 border-t border-gray-200">
          <div className="px-3 py-2">
            <p className="text-xs text-gray-500">
              © 2024 SNSアプリ
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar; 