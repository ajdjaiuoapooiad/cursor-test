"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PostCard from "./PostCard";
import PostCreate from "./PostCreate";

const DUMMY_POSTS = [
  {
    id: 1,
    content: "Next.jsとTailwind CSSでモダンなUIを構築中！",
    author: {
      name: "山田太郎",
      avatar: "/avatars/user1.jpg",
    },
    likes: 42,
    comments: 12,
    timestamp: "2時間前",
  },
  {
    id: 2,
    content: "TypeScriptの型システム最高！",
    author: {
      name: "佐藤花子",
      avatar: "/avatars/user2.jpg",
    },
    likes: 28,
    comments: 8,
    timestamp: "4時間前",
  },
];

export default function PostIndex() {
  const [posts, setPosts] = useState(DUMMY_POSTS);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="space-y-4 sm:space-y-6 md:space-y-8">
        <PostCreate />
        <div className="space-y-4 sm:space-y-6">
          {posts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="transform hover:scale-[1.01] transition-transform"
            >
              <PostCard post={post} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
