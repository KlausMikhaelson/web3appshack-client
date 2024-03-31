import { useState, useEffect } from "react";
import { FaThumbsUp, FaComments, FaRegClock, FaReply } from "react-icons/fa";

const QAComponent = ({ chatId }: any) => {
  const [visible, setVisible] = useState(true);

  // Expanded sample data to include answers
  const thread = [
    {
      "student": "Michael Park",
      "role": "University of Regina",
      "content": "How many modules per semester do exchange students take?",
      "likes": 16,
      "comments": 4,
      "daysAgo": 1,
      "answers": [
        {
          "student": "Emily Tran",
          "content": "I did 4 last semester and it was quite manageable. Depends on how heavy each module is, I guess!",
          "likes": 8,
          "daysAgo": 1
        },
        {
          "student": "Marcus Chen",
          "content": "Check with the international office too.",
          "likes": 5,
          "daysAgo": 1
        }
      ]
    },
    {
      student: "Vikram Victor",
      role: "University of Regina",
      content:
        "Anyone interested in forming a study group for CS711?",
      likes: 16,
      comments: 4,
      daysAgo: 1,
      answers: [
        {
          student: "Sanchia Shetty",
          content:
            "Yes please!! I've got a few more friends who are interested in joining too!",
          likes: 12,
          daysAgo: 1,
        },
        {
          "student": "Rahul Gupta",
          "content": "I'm interested! Struggling with the latest assignment and could use some help.",
          "likes": 9,
          "daysAgo": 1
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
        {[thread[chatId]].map((post, index) => (
          <div
            key={index}
            className="w-full mb-10 p-4 border-b last:border-b-0"
          >
            <div className="flex items-center mb-2">
              <h3 className="text-lg font-bold">{post.student}</h3>
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
                  <h4 className="text-md font-semibold ml-2">
                    {answer.student}
                  </h4>
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
