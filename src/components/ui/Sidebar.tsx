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
} from "lucide-react";

const navigation = [
  { name: "ホーム", href: "/", icon: Home },
  { name: "プロフィール", href: "/profile", icon: User },
  { name: "メッセージ", href: "/messages", icon: MessageSquare },
  { name: "友達", href: "/friends", icon: Users },
  { name: "ブックマーク", href: "/bookmarks", icon: Bookmark },
  { name: "トレンド", href: "/trending", icon: TrendingUp },
  { name: "設定", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:border-r lg:border-gray-100 lg:pt-16 lg:pb-4 lg:bg-white">
      <div className="flex-1 flex flex-col min-h-0">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <nav className="mt-5 flex-1 px-2 space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-colors ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <item.icon
                    className={`mr-3 h-5 w-5 ${
                      isActive
                        ? "text-blue-600"
                        : "text-gray-400 group-hover:text-gray-500"
                    }`}
                  />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* トレンドトピック */}
        <div className="flex-shrink-0 flex border-t border-gray-100 p-4">
          <div className="w-full">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">
              トレンドトピック
            </h3>
            <div className="space-y-3">
              {["#プログラミング", "#デザイン", "#テクノロジー"].map(
                (topic) => (
                  <div
                    key={topic}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-gray-600">{topic}</span>
                    <span className="text-gray-400">2.5K</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
