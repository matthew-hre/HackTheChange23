"use client";

import { useRef } from "react";

const ChatInterfaceClient = ({
  handleSendServer,
  messages,
}: {
  handleSendServer: (message: string) => void;
  messages: string[];
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      const message = inputRef.current.value;
      handleSendServer(message);
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  };

  return (
    <div
      className="flex flex-col
        w-full h-full
        bg-background2 rounded-xl
        p-4
        "
    >
      <div className="flex flex-col gap-2">
        {messages.map((message) => (
          <div className="flex flex-col gap-1" key={message}>
            <p className="text-sm">{message}</p>
          </div>
        ))}
      </div>
      <form className="flex gap-2" onSubmit={handleSend}>
        <input
          className="flex-grow rounded-md bg-background3 p-2"
          type="text"
          placeholder="Type a message..."
          ref={inputRef}
        />
        <button className="rounded-md bg-btn-background hover:bg-btn-background-hover p-2">
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatInterfaceClient;
