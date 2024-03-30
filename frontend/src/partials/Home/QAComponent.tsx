import { useState, useEffect } from "react";
import { FaThumbsUp, FaComments, FaRegClock, FaReply } from "react-icons/fa";

const QAComponent = () => {
  const [visible, setVisible] = useState(true);

  // Expanded sample data to include answers
  const thread = [
    {
      user: "Software Engineering",
      role: "Software Engineer",
      content:
        "What level would I be and what salary should I be asking for in Tampa? I have 5 years of experience as a Software Engineer. I've done a lot in that time with Cloud Development and even led a product...",
      likes: 16,
      comments: 4,
      daysAgo: 1,
      answers: [
        {
          user: "Tech Recruiter",
          content:
            "With your experience, you should aim for a level 3 position, which typically offers a competitive salary in Tampa in the range of $XX,XXX to $XX,XXX, depending on the company.",
          likes: 12,
          daysAgo: 1,
        },
        // ... Add more answers if needed
      ],
    },
    // ... (add more threads as needed)
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((v) => !v);
    }, 3000); // change the component every 3 seconds for demo purposes

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`w-full transition-opacity duration-300 ease-in-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="relative w-full mb-10">
        {" "}
        {/* Wrapper for positioning */}
        {thread.map((post, index) => (
          <div
            key={index}
            className="w-full mb-10 p-4 border-b last:border-b-0"
          >
            <div className="flex items-center mb-2">
              <h3 className="text-lg font-bold">{post.user}</h3>
              <span className="ml-2 text-sm text-gray-500">- {post.role}</span>
            </div>
            <p className="mb-3">{post.content}</p>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <FaThumbsUp className="text-blue-500" />
              <span className="ml-1 mr-4">{post.likes} Likes</span>
              <FaComments className="text-green-500" />
              <span className="ml-1 mr-4">{post.comments} Comments</span>
              <FaRegClock className="text-gray-400" />
              <span className="ml-1">{post.daysAgo}d ago</span>
            </div>
            {/* Render responses here */}
            {post.answers.map((answer, ansIndex) => (
              <div
                key={ansIndex}
                className="pl-4 mt-4 border-l-2 border-gray-200"
              >
                <div className="flex items-center mb-2">
                  <FaReply className="transform rotate-180 text-gray-500" />
                  <h4 className="text-md font-semibold ml-2">{answer.user}</h4>
                  <span className="ml-2 text-sm text-gray-500">answered</span>
                </div>
                <p className="text-sm mb-2">{answer.content}</p>
                <div className="flex items-center text-xs text-gray-500">
                  <FaThumbsUp className="text-blue-400" />
                  <span className="ml-1 mr-4">{answer.likes} Likes</span>
                  <FaRegClock className="text-gray-400" />
                  <span className="ml-1">{answer.daysAgo}d ago</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
    // <div className={`w-full transition-opacity duration-300 ease-in-out ${visible ? 'opacity-100' : 'opacity-0'}`}>
    //   {thread.map((post, index) => (

    //   ))}
    // </div>
  );
};

export default QAComponent;
