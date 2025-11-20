"use client";

import dynamic from "next/dynamic";

const TypewriterText = dynamic(() => import("./TypewriterText"), {
  ssr: false,
});

export default function TypewriterWrapper() {
  return <TypewriterText />;
}
