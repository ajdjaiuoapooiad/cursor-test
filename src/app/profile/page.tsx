'use client';

import { useState } from 'react';
import { Camera, MapPin, Calendar, Link as LinkIcon, Edit2, Settings } from 'lucide-react';
import Image from 'next/image';
import PostCard from '@/components/ui/PostCard';

const user = {
  name: '山田太郎',
  username: '@yamada_taro',
  bio: 'プログラマーとして働いています。趣味は写真撮影と旅行です。\n\n#プログラミング #写真 #旅行',
  location: '東京都',
  joinedDate: '2023年1月',
  website: 'https://example.com',
  following: 234,
  followers: 567,
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  coverImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&h=500&q=80',
};

const userPosts = [
  {
    id: 1,
    user: {
      name: user.name,
      username: user.username,
      avatar: user.avatar,
    },
    content: '今日は素晴らしい天気ですね！散歩に行ってきました。\n\n#散歩 #自然 #写真',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80',
    likes: 42,
    comments: 5,
    shares: 2,
    timestamp: '2時間前',
    location: '東京都 代々木公園',
  },
  {
    id: 2,
    user: {
      name: user.name,
      username: user.username,
      avatar: user.avatar,
    },
    content: '新しいプロジェクトを始めました。頑張ります！\n\n#プログラミング #NextJS #TypeScript',
    likes: 28,
    comments: 3,
    shares: 1,
    timestamp: '4時間前',
  },
];

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="max-w-2xl mx-auto">
      {/* カバー画像 */}
      <div className="relative h-64 bg-gray-200 rounded-t-xl overflow-hidden">
        <Image
          src={user.coverImage}
          alt="カバー画像"
          fill
          className="object-cover"
          priority
        />
        <button className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-opacity">
          <Camera className="w-5 h-5" />
        </button>
      </div>

      {/* プロフィール情報 */}
      <div className="relative px-4 bg-white rounded-b-xl shadow-sm">
        <div className="absolute -top-16 left-4">
          <div className="relative">
            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden">
              <Image
                src={user.avatar}
                alt={user.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <button className="absolute bottom-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-opacity">
              <Camera className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="pt-20 pb-4">
          <div className="flex justify-end space-x-2 mb-4">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-4 py-2 border border-gray-300 rounded-full font-semibold hover:bg-gray-50 transition-colors flex items-center space-x-2"
            >
              <Edit2 className="w-4 h-4" />
              <span>{isEditing ? '保存' : 'プロフィールを編集'}</span>
            </button>
            <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
              <Settings className="w-5 h-5" />
            </button>
          </div>

          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="text-gray-500">{user.username}</p>

          <p className="my-4 whitespace-pre-wrap">{user.bio}</p>

          <div className="space-y-2 text-gray-500">
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span>{user.location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>{user.joinedDate}から利用</span>
            </div>
            <div className="flex items-center space-x-2">
              <LinkIcon className="w-5 h-5" />
              <a href={user.website} className="text-blue-500 hover:underline">
                {user.website}
              </a>
            </div>
          </div>

          <div className="flex space-x-4 mt-4">
            <div>
              <span className="font-semibold">{user.following}</span>
              <span className="text-gray-500"> フォロー中</span>
            </div>
            <div>
              <span className="font-semibold">{user.followers}</span>
              <span className="text-gray-500"> フォロワー</span>
            </div>
          </div>
        </div>
      </div>

      {/* 投稿一覧 */}
      <div className="mt-6 space-y-6">
        {userPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
} 