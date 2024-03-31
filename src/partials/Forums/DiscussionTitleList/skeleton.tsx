import React, { useState, useEffect } from "react";

const DiscussionTitleListSkeleton = ({
}: any) => {
  return (
    <div className="flex flex-col gap-4">
      <div>My Discussions</div>
      {/* Skeleton loading animation for discussions */}
      {Array.from({ length: 15 }, (_, index) => (
        <div key={index} className="flex items-center space-x-4 animate-pulse">
          <div className="rounded-full bg-gray-300 h-8 w-8"></div>
          <div className="flex-1 space-y-3 py-1">
            <div className="h-3 bg-gray-300 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DiscussionTitleListSkeleton;
