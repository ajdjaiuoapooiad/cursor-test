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
                      ? "bg-blue-50 text-blue-600 shadow-sm"
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
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="プロフィール"
                  className="w-10 h-10 rounded-full"
                />
                <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-400 ring-2 ring-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  山田太郎
                </p>
                <p className="text-xs text-gray-500 truncate">@yamada_taro</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
