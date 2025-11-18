"use client";
import ReactMarkdown from "react-markdown";
import React, { useEffect, useState } from "react";
import remarkGfm from "remark-gfm";
import styles from "./markdown.module.css";

export default function TermsBase(props) {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(props.location)
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, [props.location]);

  return (
    <div style={{ width: "100%", justifyContent: "center", display: "flex" }}>
      <div style={{ maxWidth: "768px", width: "100%" }}>
        <div className={styles.markdownContent}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {markdown}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  )
}
