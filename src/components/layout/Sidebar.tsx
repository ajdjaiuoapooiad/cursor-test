"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Search,
  Bell,
  User,
  Settings,
  LogOut,
  Plus,
  Sparkles,
  Bookmark,
  MessageSquare,
  Users,
  TrendingUp,
  Hash,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    { href: "/", label: "ホーム", icon: Home },
    { href: "/trending", label: "トレンド", icon: TrendingUp },
    { href: "/messages", label: "メッセージ", icon: MessageSquare },
    { href: "/bookmarks", label: "ブックマーク", icon: Bookmark },
    { href: "/friends", label: "友達", icon: Users },
    { href: "/notifications", label: "通知", icon: Bell },
    { href: "/hashtags", label: "ハッシュタグ", icon: Hash },
  ];

  const trendingTopics = [
    { name: "プログラミング", count: "2.5K" },
    { name: "デザイン", count: "1.8K" },
    { name: "テクノロジー", count: "1.2K" },
  ];

  return (
    <motion.aside
      initial={{ width: 280 }}
      animate={{ width: isCollapsed ? 80 : 280 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed left-0 top-0 h-screen bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-r border-gray-100/50 dark:border-gray-800/50 z-40 hidden lg:block"
    >
      <div className="flex flex-col h-full">
        {/* ロゴ */}
        <div className="p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 group"
            onClick={() => setIsCollapsed(false)}
          >
            <div className="relative w-10 h-10 rounded-xl overflow-hidden">
              <Image
                src="/icon.svg"
                alt="ロゴ"
                fill
                sizes="(max-width: 768px) 40px, 40px"
                className="object-cover"
                priority
              />
            </div>
            {!isCollapsed && (
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent group-hover:from-indigo-500 group-hover:via-purple-500 group-hover:to-pink-500 transition-all">
                  SocialApp
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                  <Sparkles className="w-3 h-3 mr-1" />
                  モダンなSNS
                </span>
              </div>
            )}
          </Link>
        </div>

        {/* 新規投稿ボタン */}
        <div className="px-4 mb-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-600 dark:via-purple-600 dark:to-pink-600 text-white rounded-full font-semibold hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 dark:hover:from-indigo-700 dark:hover:via-purple-700 dark:hover:to-pink-700 transition-all shadow-lg hover:shadow-xl"
          >
            <Plus className="w-5 h-5" />
            {!isCollapsed && <span>新規投稿</span>}
          </motion.button>
        </div>

        {/* ナビゲーション */}
        <nav className="flex-1 px-2">
          <div className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-50/50 dark:hover:bg-gray-800/50"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {!isCollapsed && (
                    <span className="font-medium">{item.label}</span>
                  )}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* トレンドトピック */}
        {!isCollapsed && (
          <div className="px-4 py-4 border-t border-gray-100/50 dark:border-gray-800/50">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
              トレンドトピック
            </h3>
            <div className="space-y-2">
              {trendingTopics.map((topic) => (
                <Link
                  key={topic.name}
                  href={`/hashtags/${topic.name}`}
                  className="flex items-center justify-between p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors"
                >
                  <div className="flex items-center space-x-2">
                    <Hash className="w-4 h-4 text-gray-400" />
                    <span className="text-sm">#{topic.name}</span>
                  </div>
                  <span className="text-xs text-gray-500">{topic.count}</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* 設定とログアウト */}
        <div className="p-4 border-t border-gray-100/50 dark:border-gray-800/50">
          <div className="space-y-1">
            <Link
              href="/settings"
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                pathname === "/settings"
                  ? "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-50/50 dark:hover:bg-gray-800/50"
              }`}
            >
              <Settings className="w-5 h-5" />
              {!isCollapsed && <span className="font-medium">設定</span>}
            </Link>
            <button className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 dark:text-red-400 hover:bg-gray-50/50 dark:hover:bg-gray-800/50 rounded-lg transition-colors">
              <LogOut className="w-5 h-5" />
              {!isCollapsed && <span className="font-medium">ログアウト</span>}
            </button>
          </div>
        </div>
      </div>

      {/* 折りたたみボタン */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full shadow-lg flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
      >
        <svg
          className={`w-4 h-4 transform transition-transform ${
            isCollapsed ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </motion.aside>
  );
}
