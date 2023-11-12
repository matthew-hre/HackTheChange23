"use client";

import { useEffect, useRef, useState } from "react";
import { HiPaperAirplane } from "react-icons/hi";



  // add to messages state


const ChatInterfaceClient = ({
  handleSendServer,
  // messages,
}: {
  handleSendServer: (message: string) => void;
  // messages: { content: string; fromUser: boolean; timestamp: Date }[];
}) => {


  const [messages, setMessages] = useState([
    {
      content: "Hello",
      fromUser: true,
      timestamp: new Date(),
    },
    {
      content: "Hey! How can I help you Today?",
      fromUser: false,
      timestamp: new Date(),
    },
  ]);
  
  useEffect(() => {
    // fetch from http://localhost:3001/messages
  
    try {
      fetch("http://localhost:3001/messages")
        .then((response) => response.json())
        .then((data) => {
          setMessages(data);
        }).catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);

    }
    
    });


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
      // stick at the bottom of the screen
      className="flex flex-col gap-2 w-full h-full p-2 bg-background2 justify-between rounded-t-md"
    >
      <div className="flex flex-col gap-2">
        {messages.map((message) =>
          message.fromUser ? (
            <div
              className="flex flex-col gap-1 bg-blue-500 rounded-md p-2 px-3 self-end text-white rounded-br-none"
              key={message.content}
            >
              <p className="text-sm">{message.content}</p>
            </div>
          ) : (
            <div
              className="flex flex-col gap-1 bg-gray-300 rounded-md p-2 px-3 self-start rounded-bl-none
            "
              key={message.content}
            >
              <p className="text-sm">{message.content}</p>
            </div>
          )
        )}
      </div>
      <form className="flex gap-2" onSubmit={handleSend}>
        <input
          className="flex-grow rounded-md bg-background3 p-2 hover:border-blue-500 border-2 border-transparent focus:border-blue-500 focus:outline-none transition"
          type="text"
          placeholder="Type a message..."
          ref={inputRef}
        />
        <button
          className="rounded-full bg-blue-500 p-2 aspect-[1/1] flex items-center justify-center hover:bg-blue-600 transition"
          type="submit"
        >
          <HiPaperAirplane className="text-white mb-1" size={24} />
        </button>
      </form>
    </div>
  );
};

export default ChatInterfaceClient;
