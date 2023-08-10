import React, { useContext } from "react";
import langContext from "./context/LanguageContext";
const LangButtons = ({ language, setLanguage }) => {
  return (
    <>
      <button
        style={{
          marginRight: "20px",
          marginLeft: "20px",
          border: "",
          padding: "0.4em",
        }}
        onClick={() => {
          setLanguage(language);
          // console.log(language);
        }}
      >
        {language.display}
      </button>
    </>
  );
};
const LanguageBox = ({ setLanguage }) => {
  const languages = [
    { code: "en", display: "English" },
    { code: "hi", display: "Hindi" },
  ];
  return (
    <div style={{ padding: "1em" }}>
      {languages.map((l) => {
        return (
          <LangButtons key={l.code} language={l} setLanguage={setLanguage} />
        );
      })}
    </div>
  );
  //   return <>H</>;
};

export default LanguageBox;
