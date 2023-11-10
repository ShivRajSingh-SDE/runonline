import React, { useState, useEffect, useRef } from "react";
import { AiFillRobot, AiOutlineSlack } from "react-icons/ai";
import Back from "../common/back/Back";

import { useLocation } from "react-router-dom";
import "./Chatbot.css";

const Chatbot = () => {
  const chatboxRef = useRef(null);
  const [userMessage, setUserMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const [rotationAngle, setRotationAngle] = useState(0); // Rotation state

  const API_KEY = "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";

  const createChatLi = (message, className) => {
    const chatLi = (
      <li className={`chat ${className}`} key={chatMessages.length}>
        {className === "outgoing" ? (
          <p>{message}</p>
        ) : (
          <>
            <span className="text-[30px] p-2">
              <AiFillRobot />
            </span>
            <p>{message}</p>
          </>
        )}
      </li>
    );
    return chatLi;
  };

 const generateResponse = async () => {
  const API_URL = "https://api.openai.com/v1/chat/completions";

  try {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: userMessage }],
      }),
    };

    const response = await fetch(API_URL, requestOptions);
    const data = await response.json();

    const responseMessage = data.choices[0].message.content.trim();

    // Check if the response message is already in chatMessages
    const isMessageRepeated = chatMessages.includes(responseMessage);

    if (!isMessageRepeated) {
      setChatMessages([...chatMessages, userMessage, responseMessage]);
    }

    setUserMessage("");
  } catch (error) {
    console.error("Error generating response:", error);
  }
};

  const handleChat = () => {
    if (userMessage.trim() === "") return;

    setChatMessages([...chatMessages, userMessage]);
    setUserMessage("");

    setTimeout(() => {
      setChatMessages((prevMessages) => [...prevMessages, "Thinking..."]);
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;

      generateResponse();
    }, 600);
  };

  const handleChange = (event) => {
    setUserMessage(event.target.value);
  };

  const handleSendMessage = () => {
    handleChat();
  };

  const handleIconClick = () => {
    // Rotate the icon by 180 degrees on each click
    setRotationAngle((prevAngle) => prevAngle + 180);
  };

  useEffect(() => {
    chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
  }, [chatMessages]);

  return (
    <div className="chatCbotbg">
      <Back title="QueryHelpDesk" />

      <div
        className=" justify-center
     items-center flex p-5
      flex-col
      "
      >
        <div className=" w-[90%] md:w-[60%] bg-[#1eb2a6]     rounded-3xl">
          <header className="text md:text-[30px] text-[25px] rounded-t-3xl  text-[white]  font-bold">
            <h2>
              Query<span className="text-[black]">Help</span>Desk
            </h2>
          </header>

<ul className="chatbox bg-[#ffffffa8] h-80 p-5 overflow-y-auto" ref={chatboxRef}>
            {chatMessages.map((message, index) => {
              if (message === "Thinking...") {
                return createChatLi(message, "thinking");
              }
              return createChatLi(
                message,
                index % 2 === 0 ? "outgoing" : "incoming"
              );
            })}
          </ul>

          <div className=" flex items-center p-2 bg-[#61c48257] rounded-b-2xl justify-around">
            <textarea
              className="w-[90%]  p-1    rounded-2xl justify-center items-center"
              placeholder="Enter a message..."
              spellCheck="false"
              required
              value={userMessage}
              onChange={handleChange}
            ></textarea>
            <span
              id="send-btn"
              className="material-symbols-rounded"
              onClick={handleIconClick}
            >
              <AiOutlineSlack
                onClick={handleSendMessage}
                className={`text-[30px] transform rotate-${rotationAngle}`}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
