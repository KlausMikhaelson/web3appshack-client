import Layout from "@/containers/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";

const cancelIcon: IconProp = "fa-solid fa-xmark";

const cancelIconElement = <FontAwesomeIcon icon={cancelIcon} />;

const profile = () => {
  const URL = "http://localhost:3001/getUser/";

  const selectedUserInterest = ["computer science", "JS", "Java"];
  let preDefinedInterest = ["computer science", "JS", "Java", "c++", "AI"];

  const [userInterest, setUserInterest] = useState("");

  const handleDropdown = () => {
    document.getElementById("dropdownMenu").classList.toggle("hidden");
  };

  const updateInterest = () => {

  }

  const handleChange = (e) => {
    setUserInterest(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <div className="flex flex-col w-full max-w-md mx-auto my-10">
        {["name", "major", "universityYear", "universityMajor", "email"].map(
          (field) => (
            <div key={field}>{}</div>
          )
        )}
        <form>
          <label htmlFor="interest" className="flex">
            <span className="mr-2">Interests: </span>
            <span className="flex-row">
              {selectedUserInterest.map((interest) => (
                <span className="rounded-md px-2 py-2 shadow-md">
                  <span></span>
                  {interest}
                </span>
              ))}
            </span>
          </label>

          <div>
            <div
              onClick={handleDropdown}
              className="mt-2 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm hover:cursor-pointer"
            >
              Browse Interest
            </div>
            <div
              id="dropdownMenu"
              className="bg-gray-100 h-[150px] overflow-auto hidden"
            >
              {preDefinedInterest.map((field) => (
                
                {if(selectedUserInterest.includes(field)) ? (<></>) : (<div onClick={updateInterest} className="m-1 p-2 hover:bg-gray-200 transition-colors cursor-pointer">
                  {field}
                </div>)}
                
                // <div onClick={updateInterest} className="m-1 p-2 hover:bg-gray-200 transition-colors cursor-pointer">
                //   {field}
                // </div>
              ))}
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
