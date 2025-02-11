import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "github-markdown-css/github-markdown.css";

interface MarkdownReaderProps {
  filePath: string; 
}

const MarkdownReader: React.FC<MarkdownReaderProps> = ({ filePath }) => {
  const [markdownContent, setMarkdownContent] = useState<string>("");

  useEffect(() => {
    fetch(filePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch Markdown file: ${response.statusText}`);
        }
        return response.text();
      })
      .then((text) => setMarkdownContent(text))
      .catch((error) => console.error(error));
  }, [filePath]);

  return (
    <div className="markdown-body rounded-md p-5 bg-indigo-50">
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  );
};

export default MarkdownReader;
