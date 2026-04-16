"use client";
import ReactMarkdown from "react-markdown";
import React, { useEffect, useState } from "react";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import styles from "./markdown.module.css";

const PRIVACY_TABS = [
  { label: "학부모", href: "/terms/client/privacy", type: "client" },
  { label: "전문가", href: "/terms/expert/privacy", type: "expert" },
];

const SERVICE_TABS = [
  { label: "학부모", href: "/terms/client/service_terms", type: "client" },
  { label: "전문가", href: "/terms/expert/service_terms", type: "expert" },
];

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
        {props.tabType && (
          <div style={{ display: "flex", gap: "0", marginBottom: "24px", borderBottom: "2px solid #e5e7eb" }}>
            {(props.tabGroup === "service" ? SERVICE_TABS : PRIVACY_TABS).map((tab) => {
              const isActive = tab.type === props.tabType;
              return (
                <Link
                  key={tab.type}
                  href={tab.href}
                  style={{
                    padding: "10px 24px",
                    fontSize: "15px",
                    fontWeight: isActive ? "700" : "400",
                    color: isActive ? "#0d9488" : "#6b7280",
                    borderBottom: isActive ? "2px solid #0d9488" : "2px solid transparent",
                    marginBottom: "-2px",
                    textDecoration: "none",
                    transition: "color 0.15s",
                  }}
                >
                  {tab.label}
                </Link>
              );
            })}
          </div>
        )}
        <div className={styles.markdownContent}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {markdown}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  )
}
