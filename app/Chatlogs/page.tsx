import { SidebarDemo } from "@/components/Layout/Sidebar";

const Chatlogs = () => {
  const chatData = [
    {
      id: 1,
      sender: "User",
      message: "Hello! How are you?",
      timestamp: "2025-04-27 10:00 AM",
    },
    {
      id: 2,
      sender: "AI",
      message: "I'm doing well, thank you! How can I assist you today?",
      timestamp: "2025-04-27 10:02 AM",
    },
    {
      id: 3,
      sender: "User",
      message: "I wanted to check the status of my project.",
      timestamp: "2025-04-27 10:03 AM",
    },
    {
      id: 4,
      sender: "AI",
      message: "Let me pull up the latest information for you.",
      timestamp: "2025-04-27 10:04 AM",
    },
  ];

  return (
    <SidebarDemo>
      <div className="flex flex-col flex-1 p-2">
        <div className="flex h-full w-full flex-1 flex-col rounded-tl-xl border border-neutral-200 bg-[#E8EAE5] p-1 md:p-3">
          <h1 className="text-2xl font-semibold text-[#00412E] mb-3 ml-3">Chat Logs</h1>
          <div className="space-y-2 max-w-5xl ml-10">
            {chatData.map((chat) => (
              <div
                key={chat.id}
                className="bg-[#E8EAE5] border border-[#96BF8A] p-2 rounded-lg shadow-sm transition-transform transform hover:scale-[1.02] hover:shadow-md"
              >
                <div className="flex justify-between items-center mb-1">
                  <span
                    className={`text-sm text-[#00412E] font-semibold ${chat.sender === "AI" ? "italic" : ""}`}
                  >
                    {chat.sender}
                  </span>
                  <span className="text-xs text-[#00412E]">{chat.timestamp}</span>
                </div>
                <p className="text-sm text-[#00412E]">{chat.message}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SidebarDemo>
  );
};

export default Chatlogs;
