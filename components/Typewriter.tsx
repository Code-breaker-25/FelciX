"use client";
import { TypewriterEffectSmooth } from "@/components/ui/TypewriterEffect";

export default function Typewriter() {
  const words = [
    {
      text: "Chat",
    },
    {
      text: "smarter",
    },
    {
      text: "with",
    },
    {
      text: "Neostats AI",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-[30rem]">
      <p className="text-[#00412E] text-[10px] sm:text-sm mb-1">
        Your AI assistant journey begins here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 mt-4 w-full max-w-3xl">
        {/* Suggestion Card 1 */}
        <div className="group cursor-pointer transition-all duration-300 hover:-translate-y-1">
          <div className="bg-[#96BF8A] rounded-lg p-0.5 shadow-md group-hover:shadow-lg">
            <div className="bg-[#E8EAE5] rounded-lg p-3 flex flex-col items-center justify-center h-24">
              <h3 className="text-[#00412E] text-base font-medium mb-1">
                Content Writing
              </h3>
              <p className="text-[#00412E] text-xs opacity-80 text-center">
                Create blogs, essays, and stories
              </p>
            </div>
          </div>
        </div>

        {/* Suggestion Card 2 */}
        <div className="group cursor-pointer transition-all duration-300 hover:-translate-y-1">
          <div className="bg-[#96BF8A] rounded-lg p-0.5 shadow-md group-hover:shadow-lg">
            <div className="bg-[#E8EAE5] rounded-lg p-3 flex flex-col items-center justify-center h-24">
              <h3 className="text-[#00412E] text-base font-medium mb-1">
                Code Assistant
              </h3>
              <p className="text-[#00412E] text-xs opacity-80 text-center">
                Debug, optimize, learn coding
              </p>
            </div>
          </div>
        </div>

        {/* Suggestion Card 3 */}
        <div className="group cursor-pointer transition-all duration-300 hover:-translate-y-1">
          <div className="bg-[#96BF8A] rounded-lg p-0.5 shadow-md group-hover:shadow-lg">
            <div className="bg-[#E8EAE5] rounded-lg p-3 flex flex-col items-center justify-center h-24">
              <h3 className="text-[#00412E] text-base font-medium mb-1">
                Research Help
              </h3>
              <p className="text-[#00412E] text-xs opacity-80 text-center">
                Summarize and analyze information
              </p>
            </div>
          </div>
        </div>

        {/* Suggestion Card 4 */}
        <div className="group cursor-pointer transition-all duration-300 hover:-translate-y-1">
          <div className="bg-[#96BF8A] rounded-lg p-0.5 shadow-md group-hover:shadow-lg">
            <div className="bg-[#E8EAE5] rounded-lg p-3 flex flex-col items-center justify-center h-24">
              <h3 className="text-[#00412E] text-base font-medium mb-1">
                Creative Ideas
              </h3>
              <p className="text-[#00412E] text-xs opacity-80 text-center">
                Brainstorm concepts and solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
