import ChatInterfaceClient from "@/components/ChatInterfaceClient";
import addMessageToDatabase from "@/hooks/addMessageToDatabase";
import getEventsFromCalendar from "@/hooks/getEventsFromCalendar";

import OpenAI from "openai";

const openAIClient = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const tryChat = async (message: string) => {
  console.log("tryChat Started");
  const calendarData = await getEventsFromCalendar();

  console.log("calendarData: " + JSON.stringify(calendarData, null, 2));

  const assistant = await openAIClient.beta.assistants.create({
    name: "CalPal",
    description: "An assistant to help you manage your calendar",
    tools: [{ type: "code_interpreter" }],
    model: "gpt-3.5-turbo-1106",
  });

  const thread = await openAIClient.beta.threads.create();

  console.log("thread.id: " + thread.id);

  const messageToSend = await openAIClient.beta.threads.messages.create(
    thread.id,
    {
      role: "user",
      content: message + "\n\n" + JSON.stringify(calendarData),
    }
  );

  const run = await openAIClient.beta.threads.runs.create(thread.id, {
    assistant_id: assistant.id,
    instructions:
      "You are CalPal, a friendly university calendar assistant bot. Your job is to help people organize their schedules. Follow these steps when receiving a message:\n\n1. Users will message you with a question or a concern, as well as their calendar data. When a user messages you, find the event they are referring to from their calendar data.\n\n2. If the user is asking about information about an existing event, communicate that information.\n\n3. Else, if a user is expressing a concern about an event, or needs help creating one, add an event to their calendar to help. Events could be anything from creating study sessions, scheduling meetings, or booking out personal time.\n\n4. Make a single event that would resolve their problem. Choose a date and time for the event that would work with their existing schedule. Ensure that no schedule conflicts exist when creating events.",
  });

  let runStatus = await openAIClient.beta.threads.runs.retrieve(
    thread.id,
    run.id
  );

  // wait until status is "completed"
  while (runStatus.status !== "completed") {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    let runStatus = await openAIClient.beta.threads.runs.retrieve(
      thread.id,
      run.id
    );

    console.log("runStatus.status: " + runStatus.status);

    if (runStatus.status === "failed") {
      return "Sorry, I couldn't understand that. Please try again.";
    }

    if (runStatus.status === "completed") {
      break;
    }
  }

  const runResults = await openAIClient.beta.threads.messages.list(thread.id);

  // @ts-ignore
  console.log(runResults.data[0].content[0].text.value);
};

const ChatInterfaceServer = () => {
  // add some simple chat logic here
  const messages = ["Hello", "How are you?"];

  const handleSendServer = async (message: string) => {
    "use server";
    await tryChat(message);
  };

  return (
    <ChatInterfaceClient
      handleSendServer={handleSendServer}
      messages={messages}
    />
  );
};

export default ChatInterfaceServer;
