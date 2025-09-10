"use client";

import { NotionRenderer } from "react-notion-x";
import { Collection } from "react-notion-x/build/third-party/collection";
import { Modal } from "react-notion-x/build/third-party/modal";
import Image from "next/image";
import Link from "next/link";
import "react-notion-x/src/styles.css";

export default function NewsDetailClient({ recordMap, error, pageId }) {
  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Link href="/news" className="text-blue-600 hover:underline mb-4 inline-block">
          ← 뉴스 목록으로 돌아가기
        </Link>
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-red-800 mb-2">
            페이지를 불러올 수 없습니다
          </h2>
          <p className="text-red-600">
            오류: {error}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            페이지 ID: {pageId}
          </p>
        </div>
      </div>
    );
  }

  if (!recordMap) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Link href="/news" className="text-blue-600 hover:underline mb-4 inline-block">
          ← 뉴스 목록으로 돌아가기
        </Link>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <p className="text-gray-700">
            콘텐츠를 찾을 수 없습니다.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/news" className="text-blue-600 hover:underline mb-6 inline-block">
        ← 뉴스 목록으로 돌아가기
      </Link>
      
      <div className="notion-renderer">
        <NotionRenderer
          recordMap={recordMap}
          fullPage={false}
          darkMode={false}
          disableHeader
          components={{
            Collection,
            Modal,
            nextImage: Image
          }}
          mapPageUrl={(pageId) => `/news/${pageId}`}
        />
      </div>
    </div>
  );
}