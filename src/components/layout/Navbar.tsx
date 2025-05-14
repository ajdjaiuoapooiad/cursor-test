"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Bell,
  Sun,
  Moon,
  Menu,
  X,
  Home,
  User,
  Settings,
  LogOut,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Navbar() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-b border-gray-100/50 dark:border-gray-800/50"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* ロゴとアプリ名 */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-1.5 text-gray-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </button>
              <Link href="/" className="flex items-center space-x-2 group">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative w-7 h-7 sm:w-10 sm:h-10 rounded-xl overflow-hidden ring-2 ring-indigo-500/20 dark:ring-indigo-400/20 group-hover:ring-indigo-500/40 dark:group-hover:ring-indigo-400/40 transition-all"
                >
                  <Image
                    src="/icon.svg"
                    alt="ロゴ"
                    fill
                    sizes="(max-width: 640px) 28px, 40px"
                    className="object-contain"
                  />
                </motion.div>
                <div className="hidden sm:flex flex-col">
                  <span className="text-base sm:text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent group-hover:from-indigo-500 group-hover:via-purple-500 group-hover:to-pink-500 transition-all">
                    SNS App
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                    <Sparkles className="w-3 h-3 mr-1" />
                    モダンなSNS
                  </span>
                </div>
              </Link>
            </div>

            {/* 検索バー - モバイルでは非表示 */}
            <div className="hidden sm:flex flex-1 max-w-2xl mx-4 sm:mx-6 lg:mx-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`relative flex items-center w-full transition-all duration-200 ${
                  isSearchFocused
                    ? "bg-gray-50 dark:bg-gray-800 ring-2 ring-indigo-500/20 dark:ring-indigo-400/20"
                    : "bg-gray-100 dark:bg-gray-800/50"
                } rounded-full shadow-sm`}
              >
                <Search className="w-5 h-5 text-gray-400 ml-3 sm:ml-4" />
                <input
                  type="text"
                  placeholder="検索"
                  className="w-full py-2 sm:py-2.5 pl-2 sm:pl-3 pr-4 bg-transparent border-none focus:ring-0 text-sm sm:text-base text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                />
              </motion.div>
            </div>

            {/* アクションボタン */}
            <div className="flex items-center space-x-1 sm:space-x-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-1.5 sm:p-2 text-gray-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-800 rounded-full transition-colors relative"
              >
                <Bell className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white dark:ring-gray-900"></span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-1.5 sm:p-2 text-gray-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-800 rounded-full transition-colors"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                  <Moon className="w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </motion.button>
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-2 p-1.5 sm:p-2 hover:bg-indigo-50 dark:hover:bg-gray-800 rounded-full transition-colors"
                >
                  <div className="relative w-7 h-7 sm:w-10 sm:h-10 rounded-full overflow-hidden ring-2 ring-indigo-500/20 dark:ring-indigo-400/20 hover:ring-indigo-500/40 dark:hover:ring-indigo-400/40 transition-all">
                    <Image
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt="プロフィール"
                      fill
                      sizes="(max-width: 640px) 28px, 40px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-500 dark:text-gray-400 transition-transform ${
                      isProfileOpen ? "rotate-180" : ""
                    }`}
                  />
                </motion.button>

                {/* プロフィールドロップダウン */}
                <AnimatePresence>
                  {isProfileOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                      className="absolute right-0 mt-2 w-48 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-xl shadow-lg border border-gray-100/50 dark:border-gray-800/50 overflow-hidden"
                    >
                      <div className="px-4 py-3 border-b border-gray-100/50 dark:border-gray-800/50">
                        <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                          山田太郎
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          @yamada_taro
                        </p>
                      </div>
                      <div className="py-1">
                        <Link
                          href="/profile"
                          className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-800 transition-colors"
                        >
                          <User className="w-4 h-4" />
                          <span>プロフィール</span>
                        </Link>
                        <Link
                          href="/settings"
                          className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-800 transition-colors"
                        >
                          <Settings className="w-4 h-4" />
                          <span>設定</span>
                        </Link>
                        <button className="flex items-center space-x-2 w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-gray-800 transition-colors">
                          <LogOut className="w-4 h-4" />
                          <span>ログアウト</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* モバイルメニュー */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-14 sm:top-16 left-0 right-0 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-b border-gray-100/50 dark:border-gray-800/50 lg:hidden"
          >
            <div className="px-3 py-2">
              {/* モバイル検索バー */}
              <div className="relative flex items-center w-full bg-gray-100 dark:bg-gray-800/50 rounded-full mb-3 shadow-sm">
                <Search className="w-5 h-5 text-gray-400 ml-3" />
                <input
                  type="text"
                  placeholder="検索"
                  className="w-full py-2 pl-2 pr-4 bg-transparent border-none focus:ring-0 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                />
              </div>

              {/* モバイルナビゲーション */}
              <nav className="space-y-1">
                <Link
                  href="/"
                  className="flex items-center space-x-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-800 rounded-lg transition-colors group"
                >
                  <Home className="w-5 h-5 text-indigo-500 dark:text-indigo-400 group-hover:scale-110 transition-transform" />
                  <span>ホーム</span>
                </Link>
                <Link
                  href="/profile"
                  className="flex items-center space-x-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-800 rounded-lg transition-colors group"
                >
                  <User className="w-5 h-5 text-indigo-500 dark:text-indigo-400 group-hover:scale-110 transition-transform" />
                  <span>プロフィール</span>
                </Link>
                <Link
                  href="/settings"
                  className="flex items-center space-x-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-800 rounded-lg transition-colors group"
                >
                  <Settings className="w-5 h-5 text-indigo-500 dark:text-indigo-400 group-hover:scale-110 transition-transform" />
                  <span>設定</span>
                </Link>
                <button className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-gray-800 rounded-lg transition-colors group">
                  <LogOut className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>ログアウト</span>
                </button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
