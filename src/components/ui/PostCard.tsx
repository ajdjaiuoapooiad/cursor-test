"use client";

import { useState } from "react";
import {
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  MapPin,
  Hash,
} from "lucide-react";
import Image from "next/image";

interface Post {
  id: number;
  user: {
    name: string;
    username: string;
    avatar: string;
    verified: boolean;
  };
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  timestamp: string;
  location?: string;
  hashtags: string[];
}

interface PostCardProps {
  post: Post;
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
    <article className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <Image
            src={post.user.avatar}
            alt={post.user.name}
            width={48}
            height={48}
            className="rounded-full"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2">
            <h3 className="text-lg font-semibold text-gray-900 truncate">
              {post.user.name}
            </h3>
            {post.user.verified && (
              <svg
                className="w-5 h-5 text-blue-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
              </svg>
            )}
            <span className="text-gray-500 text-sm">@{post.user.username}</span>
            <span className="text-gray-400 text-sm">·</span>
            <span className="text-gray-400 text-sm">{post.timestamp}</span>
          </div>

          <p className="mt-2 text-gray-800 whitespace-pre-wrap">
            {post.content}
          </p>

          {post.hashtags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {post.hashtags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                >
                  <Hash className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          )}

          {post.location && (
            <div className="mt-2 flex items-center text-gray-500 text-sm">
              <MapPin className="w-4 h-4 mr-1" />
              {post.location}
            </div>
          )}

          {post.image && (
            <div className="mt-4 relative rounded-xl overflow-hidden">
              <Image
                src={post.image}
                alt="投稿画像"
                width={800}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          <div className="mt-4 flex items-center space-x-8">
            <button className="flex items-center space-x-2 text-gray-500 hover:text-red-500 transition-colors">
              <Heart className="w-5 h-5" />
              <span className="text-sm">{post.likes.toLocaleString()}</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm">{post.comments.toLocaleString()}</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500 transition-colors">
              <Share2 className="w-5 h-5" />
              <span className="text-sm">{post.shares.toLocaleString()}</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
