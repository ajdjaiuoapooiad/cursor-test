"use client";

import Image from "next/image";
import { Camera, MapPin, Calendar, Link as LinkIcon } from "lucide-react";
import PostCard from "@/components/ui/PostCard";

const userProfile = {
  name: "山田太郎",
  username: "@yamada_taro",
  avatar:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  coverImage:
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=400&q=80",
  bio: "ソフトウェアエンジニア | デザイン愛好家 | 写真撮影が趣味",
  location: "東京都 渋谷区",
  joinedDate: "2020年4月から利用",
  website: "https://example.com",
  following: 1234,
  followers: 5678,
  verified: true,
};

const userPosts = [
  {
    id: 1,
    user: {
      name: userProfile.name,
      username: userProfile.username,
      avatar: userProfile.avatar,
      verified: userProfile.verified,
    },
    content:
      "新しいプロジェクトを始めました！Next.jsとTypeScriptを使用して、モダンなWebアプリケーションを開発中です。\n\n#プログラミング #NextJS #TypeScript",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
    likes: 245,
    comments: 32,
    shares: 12,
    timestamp: "2時間前",
    hashtags: ["プログラミング", "NextJS", "TypeScript"],
  },
  {
    id: 2,
    user: {
      name: userProfile.name,
      username: userProfile.username,
      avatar: userProfile.avatar,
      verified: userProfile.verified,
    },
    content:
      "今日は代々木公園で散歩を楽しみました。桜が咲き始めていて、とても美しかったです。\n\n#散歩 #自然 #写真 #東京 #桜",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
    likes: 189,
    comments: 24,
    shares: 8,
    timestamp: "1日前",
    location: "東京都 代々木公園",
    hashtags: ["散歩", "自然", "写真", "東京", "桜"],
  },
];

export default function ProfilePage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* カバー画像 */}
      <div className="relative h-48 sm:h-64 md:h-80">
        <Image
          src={userProfile.coverImage}
          alt="カバー画像"
          fill
          className="object-cover"
        />
        <button className="absolute bottom-4 right-4 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-opacity">
          <Camera className="w-5 h-5" />
        </button>
      </div>

      {/* プロフィール情報 */}
      <div className="px-4 sm:px-6">
        <div className="relative -mt-16 sm:-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between">
            <div className="flex">
              <div className="relative">
                <Image
                  src={userProfile.avatar}
                  alt={userProfile.name}
                  width={128}
                  height={128}
                  className="rounded-full border-4 border-white"
                />
                <button className="absolute bottom-0 right-0 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-opacity">
                  <Camera className="w-5 h-5" />
                </button>
              </div>
              <div className="ml-4 sm:ml-6 mt-4 sm:mt-0">
                <div className="flex items-center space-x-2">
                  <h1 className="text-2xl font-bold text-gray-900">
                    {userProfile.name}
                  </h1>
                  {userProfile.verified && (
                    <svg
                      className="w-6 h-6 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                    </svg>
                  )}
                </div>
                <p className="text-gray-500">{userProfile.username}</p>
              </div>
            </div>
            <button className="mt-4 sm:mt-0 px-4 py-2 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition-colors">
              プロフィールを編集
            </button>
          </div>

          <div className="mt-6">
            <p className="text-gray-800">{userProfile.bio}</p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-500">
              {userProfile.location && (
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {userProfile.location}
                </div>
              )}
              {userProfile.website && (
                <div className="flex items-center">
                  <LinkIcon className="w-4 h-4 mr-1" />
                  <a
                    href={userProfile.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {userProfile.website}
                  </a>
                </div>
              )}
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {userProfile.joinedDate}
              </div>
            </div>

            <div className="mt-4 flex space-x-6">
              <div>
                <span className="font-semibold text-gray-900">
                  {userProfile.following.toLocaleString()}
                </span>
                <span className="text-gray-500 ml-1">フォロー中</span>
              </div>
              <div>
                <span className="font-semibold text-gray-900">
                  {userProfile.followers.toLocaleString()}
                </span>
                <span className="text-gray-500 ml-1">フォロワー</span>
              </div>
            </div>
          </div>
        </div>

        {/* 投稿一覧 */}
        <div className="mt-8 space-y-6">
          {userPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
