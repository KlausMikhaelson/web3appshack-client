import React, { useState, useEffect } from "react";
import { formatDistanceToNow } from "date-fns";

import PostThread from "@/partials/Forums/Discussion/PostThread";

const Discussion = ({ discussionData }: any) => {
  const [threads, setThreads] = useState([]);

  const fetchThreads = async () => {
    // Assuming you need to fetch threads related to a specific discussion
    const discussionId = discussionData._id; // Ensure you have the correct discussion ID available

    try {
      // Update the URL to include a query parameter or modify as needed depending on your API
      const response = await fetch(
        `http://localhost:4000/api/v1/thread/fetchAll/${discussionId}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const fetchedThreads = await response.json();
      setThreads(fetchedThreads);
    } catch (error) {
      console.error("Failed to fetch threads:", error);
    }
  };

  useEffect(() => {
    if (discussionData._id) {
      fetchThreads();
    }
  }, [discussionData]); // Re-run this effect if discussionData changes

  useEffect(() => {
    if (discussionData._id) {
      fetchThreads();
    }
  }, [discussionData]);

  return (
    <div className="flex flex-col border-b-2 border-gray-200 overflow-hidden">
      {/* Image and discussion details sections remain unchanged */}

      <div className="w-full h-60 overflow-hidden relative">
        {" "}
        {/* This should already contain the image */}
        <img
          src={discussionData.bannerImageUrl}
          onError={(e) => {
            e.target.onerror = null; // Prevent infinite loop
            e.target.src =
              "https://i.pinimg.com/originals/cd/59/49/cd5949650a5de459f484c39b3f2cf7c9.jpg";
          }}
          alt={discussionData.name}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col p-4 border-b-2 border-gray-color">
        <div className="text-2xl font-extrabold pb-2">
          {discussionData.name}
        </div>
        <div>1.3k followers</div>
      </div>

      <PostThread
        discussionId={discussionData._id}
        onNewThreadPosted={fetchThreads}
      />

      {/* Threads list */}
      {threads.map((thread) => (
        <div key={thread._id} className="flex flex-row border-b-2 p-4">
          <img
            src={""}
            onError={(e: any) => {
              e.target.onerror = null; // prevent infinite loop in case fallback image also fails
              e.target.src =
                "https://i.pinimg.com/originals/cd/59/49/cd5949650a5de459f484c39b3f2cf7c9.jpg";
            }}
            alt={""}
            className="rounded-full border-2 border-gray-color h-7 w-7 object-cover"
          />
          <div className="flex flex-col w-full px-4 pt-0">
            <div className="flex flex-row items-center gap-2">
              <div className="flex-1 min-w-0">
                <h3
                  className="font-semibold truncate overflow-hidden"
                  title={thread.postedBy.name || "Unknown"}
                >
                  {thread.postedBy.name || "Unknown"}
                </h3>
                {/* Additional details can be added here */}
              </div>
              <span className="text-sm">
                {formatDistanceToNow(new Date(thread.createdAt), {
                  addSuffix: true,
                })}
              </span>
            </div>
            <div className="flex flex-row w-full pt-2">
              <h3 className="text-lg font-semibold">{thread.title}</h3>
            </div>
            <p className="text-sm text-gray-700">{thread.body}</p>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default Discussion;
