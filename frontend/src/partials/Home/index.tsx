import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { NextPage } from "next";

import { useAppContext } from "@/context/AppContext";
import QAComponent from "./QAComponent";

const LandingPage: NextPage = () => {
  const router = useRouter();
  const { updateIsHeaderFullWidth } = useAppContext();

  updateIsHeaderFullWidth(true);

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const phrases = [
    "Built for AI.",
    "Engineered for Efficiency.",
    "Designed with Love.",
  ];

  useEffect(() => {
    const selectedPhrase = phrases[index % phrases.length];
    const nextCharIndex = text.length + 1;
    const currentText = selectedPhrase.slice(0, nextCharIndex);
    if (text === selectedPhrase) {
      setTimeout(() => {
        setText(""); // Reset text
        setIndex(index + 1); // Move to next phrase
      }, 2000); // Wait a bit before starting the next message
    } else {
      setTimeout(() => {
        setText(currentText); // Update text to include next character
      }, 100); // Speed of typing
    }
  }, [text, index, phrases]);

  return (
    <div className="flex px-32">
      <div className="w-1/2 flex flex-col justify-center p-12 px-0 bg-white text-gray-800">
        {/* Content on the left side matching the provided design */}
        <h1 className="text-6xl font-extrabold mb-4">Stuck? Use StuQ!</h1>
        <div className="border-2 rounded-lg p-2 w-3">
          <h2 className="text-3xl font-bold">
            <span className="typing-div typing-animation">{text}</span>
          </h2>
        </div>
        <p className="text-lg mb-6">
          This text decides the width of the box as of now. Fix it or let the text be!
          This text decides the width of the box as of now. Fix it or let the text be! 
          This text decides the width of the box as of now. Fix it or let the text be! 
          This text decides the width of the box as of now. Fix it or let the text be!
        </p>
        <button
          onClick={() => router.push("/signin")}
          className="self-start bg-green-600 text-white rounded-md px-6 py-3 font-semibold shadow-lg hover:bg-green-700 transition-colors"
        >
          Start now
        </button>
      </div>
      <div className="w-1/2 flex justify-center items-center relative">
        {/* Modified right half to include two QAComponents */}
        <div className="w-full max-w-md p-2 bg-white rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.2)] absolute transform -translate-x-16 -translate-y-16">
          <QAComponent />
        </div>
        <div className="w-full max-w-md p-2 bg-white rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.2)] absolute transform translate-x-16 translate-y-16">
          <QAComponent />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
