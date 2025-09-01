"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function PrivacyPage() {
  const [privacyContent, setPrivacyContent] = useState("");

  useEffect(() => {
    fetch("/docs/개인정보 처리방침 23824a29a4fc802f9c81e5db9efd5a4f.md")
      .then(response => response.text())
      .then(text => {
        const htmlContent = text
          .replace(/^# (.+)$/gm, '<h1>$1</h1>')
          .replace(/^## (.+)$/gm, '<h2>$1</h2>')
          .replace(/^### (.+)$/gm, '<h3>$1</h3>')
          .replace(/^① (.+)$/gm, '<p class="indent1">① $1</p>')
          .replace(/^② (.+)$/gm, '<p class="indent1">② $1</p>')
          .replace(/^③ (.+)$/gm, '<p class="indent1">③ $1</p>')
          .replace(/^④ (.+)$/gm, '<p class="indent1">④ $1</p>')
          .replace(/^⑤ (.+)$/gm, '<p class="indent1">⑤ $1</p>')
          .replace(/^- (.+)$/gm, '<li>$1</li>')
          .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
          .replace(/\|(.+)\|/g, (match) => {
            const cells = match.split('|').filter(cell => cell.trim());
            if (cells.every(cell => cell.includes('---'))) {
              return '';
            }
            const isHeader = cells.some(cell => cell.includes('구분') || cell.includes('수집 항목'));
            const tag = isHeader ? 'th' : 'td';
            return `<tr>${cells.map(cell => `<${tag}>${cell.trim()}</${tag}>`).join('')}</tr>`;
          })
          .replace(/<tr>/g, '<table><tbody><tr>')
          .replace(/<\/tr>(?!.*<tr>)/g, '</tr></tbody></table>')
          .replace(/\n\n/g, '</p><p>')
          .replace(/^<p>$/gm, '')
          .replace(/^<\/p>$/gm, '');
        setPrivacyContent(`<div class="privacy-content">${htmlContent}</div>`);
      });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div dangerouslySetInnerHTML={{ __html: privacyContent }} />
      </div>
    </div>
  );
}