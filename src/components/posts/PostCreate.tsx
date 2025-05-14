"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Image, Smile, Send } from "lucide-react";

export default function PostCreate() {
  const [content, setContent] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden"
    >
      <div className="p-3 sm:p-4 md:p-5">
        <div className="flex items-start space-x-3 sm:space-x-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="いまどうしてる？"
              className="w-full min-h-[100px] p-2 sm:p-3 bg-transparent border-none focus:ring-0 resize-none text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 text-base sm:text-lg"
            />
            <div className="flex items-center justify-between mt-3 sm:mt-4">
              <div className="flex space-x-2 sm:space-x-3">
                <button className="p-2 sm:p-2.5 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-full transition-colors">
                  <Image className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                <button className="p-2 sm:p-2.5 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-full transition-colors">
                  <Smile className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
              <button
                disabled={!content.trim()}
                className="px-4 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base font-medium text-white bg-blue-500 rounded-full hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
              >
                <Send className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="hidden sm:inline">投稿する</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
