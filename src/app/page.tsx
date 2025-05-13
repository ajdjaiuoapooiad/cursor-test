'use client';

import { useState } from 'react';
import { Image as ImageIcon, Smile, MapPin } from 'lucide-react';
import PostCard from '@/components/ui/PostCard';

const dummyPosts = [
  {
    id: 1,
    user: {
      name: '山田太郎',
      username: '@yamada_taro',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
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
      name: '佐藤花子',
      username: '@sato_hanako',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    content: '新しいカフェを見つけました！コーヒーが美味しいです。\n\n#カフェ #コーヒー #東京',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80',
    likes: 35,
    comments: 4,
    shares: 1,
    timestamp: '3時間前',
    location: '東京都 渋谷区',
  },
  {
    id: 3,
    user: {
      name: '鈴木一郎',
      username: '@suzuki_ichiro',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    content: 'プログラミングの勉強を始めました。頑張ります！\n\n#プログラミング #学習 #初心者',
    likes: 28,
    comments: 3,
    shares: 1,
    timestamp: '4時間前',
  },
];

export default function Home() {
  const [posts, setPosts] = useState(dummyPosts);
  const [newPost, setNewPost] = useState('');

  const handlePost = () => {
    if (!newPost.trim()) return;

    const post = {
      id: posts.length + 1,
      user: {
        name: '山田太郎',
        username: '@yamada_taro',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      content: newPost,
      likes: 0,
      comments: 0,
      shares: 0,
      timestamp: '今',
    };

    setPosts([post, ...posts]);
    setNewPost('');
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* 投稿フォーム */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="いまどうしてる？"
          className="w-full h-24 p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />
        <div className="flex justify-between items-center mt-4">
          <div className="flex space-x-2">
            <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-full transition-colors">
              <ImageIcon className="w-5 h-5" />
            </button>
            <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-full transition-colors">
              <Smile className="w-5 h-5" />
            </button>
            <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-full transition-colors">
              <MapPin className="w-5 h-5" />
            </button>
          </div>
          <button
            onClick={handlePost}
            disabled={!newPost.trim()}
            className="px-4 py-2 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            投稿する
          </button>
        </div>
      </div>

      {/* 投稿一覧 */}
      <div className="space-y-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
