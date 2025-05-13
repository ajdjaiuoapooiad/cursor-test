"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, MessageSquare, Share2, UserPlus, Bell } from "lucide-react";

const notifications = [
  {
    id: 1,
    type: "like",
    user: {
      name: "佐藤花子",
      username: "@sato_hanako",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      verified: true,
    },
    content: "あなたの投稿にいいねしました",
    timestamp: "5分前",
    post: {
      content: "新しいプロジェクトを始めました！",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
    },
  },
  {
    id: 2,
    type: "comment",
    user: {
      name: "鈴木一郎",
      username: "@suzuki_ichiro",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      verified: false,
    },
    content: "あなたの投稿にコメントしました",
    timestamp: "10分前",
    post: {
      content: "今日の開発の進捗状況を共有します。",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
    },
  },
  {
    id: 3,
    type: "follow",
    user: {
      name: "田中美咲",
      username: "@tanaka_misaki",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      verified: true,
    },
    content: "あなたをフォローしました",
    timestamp: "1時間前",
  },
  {
    id: 4,
    type: "share",
    user: {
      name: "高橋健太",
      username: "@takahashi_kenta",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      verified: false,
    },
    content: "あなたの投稿をシェアしました",
    timestamp: "2時間前",
    post: {
      content: "面白い記事を見つけました！",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
    },
  },
];

const notificationTypes = [
  { id: "all", name: "すべて", icon: Bell },
  { id: "likes", name: "いいね", icon: Heart },
  { id: "comments", name: "コメント", icon: MessageSquare },
  { id: "follows", name: "フォロー", icon: UserPlus },
  { id: "shares", name: "シェア", icon: Share2 },
];

export default function NotificationsPage() {
  const [activeType, setActiveType] = useState("all");

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "like":
        return <Heart className="w-5 h-5 text-red-500" />;
      case "comment":
        return <MessageSquare className="w-5 h-5 text-blue-500" />;
      case "follow":
        return <UserPlus className="w-5 h-5 text-green-500" />;
      case "share":
        return <Share2 className="w-5 h-5 text-purple-500" />;
      default:
        return <Bell className="w-5 h-5 text-gray-500" />;
    }
  };

  const filteredNotifications = notifications.filter(
    (notification) => activeType === "all" || notification.type === activeType
  );

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        {/* ヘッダー */}
        <div className="px-4 py-3 border-b border-gray-100">
          <h1 className="text-xl font-bold text-gray-900">通知</h1>
        </div>

        {/* 通知タイプフィルター */}
        <div className="px-4 py-2 border-b border-gray-100">
          <div className="flex space-x-2 overflow-x-auto">
            {notificationTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveType(type.id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeType === type.id
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <type.icon className="w-4 h-4" />
                <span>{type.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 通知一覧 */}
        <div className="divide-y divide-gray-100">
          {filteredNotifications.map((notification) => (
            <div
              key={notification.id}
              className="p-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex space-x-3">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <Image
                      src={notification.user.avatar}
                      alt={notification.user.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    {notification.user.verified && (
                      <span className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                        </svg>
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <p className="text-sm text-gray-900">
                      <span className="font-semibold">
                        {notification.user.name}
                      </span>
                      {" " + notification.content}
                    </p>
                    {getNotificationIcon(notification.type)}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {notification.timestamp}
                  </p>
                  {notification.post && (
                    <div className="mt-2 p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-900 line-clamp-2">
                        {notification.post.content}
                      </p>
                      {notification.post.image && (
                        <div className="mt-2 relative h-32 rounded-lg overflow-hidden">
                          <Image
                            src={notification.post.image}
                            alt="投稿画像"
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
