"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function TermsPage() {
  const [termsContent, setTermsContent] = useState("");

  useEffect(() => {
    fetch("/docs/서비스 이용약관 23a24a29a4fc80729f63cb1be69ff450.md")
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
          .replace(/^⑥ (.+)$/gm, '<p class="indent1">⑥ $1</p>')
          .replace(/^⑦ (.+)$/gm, '<p class="indent1">⑦ $1</p>')
          .replace(/^⑧ (.+)$/gm, '<p class="indent1">⑧ $1</p>')
          .replace(/^⑨ (.+)$/gm, '<p class="indent1">⑨ $1</p>')
          .replace(/^- (.+)$/gm, '<li>$1</li>')
          .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
          .replace(/\n\n/g, '</p><p>')
          .replace(/^<p>$/gm, '')
          .replace(/^<\/p>$/gm, '');
        setTermsContent(`<div class="terms-content">${htmlContent}</div>`);
      });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div dangerouslySetInnerHTML={{ __html: termsContent }} />
      </div>
    </div>
  );
}