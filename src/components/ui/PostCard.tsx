'use client';

import { useState } from 'react';
import { Heart, MessageCircle, Share2, Bookmark, MapPin } from 'lucide-react';
import Image from 'next/image';

interface PostCardProps {
  post: {
    id: number;
    user: {
      name: string;
      username: string;
      avatar: string;
    };
    content: string;
    image?: string;
    likes: number;
    comments: number;
    shares: number;
    timestamp: string;
    location?: string;
  };
}

export default function PostCard({ post }: PostCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      {/* ヘッダー */}
      <div className="p-4 flex items-center space-x-3">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={post.user.avatar}
            alt={post.user.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="font-semibold">{post.user.name}</h3>
          <p className="text-gray-500 text-sm">{post.user.username}</p>
        </div>
      </div>

      {/* コンテンツ */}
      <div className="px-4">
        <p className="whitespace-pre-wrap">{post.content}</p>
        {post.image && (
          <div className="relative h-96 mt-4 rounded-xl overflow-hidden">
            <Image
              src={post.image}
              alt="投稿画像"
              fill
              className="object-cover"
            />
          </div>
        )}
        {post.location && (
          <div className="flex items-center text-gray-500 text-sm mt-2">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{post.location}</span>
          </div>
        )}
      </div>

      {/* アクションボタン */}
      <div className="px-4 py-3 flex items-center justify-between border-t border-gray-100">
        <div className="flex items-center space-x-4">
          <button
            onClick={handleLike}
            className={`flex items-center space-x-1 ${
              isLiked ? 'text-red-500' : 'text-gray-500'
            } hover:text-red-500 transition-colors`}
          >
            <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
            <span>{likesCount}</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500 transition-colors">
            <MessageCircle className="w-5 h-5" />
            <span>{post.comments}</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-500 hover:text-green-500 transition-colors">
            <Share2 className="w-5 h-5" />
            <span>{post.shares}</span>
          </button>
        </div>
        <button
          onClick={handleBookmark}
          className={`${
            isBookmarked ? 'text-blue-500' : 'text-gray-500'
          } hover:text-blue-500 transition-colors`}
        >
          <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-current' : ''}`} />
        </button>
      </div>

      {/* タイムスタンプ */}
      <div className="px-4 py-2 text-gray-500 text-sm border-t border-gray-100">
        {post.timestamp}
      </div>
    </div>
  );
} 