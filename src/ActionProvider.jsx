import React from "react";

import { useContext } from "react";
import axios from "axios";
import { options } from "./config";
import Bard from "bard-ai";
import LangContext from "./LanguageContext.jsx";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const lang = useContext(LangContext);
  // console.log(lang);

  function handleHello() {
    var myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append("Access-Control-Allow-Origin", "http://localhost:8000");
    myHeaders.append("Access-Control-Allow-Origin", "http://localhost:5173");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://f8d8-117-203-246-41.ngrok-free.app/gpt/?prompt= Hey these are the details of a user ,currentBalance= 101666.33 , accountType= FIXED,compoundingFrequency=HALF-YEARLY,currentValue: 119845.90,\n    interestComputation: COMPOUND,interestPayout: HALF-YEARLY,interestPeriodicPayoutAmount: 0,interestRate: 2,principalAmount: 109890.98,\n    tenureDays: 180,cashLimit of credit card: 20000,currentDue: 3000,loyaltyPoints: 2450,minDueAmount: 1346,previousDueAmount: 7654,\n    totalDueAmount: 9756,shareHolerEquityType: COMMON-STOCK , now on the basis of above details you need to provide financial planning to the user,\n    just keep the text verbose.less than 50 words.give in bullets\n",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    let botMessage = createChatBotMessage();
    // response.data[0].translations[0].text
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }
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
