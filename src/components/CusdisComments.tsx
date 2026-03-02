"use client";

import { useEffect, useRef } from "react";

export default function CusdisComments({
  pageId,
  pageUrl,
  pageTitle,
}: {
  pageId: string;
  pageUrl: string;
  pageTitle: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || ref.current.querySelector("script")) return;

    const script = document.createElement("script");
    script.src = "https://cusdis.com/js/cusdis.es.js";
    script.async = true;
    script.defer = true;
    ref.current.appendChild(script);
  }, []);

  return (
    <div className="cusdis-container">
      <div
        ref={ref}
        id="cusdis_thread"
        data-host="https://cusdis.com"
        data-app-id="990deb93-303b-4fe1-bfaa-c8f9e4b4f19d"
        data-page-id={pageId}
        data-page-url={pageUrl}
        data-page-title={pageTitle}
      />
    </div>
  );
}
