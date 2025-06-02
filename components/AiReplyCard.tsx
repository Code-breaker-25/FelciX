"use client";

import { motion } from "framer-motion";

type AiReplyCardProps = {
  content: string;
  timestamp: string;
};

const AiReplyCard = ({ content, timestamp }: AiReplyCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <div className="flex flex-col items-start mb-4">
        <div className="flex items-center mb-1">
          <div className="w-8 h-8 rounded-full bg-green-700 mr-2 flex items-center justify-center text-white">
            <span className="text-m">N</span>
          </div>
          <span className="font-medium">Neostats AI</span>
          <span className="text-sm text-gray-500 ml-2">{timestamp}</span> {/* <-- dynamic timestamp */}
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 w-full ml-2">
          <div className="text-gray-800 whitespace-pre-wrap break-words">
            {content} {/* <-- dynamic content */}
          </div>

          <div className="flex justify-between items-center mt-4">
            <div className="flex space-x-2">
              {/* Reply Button */}
              <button className="text-gray-400 hover:text-gray-600">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 12L20 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 6L3 12L9 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Square Button */}
              <button className="text-gray-400 hover:text-gray-600">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="4"
                    y="4"
                    width="16"
                    height="16"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Upload Button */}
              <button className="text-gray-400 hover:text-gray-600">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 12V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 6L12 2L8 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 2V15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Bookmark Button */}
              <button className="text-gray-400 hover:text-gray-600">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Menu Dots Button */}
              <button className="text-gray-400 hover:text-gray-600">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="1"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="19"
                    cy="12"
                    r="1"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="5"
                    cy="12"
                    r="1"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AiReplyCard;
