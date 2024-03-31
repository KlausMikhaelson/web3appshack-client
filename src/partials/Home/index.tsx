import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { NextPage } from "next";

import { useAppContext } from "@/context/AppContext";
import QAComponent from "./QAComponent";
import TutorComponent from "./TutorComponent";

const LandingPage: NextPage = () => {
  const router = useRouter();
  const { updateIsHeaderFullWidth } = useAppContext();

  updateIsHeaderFullWidth(true);

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const phrases = [
    "Need to ask a question?",
    "Looking for a tutor?",
    "Looking for roommates?",
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

  const renderQAComponent = () => {
    switch (text) {
      case phrases[0]:
        return (
          <div className="w-1/2 flex justify-center items-center relative">
            {/* Modified right half to include two QAComponents */}
            <div className="w-full max-w-md p-2 bg-white rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.2)] absolute transform -translate-x-16 -translate-y-16">
              <QAComponent />
            </div>
            <div className="w-full max-w-md p-2 bg-white rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.2)] absolute transform translate-x-16 translate-y-16">
              <QAComponent />
            </div>
          </div>
        );
      case phrases[1]:
        return (
          <div className="w-1/2 flex justify-center items-center relative">
            {/* Top-left tile */}
            <div className="w-full max-w-md p-2 bg-white rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.2)] absolute transform -translate-x-32 -translate-y-32">
              <TutorComponent />
            </div>
            {/* Top-right tile */}
            <div className="w-full max-w-md p-2 bg-white rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.2)] absolute transform translate-x-32 -translate-y-32">
              <TutorComponent />
            </div>
            {/* Bottom-left tile */}
            <div className="w-full max-w-md p-2 bg-white rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.2)] absolute transform -translate-x-32 translate-y-32">
              <TutorComponent />
            </div>
            {/* Bottom-right tile */}
            <div className="w-full max-w-md p-2 bg-white rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.2)] absolute transform translate-x-32 translate-y-32">
              <TutorComponent />
            </div>
          </div>
        );
      case phrases[2]:
        return (
          <div className="w-1/2 flex justify-center items-center relative">
            {/* Modified right half to include two QAComponents */}
            <div className="w-full max-w-md p-2 bg-white rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.2)] absolute transform -translate-x-16 -translate-y-16">
              <QAComponent />
            </div>
            <div className="w-full max-w-md p-2 bg-white rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.2)] absolute transform translate-x-16 translate-y-16">
              <QAComponent />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex px-32">
      <div className="w-1/2 flex flex-col justify-center p-12 px-0 bg-white text-gray-800">
        {/* Content on the left side matching the provided design */}
        <h1 className="text-6xl font-extrabold mb-4">Stuck? Use StuQ!</h1>
        <div className="p-2 pl-0 w-3">
          <h2 className="text-3xl font-bold">
            <span className="typing-div typing-animation">{text}</span>
          </h2>
        </div>
        <p className="text-lg mb-6 text-black">
          Introducing StuQ, your all-in-one hub for university success! Connect
          with fellow students, find tutors to assist in your academic success,
          and connect with fellow students to find your next roommate. With our
          user-friendly UI, you can easily navigate to find the solutions for
          you. Don't navigate university alone – join StuQ today and unlock the
          tools for academic excellence and vibrant campus living!
        </p>
        <button
          onClick={() => router.push("/signin")}
          className="self-start bg-indigo-600 text-white rounded-md px-6 py-3 font-semibold shadow-lg hover:bg-green-700 transition-colors"
        >
          Start now
        </button>
      </div>
      <div className="w-1/2 flex justify-center items-center relative">
            {/* Modified right half to include two QAComponents */}
            <div className="w-full max-w-md p-2 bg-white rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.2)] absolute transform -translate-x-16 -translate-y-16">
              <QAComponent chatId={0} />
            </div>
            <div className="w-full max-w-md p-2 bg-white rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.2)] absolute transform translate-x-16 translate-y-16">
              <QAComponent chatId={1}/>
            </div>
          </div>
    </div>
  );
};

export default LandingPage;
