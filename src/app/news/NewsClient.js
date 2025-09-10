"use client";

import { NotionRenderer } from "react-notion-x";
import { Collection } from "react-notion-x/build/third-party/collection";
import { Modal } from "react-notion-x/build/third-party/modal";
import Image from "next/image";
import "react-notion-x/src/styles.css";

export default function NewsClient({ recordMap }) {
  if (!recordMap) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">News</h1>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <p className="text-gray-700 font-semibold mb-2">
            페이지를 불러올 수 없습니다
          </p>
          <div className="bg-white rounded p-3 border border-yellow-100 mt-3">
            <p className="text-xs text-gray-600 mb-2">체크리스트:</p>
            <ul className="text-xs text-gray-500 list-disc list-inside space-y-1">
              <li>Notion 페이지가 "Share to web"으로 공개되어 있는지 확인</li>
              <li>페이지 ID가 정확한지 확인 (하이픈 제거)</li>
              <li>URL 형식: notion.so/페이지제목-xxxxxxxxxxxxx</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">셸비 새소식</h1>
      
      {/* Notion 콘텐츠 렌더링 */}
      <div className="notion-renderer">
        <NotionRenderer
          recordMap={recordMap}
          fullPage={false}
          darkMode={false}
          disableHeader
          components={{
            Collection,
            Modal,
            nextImage: Image,
            // 중첩된 링크 문제 해결
            PageLink: ({ children, href, ...props }) => {
              return (
                <span 
                  className="notion-page-link cursor-pointer hover:underline"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = href;
                  }}
                  {...props}
                >
                  {children}
                </span>
              );
            }
          }}
          mapPageUrl={(pageId) => `/news/${pageId}`}
        />
      </div>
    </div>
  );
}