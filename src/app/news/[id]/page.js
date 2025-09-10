import { NotionAPI } from "notion-client";
import NewsDetailClient from "./NewsDetailClient";

const notion = new NotionAPI();

async function getPageData(pageId) {
  try {
    // 하이픈 제거 (URL에서 복사한 ID에 하이픈이 있을 수 있음)
    const cleanId = pageId.replace(/-/g, '');
    console.log("Fetching page from server:", cleanId);
    
    const recordMap = await notion.getPage(cleanId);
    return { recordMap, error: null };
  } catch (error) {
    console.error("Failed to fetch page:", error);
    return { recordMap: null, error: error.message };
  }
}

export default async function NewsDetailPage({ params }) {
  const resolvedParams = await params;
  const { recordMap, error } = await getPageData(resolvedParams.id);

  return (
    <NewsDetailClient 
      recordMap={recordMap} 
      error={error}
      pageId={resolvedParams.id}
    />
  );
}