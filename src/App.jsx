import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import "./app.css";
import { useState } from "react";

import LanguageBox from "./LanguageBox";

import LangContext from "./LanguageContext";
const App = () => {
  const [language, setLanguage] = useState({ code: "en", display: "English" });
  // if (language.code != "en") {
  //

  return (
    <LangContext.Provider value={language}>
      <LanguageBox setLanguage={setLanguage} className="langBox" />

      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
      {/* </langContext.Provider> */}
    </LangContext.Provider>
  );
};
export default App;
