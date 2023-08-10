import { createChatBotMessage } from "react-chatbot-kit";
import axios from "axios";
import DogPicture from "./DogPicture";
const config = {
  initialMessages: [createChatBotMessage(`Hello world`)],
  widgets: [
    {
      widgetName: "dogPicture",
      widgetFunc: (props) => {
        return <DogPicture {...props} />;
      },
    },
  ],
};

export const options = {
  method: "POST",
  url: "https://microsoft-translator-text.p.rapidapi.com/translate",
  params: {
    "to[0]": "hi",
    "api-version": "3.0",
    profanityAction: "NoAction",
    textType: "plain",
  },
  headers: {
    "content-type": "application/json",
    "X-RapidAPI-Key": "92baa6e1ccmsh9c0c3f63f12091fp1424cfjsnfc7aaf580beb",
    "X-RapidAPI-Host": "microsoft-translator-text.p.rapidapi.com",
  },
  data: [
    {
      Text: "I would really like to drive your car around the block a few times.",
    },
  ],
};

export default config;
