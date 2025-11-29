"use client";

import { LinkIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

export default function ShareLinkButton() {
  const [copied, setCopied] = useState(false);
  function handleClick() {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-1 px-2 py-1 text-sm text-gray-500 border rounded hover:bg-gray-200 hover:text-gray-700"
    >
      <LinkIcon className="w-4 h-4" />
      {copied ? "Link Copied" : "Share Link"}
    </button>
  );
}
