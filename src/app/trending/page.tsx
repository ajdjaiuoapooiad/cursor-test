"use client";

import { useState } from "react";
import Image from "next/image";
import { Hash, TrendingUp, Fire, Clock, Star } from "lucide-react";
import PostCard from "@/components/ui/PostCard";

const trendingTopics = [
  {
    id: 1,
    name: "プログラミング",
    count: "2.5K",
    posts: 1234,
    description: "プログラミングに関する最新の話題",
    icon: Hash,
  },
  {
    id: 2,
    name: "デザイン",
    count: "1.8K",
    posts: 987,
    description: "UI/UXデザインのトレンド",
    icon: Hash,
  },
  {
    id: 3,
    name: "テクノロジー",
    count: "1.2K",
    posts: 756,
    description: "最新のテクノロジーニュース",
    icon: Hash,
  },
  {
    id: 4,
    name: "AI",
    count: "3.1K",
    posts: 2345,
    description: "人工知能の最新動向",
    icon: Hash,
  },
  {
    id: 5,
    name: "Web開発",
    count: "1.5K",
    posts: 890,
    description: "Web開発のベストプラクティス",
    icon: Hash,
  },
];

const trendingPosts = [
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
      "ChatGPTを使った開発効率化の方法をまとめました！\n\n#プログラミング #AI #ChatGPT",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
    likes: 1234,
    comments: 234,
    shares: 56,
    timestamp: "2時間前",
    hashtags: ["プログラミング", "AI", "ChatGPT"],
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
      "Next.js 14の新機能を試してみました。App Routerの改善点が素晴らしいです！\n\n#Web開発 #NextJS #TypeScript",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
    likes: 987,
    comments: 123,
    shares: 45,
    timestamp: "3時間前",
    hashtags: ["Web開発", "NextJS", "TypeScript"],
  },
];

const timeRanges = [
  { id: "today", name: "今日", icon: Clock },
  { id: "week", name: "今週", icon: Fire },
  { id: "month", name: "今月", icon: Star },
];

export default function TrendingPage() {
  const [activeTimeRange, setActiveTimeRange] = useState("today");

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        {/* ヘッダー */}
        <div className="px-4 py-3 border-b border-gray-100">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-6 h-6 text-blue-500" />
            <h1 className="text-xl font-bold text-gray-900">トレンド</h1>
          </div>
        </div>

        {/* 時間範囲フィルター */}
        <div className="px-4 py-2 border-b border-gray-100">
          <div className="flex space-x-2">
            {timeRanges.map((range) => (
              <button
                key={range.id}
                onClick={() => setActiveTimeRange(range.id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTimeRange === range.id
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <range.icon className="w-4 h-4" />
                <span>{range.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* トレンドトピック */}
        <div className="p-4 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            人気のトピック
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {trendingTopics.map((topic) => (
              <div
                key={topic.id}
                className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <topic.icon className="w-5 h-5 text-blue-500" />
                    <span className="font-medium text-gray-900">
                      #{topic.name}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">{topic.count}</span>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  {topic.description}
                </p>
                <div className="mt-2 text-xs text-gray-500">
                  {topic.posts.toLocaleString()}件の投稿
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* トレンド投稿 */}
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            人気の投稿
          </h2>
          <div className="space-y-6">
            {trendingPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
