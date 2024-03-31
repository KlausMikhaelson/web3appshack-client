import React, { useState, useEffect } from "react";

const DiscussionTitleList = ({
  discussions,
  isLoading,
  setActiveDiscussionData,
  activeDiscussionData,
}: any) => {
  console.log(discussions);
  return (
    <div className="flex flex-col gap-4">
      <div className="text-xl font-extrabold">My Discussions</div>
      {/* List of discussions */}
      {discussions.map((discussion: any, index: any) => {
        return (
          <div
            key={index}
            className={`flex items-center space-x-4 cursor-pointer ${
              activeDiscussionData &&
              discussion._id === activeDiscussionData._id
                ? "underline"
                : ""
            }`}
            onClick={() => setActiveDiscussionData(discussion)}
          >
            <img
              src={discussion.displayImageUrl}
              onError={(e: any) => {
                e.target.onerror = null; // prevent infinite loop in case fallback image also fails
                e.target.src =
                  "https://i.pinimg.com/originals/cd/59/49/cd5949650a5de459f484c39b3f2cf7c9.jpg";
              }}
              alt={discussion.name}
              className="rounded-full border-2 border-gray-color h-8 w-8 object-cover"
            />
            <div className="flex-1 min-w-0">
              <h3
                className="font-semibold truncate overflow-hidden"
                title={discussion.name}
              >
                {discussion.name}
              </h3>
              {/* Additional details can be added here */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DiscussionTitleList;
