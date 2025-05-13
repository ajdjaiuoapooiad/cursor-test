"use client";

import { useState } from "react";
import { Bookmark, Clock, Calendar, Filter } from "lucide-react";
import PostCard from "@/components/ui/PostCard";

const bookmarkedPosts = [
  {
    id: 1,
    user: {
      name: "佐藤花子",
      username: "@sato_hanako",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      verified: true,
    },
    content:
      "Reactのパフォーマンス最適化のベストプラクティスをまとめました！\n\n#プログラミング #React #パフォーマンス",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
    likes: 1234,
    comments: 234,
    shares: 56,
    timestamp: "2時間前",
    hashtags: ["プログラミング", "React", "パフォーマンス"],
    savedAt: "2024-03-15T10:30:00Z",
  },
  {
    id: 2,
    user: {
      name: "鈴木一郎",
      username: "@suzuki_ichiro",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      verified: false,
    },
    content:
      "TypeScriptの型システムを活用した堅牢なコードの書き方\n\n#TypeScript #プログラミング",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
    likes: 987,
    comments: 123,
    shares: 45,
    timestamp: "1日前",
    hashtags: ["TypeScript", "プログラミング"],
    savedAt: "2024-03-14T15:45:00Z",
  },
];

const sortOptions = [
  { id: "recent", name: "最近保存した順", icon: Clock },
  { id: "oldest", name: "古い順", icon: Calendar },
];

export default function BookmarksPage() {
  const [sortBy, setSortBy] = useState("recent");

  const sortedPosts = [...bookmarkedPosts].sort((a, b) => {
    if (sortBy === "recent") {
      return new Date(b.savedAt).getTime() - new Date(a.savedAt).getTime();
    } else {
      return new Date(a.savedAt).getTime() - new Date(b.savedAt).getTime();
    }
  });

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        {/* ヘッダー */}
        <div className="px-4 py-3 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bookmark className="w-6 h-6 text-blue-500" />
              <h1 className="text-xl font-bold text-gray-900">ブックマーク</h1>
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm text-gray-600 bg-transparent border-0 focus:ring-0"
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* ブックマーク一覧 */}
        <div className="divide-y divide-gray-100">
          {sortedPosts.map((post) => (
            <div key={post.id} className="p-4">
              <PostCard post={post} />
              <div className="mt-2 text-xs text-gray-500">
                保存日時: {new Date(post.savedAt).toLocaleString("ja-JP")}
              </div>
            </div>
          ))}
        </div>

        {sortedPosts.length === 0 && (
          <div className="p-8 text-center">
            <Bookmark className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              ブックマークがありません
            </h3>
            <p className="text-gray-500">
              気に入った投稿をブックマークして、後で簡単にアクセスできます。
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
