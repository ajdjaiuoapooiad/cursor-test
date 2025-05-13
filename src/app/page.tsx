"use client";

import { useState } from "react";
import { Image as ImageIcon, Smile, MapPin, Hash } from "lucide-react";
import PostCard from "@/components/ui/PostCard";

const dummyPosts = [
  {
    id: 1,
    user: {
      name: "山田太郎",
      username: "@yamada_taro",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      verified: true,
    },
    content:
      "今日は素晴らしい天気ですね！代々木公園で散歩を楽しみました。桜が咲き始めていて、とても美しかったです。\n\n#散歩 #自然 #写真 #東京 #桜",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
    likes: 1242,
    comments: 156,
    shares: 89,
    timestamp: "2時間前",
    location: "東京都 代々木公園",
    hashtags: ["散歩", "自然", "写真", "東京", "桜"],
  },
  {
    id: 2,
    user: {
      name: "佐藤花子",
      username: "@sato_hanako",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      verified: true,
    },
    content:
      "渋谷の隠れ家的カフェ「Cafe Harmony」で素敵な時間を過ごしました。自家焙煎のコーヒーが絶品です！\n\n#カフェ #コーヒー #東京 #渋谷 #隠れ家",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
    likes: 856,
    comments: 92,
    shares: 45,
    timestamp: "3時間前",
    location: "東京都 渋谷区",
    hashtags: ["カフェ", "コーヒー", "東京", "渋谷", "隠れ家"],
  },
  {
    id: 3,
    user: {
      name: "鈴木一郎",
      username: "@suzuki_ichiro",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      verified: false,
    },
    content:
      "Next.jsとTypeScriptの勉強を始めました！最初は難しいですが、少しずつ理解が深まってきています。\n\n#プログラミング #学習 #初心者 #NextJS #TypeScript",
    likes: 328,
    comments: 45,
    shares: 12,
    timestamp: "4時間前",
    hashtags: ["プログラミング", "学習", "初心者", "NextJS", "TypeScript"],
  },
  {
    id: 4,
    user: {
      name: "田中美咲",
      username: "@tanaka_misaki",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      verified: true,
    },
    content:
      "新作のイラストが完成しました！デジタルアートの世界に没頭する時間が大好きです。\n\n#イラスト #デジタルアート #創作 #アート",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
    likes: 1567,
    comments: 234,
    shares: 167,
    timestamp: "5時間前",
    hashtags: ["イラスト", "デジタルアート", "創作", "アート"],
  },
];

export default function Home() {
  const [posts, setPosts] = useState(dummyPosts);
  const [newPost, setNewPost] = useState("");

  const handlePost = () => {
    if (!newPost.trim()) return;

    const post = {
      id: posts.length + 1,
      user: {
        name: "山田太郎",
        username: "@yamada_taro",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        verified: true,
      },
      content: newPost,
      likes: 0,
      comments: 0,
      shares: 0,
      timestamp: "今",
      hashtags: [],
    };

    setPosts([post, ...posts]);
    setNewPost("");
  };

  return (
    <div className="max-w-2xl mx-auto px-4">
      {/* 投稿フォーム */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100">
        <div className="flex items-start space-x-4">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="プロフィール画像"
            className="w-12 h-12 rounded-full"
          />
          <div className="flex-1">
            <textarea
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              placeholder="いまどうしてる？"
              className="w-full h-24 p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-gray-800 placeholder-gray-400"
            />
            <div className="flex justify-between items-center mt-4">
              <div className="flex space-x-3">
                <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-full transition-colors">
                  <ImageIcon className="w-5 h-5" />
                </button>
                <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-full transition-colors">
                  <Smile className="w-5 h-5" />
                </button>
                <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-full transition-colors">
                  <MapPin className="w-5 h-5" />
                </button>
                <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-full transition-colors">
                  <Hash className="w-5 h-5" />
                </button>
              </div>
              <button
                onClick={handlePost}
                disabled={!newPost.trim()}
                className="px-6 py-2 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
              >
                投稿する
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 投稿一覧 */}
      <div className="space-y-8">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
