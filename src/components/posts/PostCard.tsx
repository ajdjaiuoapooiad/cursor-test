"use client";

import { motion } from "framer-motion";
import { Heart, MessageCircle, Share2, Bookmark } from "lucide-react";
import Image from "next/image";

interface Post {
  id: number;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  likes: number;
  comments: number;
  timestamp: string;
}

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden"
    >
      <div className="p-4 sm:p-5 md:p-6">
        <div className="flex items-start space-x-3 sm:space-x-4">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              fill
              sizes="(max-width: 640px) 40px, 48px"
              className="object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 truncate text-sm sm:text-base">
                {post.author.name}
              </h3>
              <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                {post.timestamp}
              </span>
            </div>
            <p className="mt-2 sm:mt-3 text-gray-700 dark:text-gray-300 break-words whitespace-pre-wrap text-sm sm:text-base leading-relaxed">
              {post.content}
            </p>
          </div>
        </div>

        <div className="mt-4 sm:mt-5 flex items-center justify-between">
          <div className="flex items-center space-x-4 sm:space-x-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center space-x-1.5 sm:space-x-2 text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
            >
              <Heart className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-sm sm:text-base">{post.likes}</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center space-x-1.5 sm:space-x-2 text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-sm sm:text-base">{post.comments}</span>
            </motion.button>
          </div>
          <div className="flex items-center space-x-4 sm:space-x-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-500 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
            >
              <Share2 className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-500 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors"
            >
              <Bookmark className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
