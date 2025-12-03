"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TitleProps {
  texts: string[];
  speed?: number;
  delay?: number;
}

const Title: React.FC<TitleProps> = ({ texts, speed = 100, delay = 1000 }) => {
  const [text, setText] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [deleting, setDeleting] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!deleting && charIndex < texts[index].length) {
          setText(texts[index].slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        } else if (deleting && charIndex > 0) {
          setText(texts[index].slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        } else {
          setTimeout(() => {
            setDeleting(!deleting);
            if (deleting) setIndex((prev) => (prev + 1) % texts.length);
          }, delay);
        }
      },
      deleting ? speed / 2 : speed
    );

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, index, texts, speed, delay]);

  return (
    <motion.h1
      className="animated-title text-1xl md:text-2xl lg:text-4xl font-bold text-center z-10"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {text}
      <span className="animate-blink">|</span>
      <style jsx>{`
        .animated-title {
          animation: textPulse 2s infinite alternate,
            rgbCycle 5s linear infinite;
        }
        @keyframes textPulse {
          0% {
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
          }
          100% {
            text-shadow: 0 0 20px rgba(255, 255, 255, 1);
          }
        }
        @keyframes rgbCycle {
          0% {
            color: #ff0000;
          }
          33% {
            color: #00ff00;
          }
          66% {
            color: #0000ff;
          }
          100% {
            color: #ff0000;
          }
        }
        @keyframes blink {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </motion.h1>
  );
};

export default Title;
