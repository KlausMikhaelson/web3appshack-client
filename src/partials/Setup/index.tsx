import { useState, useEffect } from "react";

import { MdOutlineFileUpload } from "react-icons/md";
import { useRouter } from "next/router";
import { NextPage } from "next";

import { useAppContext } from "@/context/AppContext";
import { fileToBase64 } from "@/utils/helpers";

const SetupComponent: NextPage = () => {
  const { } = useAppContext();

  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const router = useRouter();

  // useEffect(() => {
  //   if (imageUrl) {
  //     console.log(imageUrl);
  //     router.push("/populate");
  //   }
  // }, [imageUrl, router]);

  return (
    <div className="flex flex-col w-full h-full justify-space-between items-center md:px-16 custom-container">
      <div className="flex flex-col items-center w-full py-4">
        <h1 className="flex flex-col w-full items-center color-red text-2xl text-bold custom-bg-yellow-color">
          Upload your store blueprint
        </h1>
        {/* {previewSrc && (
          <img
            src={previewSrc}
            alt="Preview"
            style={{ maxWidth: "100%", maxHeight: "400px", margin: "20px 0" }}
          />
        )} */}
      </div>

      <div className="flex flex-col items-center w-full h-[60vh]">
        <div className="flex flex-col items-center w-full h-full justify-center">
          <div
            className="flex flex-col w-full h-full items-center justify-center border-[1.5px] border-dashed border-gray-300 rounded-lg px-10 bg-gray-100"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <div className="flex flex-col w-full h-full items-center justify-around">
              <div className="flex flex-col items-center gap-8">
                <MdOutlineFileUpload
                  size={70}
                  className="custom-text-dark-gray-color"
                ></MdOutlineFileUpload>
                <p className="custom-text-dark-gray-color mb-3">
                  Drag and drop files here
                </p>
              </div>
            </div>
            <div className="flex flex-row w-full items-center justify-center px-20 gap-2">
              <div className="flex flex-col flex-grow">
                <div className="border-b-2 border-gray-300"></div>
                <div></div>
              </div>
              <span className="px-2 custom-text-gray-color">or</span>
              <div className="flex flex-col flex-grow">
                <div className="border-b-2 border-gray-300"></div>
                <div></div>
              </div>
            </div>
            <div className="flex flex-col w-full h-full items-center justify-evenly">
              <div className="flex flex-col items-center gap-8">
                <input
                  id="fileInput"
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />
                <button
                  className="mt-3 text-gray-800 font-semibold py-2 px-4 custom-bg-light-gray-color custom-text-dark-blue-color"
                  onClick={() => document.getElementById("fileInput")?.click()}
                >
                  {isUploading ? "Uploading..." : "Browse Files"}
                </button>
                {isUploading && (
                  <div className="w-full bg-gray-300 rounded-full h-1">
                    <div
                      className="bg-blue-600 h-1 rounded-full"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                )}
                {uploadError && (
                  <div className="text-red-500 text-center mt-1">
                    {uploadError}
                  </div>
                )}
                <p className="text-xs text-gray-500 mt-1">
                  Maximum file size is 5MB.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetupComponent;
