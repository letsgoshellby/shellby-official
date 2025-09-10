import { NotionAPI } from "notion-client";
import NewsClient from "./NewsClient";

const notion = new NotionAPI();

async function getNotionData() {
  try {
    // 여기에 Notion 페이지 ID 입력
    const testPageId = "26524a29a4fc8061a5a4dcde024d3d81";
    
    console.log("Fetching Notion page from server:", testPageId);
    const recordMap = await notion.getPage(testPageId);
    return recordMap;
  } catch (error) {
    console.error("Failed to fetch Notion page:", error);
    return null;
  }
}

export default async function NewsPage() {
  const recordMap = await getNotionData();

  return <NewsClient recordMap={recordMap} />;
}