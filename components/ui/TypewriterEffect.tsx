"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // Join all words to create the complete phrase
  const fullPhrase = words.map(w => w.text).join(" ");
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const typingSpeed = 70; // ms per character
  const erasingSpeed = 40; // ms per character
  const pauseDelay = 1000; // ms to pause at complete phrase

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isTyping) {
      // Still typing
      if (displayText.length < fullPhrase.length) {
        timeout = setTimeout(() => {
          setDisplayText(fullPhrase.substring(0, displayText.length + 1));
        }, typingSpeed);
      } 
      // Done typing, pause before erasing
      else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, pauseDelay);
      }
    } else {
      // Erasing
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, erasingSpeed);
      } 
      // Done erasing, start typing again
      else {
        timeout = setTimeout(() => {
          setIsTyping(true);
        }, pauseDelay);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [displayText, isTyping, fullPhrase]);

  // Function to render text with proper word styling
  const renderText = () => {
    let currentPosition = 0;
    return words.map((word, wordIndex) => {
      const wordStart = fullPhrase.indexOf(word.text, currentPosition);
      const wordEnd = wordStart + word.text.length;
      currentPosition = wordEnd;

      // Check if this word is currently visible in displayText
      if (wordStart >= displayText.length) {
        return null; // Word not visible yet
      }

      // Get the visible part of this word
      const visiblePortion = displayText.substring(
        wordStart,
        Math.min(wordEnd, displayText.length)
      );
      
      // Add spacing between words
      const spacing = wordIndex > 0 ? " " : "";
      
      return (
        <span
          key={`word-${wordIndex}`}
          className={cn(word.className)}
        >
          {wordIndex > 0 && wordStart - 1 < displayText.length ? spacing : ""}
          {visiblePortion}
        </span>
      );
    });
  };
  
  return (
    <div className={cn("flex space-x-1 my-6", className)}>
      <div className="overflow-hidden">
        <div
          className="text-xs sm:text-base md:text-xl lg:text-3xl xl:text-5xl font-bold text-[#00412E]"
          style={{ whiteSpace: "nowrap" }}
        >
          {renderText()}
        </div>
      </div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "block rounded-sm w-[4px] h-4 sm:h-6 xl:h-12 bg-[#96BF8A]",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};

// Keep the original export for compatibility
export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // Join all words to create the complete phrase
  const fullPhrase = words.map(w => w.text).join(" ");
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isTyping) {
      if (displayText.length < fullPhrase.length) {
        timeout = setTimeout(() => {
          setDisplayText(fullPhrase.substring(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 1000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, 50);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(true);
        }, 500);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [displayText, isTyping, fullPhrase]);

  return (
    <div
      className={cn(
        "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center text-[#00412E]",
        className
      )}
    >
      <span>{displayText}</span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-[#96BF8A]",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};