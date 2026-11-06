"use client";

import { useState } from "react";

export default function CopyPromptButton({ prompt }: { prompt: string }) {
  const [copied, setCopied] = useState(false);

  const copyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable, ignore */
    }
  };

  return (
    <button
      type="button"
      onClick={copyPrompt}
      className="vr-btn mt-4 rounded-md border border-navy-950/15 bg-white px-4 py-2 text-xs font-semibold text-navy-950 transition-colors hover:border-brand-600 hover:text-brand-600"
    >
      {copied ? "Copied!" : "Copy prompt"}
    </button>
  );
}
