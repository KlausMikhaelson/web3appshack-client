import React, { useState, useEffect } from "react";

const Contributors = ({}: any) => {
  const contributors: any = [
    {
      name: "Pete Mckinson",
      universityName: "University of Regina"
    },
    {
      name: "Mohammed",
      universityName: "University of Regina"
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="text-xl font-extrabold">Contributors</div>
      {/* List of discussions */}
      {contributors.map((contributor: any, index: any) => {
        return (
          <div
            key={index}
            className={`flex items-center space-x-4 cursor-pointer`}
          >
            <img
              src={"https://i.pinimg.com/originals/cd/59/49/cd5949650a5de459f484c39b3f2cf7c9.jpg"}
              alt={""}
              className="rounded-md border-2 border-gray-color h-14 w-14 object-cover object-cover"
              onError={(e: any) => {
                e.target.onerror = null; // prevent infinite loop in case fallback image also fails
                e.target.src =
                  "https://i.pinimg.com/originals/cd/59/49/cd5949650a5de459f484c39b3f2cf7c9.jpg";
              }}
            />
            <div className="flex-1 min-w-0">
              <h3
                className="font-semibold truncate overflow-hidden"
                title={contributor.name}
              >
                {contributor.name}
              </h3>
              <span className="text-xs">{contributor.universityName}</span>
              {/* Additional details can be added here */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Contributors;
