// ForumsComponent.js
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { NextPage } from "next";

import DiscussionTitleList from "@/partials/Forums/DiscussionTitleList";
import Discussion from "@/partials/Forums/Discussion/index";
import DiscussionTitleListSkeleton from "./DiscussionTitleList/skeleton";
import Contributors from "./Contributors";

const ForumsComponent: NextPage = () => {
  const [discussions, setDiscussions] = useState([]);
  const [activeDiscussionData, setActiveDiscussionData] = useState(null);

  useEffect(() => {
    const fetchDiscussions = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/api/v1/discussion/fetchAll"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        if (data.length > 0) {
            setActiveDiscussionData(data[0]); // Set the first discussion as active
          }
        console.log(data);
        setDiscussions(data);
      } catch (error) {
        console.error("Failed to fetch discussions:", error);
      } finally {
      }
    };

    fetchDiscussions();
  }, []);

  return (
    <div className="container mx-auto px-0 pt-5 px-32">
      <div className="flex gap-6">
        {/* Left Sidebar */}
        <div className="w-1/6 space-y-4">
          {discussions && discussions?.length == 0 ? (
            <DiscussionTitleListSkeleton />
          ) : (
            <DiscussionTitleList
              discussions={discussions}
              setActiveDiscussionData={setActiveDiscussionData}
              activeDiscussionData={activeDiscussionData}
            />
          )}
        </div>

        {/* Middle Content */}
        <div className="w-4/6 bg-white border-2 border-gray-color rounded-lg space-y-4">
          {activeDiscussionData && (
            <Discussion discussionData={activeDiscussionData} />
          )}
        </div>

        {/* Right Sidebar */}
        <div className="w-1/3 bg-gray-50 p-4 space-y-4">
            <Contributors/>
        </div>
      </div>
    </div>
  );
};

export default ForumsComponent;
