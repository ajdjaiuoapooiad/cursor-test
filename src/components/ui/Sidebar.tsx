"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  User,
  MessageSquare,
  Settings,
  Users,
  Bookmark,
  TrendingUp,
  Hash,
  Bell,
  LogOut,
} from "lucide-react";

const navigation = [
  { name: "ホーム", href: "/", icon: Home },
  { name: "プロフィール", href: "/profile", icon: User },
  { name: "メッセージ", href: "/messages", icon: MessageSquare },
  { name: "友達", href: "/friends", icon: Users },
  { name: "ブックマーク", href: "/bookmarks", icon: Bookmark },
  { name: "トレンド", href: "/trending", icon: TrendingUp },
  { name: "通知", href: "/notifications", icon: Bell },
  { name: "設定", href: "/settings", icon: Settings },
];

const trendingTopics = [
  { name: "プログラミング", count: "2.5K", icon: Hash },
  { name: "デザイン", count: "1.8K", icon: Hash },
  { name: "テクノロジー", count: "1.2K", icon: Hash },
  { name: "AI", count: "3.1K", icon: Hash },
  { name: "Web開発", count: "1.5K", icon: Hash },
];

const user = {
  name: "山田太郎",
  username: "@yamada_taro",
  avatar:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  verified: true,
  followers: 1234,
  following: 567,
};

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden lg:flex lg:flex-col lg:w-72 lg:fixed lg:inset-y-0 lg:border-r lg:border-gray-100 lg:pt-16 lg:pb-4 lg:bg-white">
      <div className="flex-1 flex flex-col min-h-0">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <nav className="mt-5 flex-1 px-2 space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-blue-50 to-blue-50/50 text-blue-600 shadow-sm"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <item.icon
                    className={`mr-3 h-5 w-5 transition-colors ${
                      isActive
                        ? "text-blue-600"
                        : "text-gray-400 group-hover:text-gray-500"
                    }`}
                  />
                  {item.name}
                  {item.name === "通知" && (
                    <span className="ml-auto inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-500 rounded-full">
                      3
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* トレンドトピック */}
        <div className="flex-shrink-0 flex border-t border-gray-100 p-4">
          <div className="w-full">
            <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
              <TrendingUp className="w-4 h-4 mr-2 text-blue-500" />
              トレンドトピック
            </h3>
            <div className="space-y-3">
              {trendingTopics.map((topic) => (
                <Link
                  key={topic.name}
                  href={`/trending/${topic.name}`}
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <div className="flex items-center space-x-2">
                    <topic.icon className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                    <span className="text-sm text-gray-600 group-hover:text-gray-900">
                      #{topic.name}
                    </span>
                  </div>
                  <span className="text-xs text-gray-400 group-hover:text-gray-500">
                    {topic.count}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ユーザープロフィール */}
        <div className="flex-shrink-0 flex border-t border-gray-100 p-4">
          <div className="w-full">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-12 h-12 rounded-full ring-2 ring-blue-500"
                />
                {user.verified && (
                  <span className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                    </svg>
                  </span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {user.name}
                </p>
                <p className="text-xs text-gray-500 truncate">
                  {user.username}
                </p>
                <div className="flex items-center space-x-4 mt-1">
                  <div className="flex items-center space-x-1">
                    <span className="text-xs font-medium text-gray-900">
                      {user.followers.toLocaleString()}
                    </span>
                    <span className="text-xs text-gray-500">フォロワー</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="text-xs font-medium text-gray-900">
                      {user.following.toLocaleString()}
                    </span>
                    <span className="text-xs text-gray-500">フォロー中</span>
                  </div>
                </div>
              </div>
            </div>
            <button className="mt-3 w-full flex items-center justify-center space-x-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors">
              <LogOut className="w-4 h-4" />
              <span>ログアウト</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
