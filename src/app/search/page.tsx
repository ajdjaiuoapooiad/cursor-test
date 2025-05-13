"use client";

import { useState } from "react";
import { Search, Users, Hash, Image as ImageIcon } from "lucide-react";
import PostCard from "@/components/ui/PostCard";

const searchResults = {
  posts: [
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
    },
  ],
  users: [
    {
      id: 1,
      name: "鈴木一郎",
      username: "@suzuki_ichiro",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      verified: false,
      bio: "フロントエンドエンジニア | React, TypeScript, Next.js",
      followers: 1234,
      following: 567,
    },
  ],
  hashtags: [
    {
      id: 1,
      name: "プログラミング",
      count: 12345,
      posts: 5678,
    },
    {
      id: 2,
      name: "React",
      count: 9876,
      posts: 4321,
    },
  ],
};

const filterOptions = [
  { id: "all", name: "すべて", icon: Search },
  { id: "posts", name: "投稿", icon: ImageIcon },
  { id: "users", name: "ユーザー", icon: Users },
  { id: "hashtags", name: "ハッシュタグ", icon: Hash },
];

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        {/* 検索バー */}
        <div className="p-4 border-b border-gray-100">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="検索..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* フィルター */}
        <div className="px-4 py-2 border-b border-gray-100">
          <div className="flex space-x-4">
            {filterOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setActiveFilter(option.id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeFilter === option.id
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <option.icon className="w-4 h-4" />
                <span>{option.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 検索結果 */}
        <div className="divide-y divide-gray-100">
          {/* 投稿 */}
          {activeFilter === "all" || activeFilter === "posts" ? (
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">投稿</h2>
              {searchResults.posts.map((post) => (
                <div key={post.id} className="mb-4">
                  <PostCard post={post} />
                </div>
              ))}
            </div>
          ) : null}

          {/* ユーザー */}
          {activeFilter === "all" || activeFilter === "users" ? (
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                ユーザー
              </h2>
              {searchResults.users.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-medium text-gray-900">
                          {user.name}
                        </h3>
                        {user.verified && (
                          <span className="text-blue-500">✓</span>
                        )}
                      </div>
                      <p className="text-sm text-gray-500">{user.username}</p>
                      <p className="text-sm text-gray-600 mt-1">{user.bio}</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    フォロー
                  </button>
                </div>
              ))}
            </div>
          ) : null}

          {/* ハッシュタグ */}
          {activeFilter === "all" || activeFilter === "hashtags" ? (
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                ハッシュタグ
              </h2>
              {searchResults.hashtags.map((hashtag) => (
                <div
                  key={hashtag.id}
                  className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                      <Hash className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">
                        #{hashtag.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {hashtag.count.toLocaleString()}件の投稿
                      </p>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    フォロー
                  </button>
                </div>
              ))}
            </div>
          ) : null}
        </div>

        {/* 検索結果がない場合 */}
        {searchQuery && (
          <div className="p-8 text-center">
            <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              検索結果が見つかりません
            </h3>
            <p className="text-gray-500">
              別のキーワードで検索してみてください。
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
