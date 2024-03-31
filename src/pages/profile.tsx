import Layout from "@/containers/Layout";
import axios from "axios";
import React, {useState} from "react";
import {FaXmark} from "react-icons/fa6";

const profile = () => {
  const URL = "http://localhost:3001/getUser/";

  //this will be the user's already selected interest; the response from the server
  let initialValue = ["computer science", "JS", "Java"];
  //this will be the list of interest that are available for the user to choose from
  let preDefinedInterest = ["computer science", "JS", "Java", "c++", "AI"];

  const [selectedUserInterest, setSelectedUserInterest] =
    useState(initialValue);

  const handleDropdown = () => {
    document.getElementById("dropdownMenu").classList.toggle("hidden");
  };

  const updateUserInterest = (field: string) => {
    setSelectedUserInterest(() => {
      const newInterest = [...selectedUserInterest];
      newInterest.splice(0, 0, field);
      return newInterest;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <div className="flex flex-col w-full max-w-md mx-auto my-10">
        {["name", "major", "universityYear", "universityMajor", "email"].map(
          (field) => (
            <div key={field}>{field}</div>
          )
        )}
        <form>
          <label htmlFor="interest" className="flex">
            <span className="mr-2">
              Interests:
              <span>
                {selectedUserInterest.map((interest) => (
                  <span className="flex-row">
                    <span className=" flex flex-auto flex-grow-0 items-center rounded-md min-w- px-2 py-2 shadow-md">
                      <FaXmark /> {interest}
                    </span>
                  </span>
                ))}
              </span>
            </span>
          </label>

          <div>
            <div
              onClick={handleDropdown}
              className="mt-2 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm hover:cursor-pointer align-middle"
            >
              Browse Interest
            </div>
            <div
              id="dropdownMenu"
              className="bg-gray-100 max-h-[150px] overflow-auto hidden"
            >
              {preDefinedInterest.map((field) =>
                selectedUserInterest.includes(field) ? (
                  <></>
                ) : (
                  <div
                    onClick={() => updateUserInterest(field)}
                    className="m-1 p-2 hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    {field}
                  </div>
                )
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-2"
            onSubmit={handleSubmit}
          >
            Update
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default profile;
