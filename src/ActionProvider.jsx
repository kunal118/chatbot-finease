import React from "react";

import { useContext } from "react";
import axios from "axios";
import { options } from "./config";
import LangContext from "./context/LanguageContext";
const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const lang = useContext(LangContext);
  // console.log(lang);
  const handleHello = async () => {
    let response;
    options.params["to[0]"] = lang.code;
    try {
      options.data[0].Text = "hello ok";
      response = await axios.request(options);
    } catch (error) {
      console.error(error);
    }
    // console.log(response.data[0].translations[0].text);
    let botMessage = createChatBotMessage(
      response.data[0].translations[0].text
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleDog = () => {
    const botMessage = createChatBotMessage(
      "Here's a nice dog picture for you!",
      {
        widget: "dogPicture",
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleDog,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
