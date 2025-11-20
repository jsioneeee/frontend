"use client";

import { useEffect, useState, useRef } from "react";

const phrases = [
  { text: "Hi, I'm Jeremy!", highlight: [0, 2] },
  { text: "Aspiring Fullstack Developer", highlight: [0, 8] },
];

const typingSpeed = 150;
const pauseDuration = 1000;

export default function TypewriterText() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const currentPhrase = phrases[phraseIndex].text;
  const visibleText = currentPhrase.slice(0, charIndex);
  const [highlightStart, highlightEnd] = phrases[phraseIndex].highlight;

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      if (charIndex < currentPhrase.length) {
        setCharIndex((prev) => prev + 1);
      } else {
        timeoutRef.current = setTimeout(() => {
          setCharIndex(0);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }, pauseDuration);
      }
    }, typingSpeed);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [charIndex, phraseIndex]);

  let formattedOutput;

  if (charIndex >= highlightEnd) {
    formattedOutput = (
      <>
        {visibleText.slice(0, highlightStart)}
        <span className="text-red-500">
          {visibleText.slice(highlightStart, highlightEnd)}
        </span>
        {visibleText.slice(highlightEnd)}
      </>
    );
  } else {
    formattedOutput = <>{visibleText}</>;
  }

  return (
    <h2 className="text-3xl font-bold mb-4 pt-20 text-white">
      {formattedOutput}
      <span className="border-r-2 border-white animate-pulse ml-1">&nbsp;</span>
    </h2>
  );
}
