"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, Send, Paperclip, Smile } from "lucide-react";

const conversations = [
  {
    id: 1,
    user: {
      name: "佐藤花子",
      username: "@sato_hanako",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      verified: true,
    },
    lastMessage: "明日のミーティングの時間を確認させてください。",
    timestamp: "5分前",
    unread: true,
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
    lastMessage: "新しいプロジェクトの進捗状況を共有します。",
    timestamp: "1時間前",
    unread: false,
  },
  {
    id: 3,
    user: {
      name: "田中美咲",
      username: "@tanaka_misaki",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      verified: true,
    },
    lastMessage: "デザインのフィードバックをお願いします。",
    timestamp: "2時間前",
    unread: false,
  },
];

const messages = [
  {
    id: 1,
    sender: {
      name: "佐藤花子",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    content: "こんにちは！明日のミーティングの時間を確認させてください。",
    timestamp: "10:30",
  },
  {
    id: 2,
    sender: {
      name: "山田太郎",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    content: "こんにちは！明日の14:00からでいかがでしょうか？",
    timestamp: "10:32",
  },
  {
    id: 3,
    sender: {
      name: "佐藤花子",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    content: "14:00で問題ありません。よろしくお願いします！",
    timestamp: "10:33",
  },
];

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(
    conversations[0]
  );
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    // メッセージ送信のロジックをここに実装
    setNewMessage("");
  };

  return (
    <div className="max-w-7xl mx-auto h-[calc(100vh-4rem)]">
      <div className="flex h-full">
        {/* 会話一覧 */}
        <div className="w-80 border-r border-gray-100 flex flex-col">
          <div className="p-4 border-b border-gray-100">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="メッセージを検索..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-full text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {conversations.map((conversation) => (
              <button
                key={conversation.id}
                onClick={() => setSelectedConversation(conversation)}
                className={`w-full p-4 flex items-start space-x-3 hover:bg-gray-50 transition-colors ${
                  selectedConversation.id === conversation.id
                    ? "bg-blue-50"
                    : ""
                }`}
              >
                <div className="relative">
                  <Image
                    src={conversation.user.avatar}
                    alt={conversation.user.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  {conversation.unread && (
                    <span className="absolute top-0 right-0 w-3 h-3 bg-blue-500 rounded-full" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <p className="text-sm font-semibold text-gray-900 truncate">
                      {conversation.user.name}
                    </p>
                    {conversation.user.verified && (
                      <svg
                        className="w-4 h-4 text-blue-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                      </svg>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 truncate">
                    {conversation.lastMessage}
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xs text-gray-400">
                    {conversation.timestamp}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* メッセージ表示エリア */}
        <div className="flex-1 flex flex-col">
          {selectedConversation ? (
            <>
              {/* ヘッダー */}
              <div className="p-4 border-b border-gray-100 flex items-center space-x-3">
                <Image
                  src={selectedConversation.user.avatar}
                  alt={selectedConversation.user.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <div className="flex items-center space-x-2">
                    <h2 className="text-lg font-semibold text-gray-900">
                      {selectedConversation.user.name}
                    </h2>
                    {selectedConversation.user.verified && (
                      <svg
                        className="w-5 h-5 text-blue-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                      </svg>
                    )}
                  </div>
                  <p className="text-sm text-gray-500">
                    {selectedConversation.user.username}
                  </p>
                </div>
              </div>

              {/* メッセージ一覧 */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.sender.name === "山田太郎"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`flex items-start space-x-2 max-w-[70%] ${
                        message.sender.name === "山田太郎"
                          ? "flex-row-reverse space-x-reverse"
                          : ""
                      }`}
                    >
                      <Image
                        src={message.sender.avatar}
                        alt={message.sender.name}
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                      <div
                        className={`rounded-2xl px-4 py-2 ${
                          message.sender.name === "山田太郎"
                            ? "bg-blue-500 text-white"
                            : "bg-gray-100 text-gray-900"
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <span
                          className={`text-xs mt-1 block ${
                            message.sender.name === "山田太郎"
                              ? "text-blue-100"
                              : "text-gray-500"
                          }`}
                        >
                          {message.timestamp}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* メッセージ入力エリア */}
              <div className="p-4 border-t border-gray-100">
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-500 hover:text-blue-500 hover:bg-blue-50 rounded-full transition-colors">
                    <Paperclip className="w-5 h-5" />
                  </button>
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="メッセージを入力..."
                    className="flex-1 px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="p-2 text-gray-500 hover:text-blue-500 hover:bg-blue-50 rounded-full transition-colors">
                    <Smile className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleSendMessage}
                    disabled={!newMessage.trim()}
                    className="p-2 text-blue-500 hover:bg-blue-50 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-500">
              会話を選択してください
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
