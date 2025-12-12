import React from "react";
import "./SimpleMarkdown.css";

const SimpleMarkdown = ({ content }) => {
  if (!content) return null;

  // Split content by newlines to process blocks
  const lines = content.split("\n");
  const elements = [];

  let currentList = null;
  let listType = null; // 'ul' or 'ol'
  let inTable = false;
  let tableHeaders = [];
  let tableRows = [];

  const flushList = (index) => {
    if (currentList) {
      elements.push(
        listType === "ul" ? (
          <ul key={`list-${index}`} className="markdown-ul">
            {currentList}
          </ul>
        ) : (
          <ol key={`list-${index}`} className="markdown-ol">
            {currentList}
          </ol>
        )
      );
      currentList = null;
      listType = null;
    }
  };

  const flushTable = (index) => {
    if (inTable && tableHeaders.length > 0) {
      elements.push(
        <table key={`table-${index}`} className="markdown-table">
          <thead>
            <tr>
              {tableHeaders.map((header, i) => (
                <th key={i}>{parseInline(header)}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{parseInline(cell)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
      inTable = false;
      tableHeaders = [];
      tableRows = [];
    }
  };

  lines.forEach((line, index) => {
    const trimmedLine = line.trim();

    // Empty line - flush current blocks
    if (!trimmedLine) {
      flushList(index);
      flushTable(index);
      return;
    }

    // Horizontal rule
    if (
      trimmedLine === "---" ||
      trimmedLine === "***" ||
      trimmedLine === "___"
    ) {
      flushList(index);
      flushTable(index);
      elements.push(<hr key={index} className="markdown-hr" />);
      return;
    }

    // Table detection
    if (trimmedLine.includes("|")) {
      flushList(index);

      const cells = trimmedLine
        .split("|")
        .map((cell) => cell.trim())
        .filter((cell) => cell);

      // Check if it's a separator row (|:---|:---|)
      if (cells.every((cell) => /^:?-+:?$/.test(cell))) {
        // This is the alignment row, skip it
        return;
      }

      // First table row becomes headers
      if (!inTable) {
        inTable = true;
        tableHeaders = cells;
      } else {
        // Subsequent rows are data
        tableRows.push(cells);
      }
      return;
    }

    // If we were in a table but hit a non-table line, flush table
    if (inTable) {
      flushTable(index);
    }

    // Blockquote
    if (trimmedLine.startsWith("> ")) {
      flushList(index);
      elements.push(
        <blockquote key={index} className="markdown-blockquote">
          {parseInline(trimmedLine.substring(2))}
        </blockquote>
      );
      return;
    }

    // Headers
    if (trimmedLine.startsWith("### ")) {
      flushList(index);
      elements.push(
        <h3 key={index} className="markdown-h3">
          {parseInline(trimmedLine.substring(4))}
        </h3>
      );
    } else if (trimmedLine.startsWith("## ")) {
      flushList(index);
      elements.push(
        <h2 key={index} className="markdown-h2">
          {parseInline(trimmedLine.substring(3))}
        </h2>
      );
    } else if (trimmedLine.startsWith("# ")) {
      flushList(index);
      elements.push(
        <h1 key={index} className="markdown-h1">
          {parseInline(trimmedLine.substring(2))}
        </h1>
      );
    }
    // Unordered List
    else if (trimmedLine.startsWith("- ") || trimmedLine.startsWith("* ")) {
      if (!currentList || listType !== "ul") {
        if (currentList) {
          elements.push(
            <ol key={`list-prev-${index}`} className="markdown-ol">
              {currentList}
            </ol>
          );
        }
        currentList = [];
        listType = "ul";
      }
      currentList.push(
        <li key={index}>{parseInline(trimmedLine.substring(2))}</li>
      );
    }
    // Ordered List (simple check for "1. ")
    else if (/^\d+\.\s/.test(trimmedLine)) {
      if (!currentList || listType !== "ol") {
        if (currentList) {
          elements.push(
            <ul key={`list-prev-${index}`} className="markdown-ul">
              {currentList}
            </ul>
          );
        }
        currentList = [];
        listType = "ol";
      }
      currentList.push(
        <li key={index}>{parseInline(trimmedLine.replace(/^\d+\.\s/, ""))}</li>
      );
    }
    // Paragraphs
    else {
      flushList(index);
      elements.push(
        <p key={index} className="markdown-p">
          {parseInline(trimmedLine)}
        </p>
      );
    }
  });

  // Flush remaining blocks
  flushList(lines.length);
  flushTable(lines.length);

  return <div className="simple-markdown">{elements}</div>;
};

// Helper to parse bold (**text**), italic (*text*), and HTML tags
const parseInline = (text) => {
  if (!text) return null;

  const elements = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    // Check for <br> or <br/> or <br />
    const brMatch = remaining.match(/^(.*?)<br\s*\/?>/);
    if (brMatch) {
      if (brMatch[1]) {
        elements.push(...parseSimpleInline(brMatch[1], key++));
      }
      elements.push(<br key={key++} />);
      remaining = remaining.substring(brMatch[0].length);
      continue;
    }

    // Check for <small>...</small>
    const smallMatch = remaining.match(/^(.*?)<small>(.*?)<\/small>/);
    if (smallMatch) {
      if (smallMatch[1]) {
        elements.push(...parseSimpleInline(smallMatch[1], key++));
      }
      elements.push(
        <small key={key++}>{parseSimpleInline(smallMatch[2], key++)}</small>
      );
      remaining = remaining.substring(smallMatch[0].length);
      continue;
    }

    // Check for <div class="disclaimer-notice">...</div>
    const disclaimerMatch = remaining.match(
      /^(.*?)<div class="disclaimer-notice">(.*?)<\/div>/
    );
    if (disclaimerMatch) {
      if (disclaimerMatch[1]) {
        elements.push(...parseSimpleInline(disclaimerMatch[1], key++));
      }
      elements.push(
        <div key={key++} className="disclaimer-notice">
          {parseSimpleInline(disclaimerMatch[2], key++)}
        </div>
      );
      remaining = remaining.substring(disclaimerMatch[0].length);
      continue;
    }

    // No more HTML tags, parse the rest
    elements.push(...parseSimpleInline(remaining, key++));
    break;
  }

  return elements.length === 1 ? elements[0] : elements;
};

// Helper to parse bold (**text**) and PuntoMigrare branding
const parseSimpleInline = (text, startKey = 0) => {
  if (!text) return [];

  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g);
  const elements = [];

  parts.forEach((part, i) => {
    if (!part) return;

    // Bold text
    if (part.startsWith("**") && part.endsWith("**")) {
      const content = part.substring(2, part.length - 2);
      elements.push(<strong key={`${startKey}-${i}`}>{content}</strong>);
      return;
    }

    // Italic text
    if (part.startsWith("*") && part.endsWith("*") && !part.startsWith("**")) {
      const content = part.substring(1, part.length - 1);
      elements.push(<em key={`${startKey}-${i}`}>{content}</em>);
      return;
    }

    // Check for PuntoMigrare in plain text
    if (part.includes("PuntoMigrare")) {
      const subParts = part.split(/(PuntoMigrare)/g);
      subParts.forEach((subPart, j) => {
        if (subPart === "PuntoMigrare") {
          elements.push(
            <span key={`${startKey}-${i}-${j}`}>
              <span style={{ color: "#f78d23" }}>Punto</span>Migrare
            </span>
          );
        } else if (subPart) {
          elements.push(subPart);
        }
      });
      return;
    }

    elements.push(part);
  });

  return elements;
};

export default SimpleMarkdown;
