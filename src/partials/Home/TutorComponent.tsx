import { useState, useEffect } from "react";

const UserImageLoaderComponent = () => {
  const [visible, setVisible] = useState(true);

  // Sample user images (placeholders)
  const userImages = [
    "/path/to/user1.png", // Update these paths to your actual images
    "/path/to/user2.png",
    "/path/to/user3.png",
  ];

  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(v => !v);

      // Change image index to show the next image
      setImageIndex(prevIndex => (prevIndex + 1) % userImages.length);
    }, 3000); // Change the image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`flex justify-center items-center transition-opacity duration-500 ease-in-out ${visible ? "opacity-100" : "opacity-0"}`}>
      <img src={userImages[imageIndex]} alt="User" className="w-24 h-24 rounded-full" />
    </div>
  );
};

export default UserImageLoaderComponent;
