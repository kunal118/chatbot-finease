import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import "./app.css";
import { useState } from "react";
import axios from "axios";
import LanguageBox from "./languageBox";
import { options } from "./config";
import langContext from "./context/languageContext";
const App = () => {
  const [language, setLanguage] = useState({ code: "en", display: "English" });
  // if (language.code != "en") {
  //

  return (
    <langContext.Provider value={language}>
      <LanguageBox setLanguage={setLanguage} className="langBox" />

      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
      {/* </langContext.Provider> */}
    </langContext.Provider>
  );
};
export default App;
