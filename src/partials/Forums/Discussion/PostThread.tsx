import React, { useState } from 'react';
import { useRouter } from 'next/router';

const PostThread = ({ discussionId, onNewThreadPosted }: any) => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const router = useRouter();

  const isAuthenticated = () => {
    return localStorage.getItem('authToken');
  };

  const handlePostClick = async () => {
    const authToken = isAuthenticated();
    if (!authToken) {
      router.push('/signin');
      return;
    }

    if (!title.trim() || !body.trim()) {
      alert('Please fill in all fields before posting.');
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/api/v1/thread/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Include the auth token in the request if needed
          'Authorization': `Bearer ${authToken}`,
        },
        body: JSON.stringify({
          title,
          body,
          discussion: discussionId,
          isStartingThread: true,
          tags: ['exampleTag'],
        }),
      });

      if (!response.ok) {
        console.log(response)
        throw new Error('Network response was not ok');
      }

      const newThread = await response.json();
      console.log('Thread posted successfully');
      setTitle('');
      setBody('');
      setShowModal(false); // Close the modal upon successful post

      onNewThreadPosted();
    } catch (error) {
      console.error('Failed to post thread:', error);
    }
  };

  return (
    <>
      <div className="flex flex-col p-4 border-b-2 border-gray-color">
        <button
          onClick={() => setShowModal(true)}
          className="py-2 px-4 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Ask your question here
        </button>
      </div>
      
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg relative">
            <div className="flex flex-row w-full justify-between top-0 right-0 pb-4 px-1">
              <h2 className="text-lg font-extrabold">Post question</h2>
              <button onClick={() => setShowModal(false)} className="text-gray-800 text-lg">
                &#10005; {/* Unicode X mark */}
              </button>
            </div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mb-2 p-2 border border-gray-300 rounded-md w-full"
              placeholder="Title"
            />
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="mb-2 p-2 border border-gray-300 rounded-md w-full"
              placeholder="Body"
              rows="4"
            ></textarea>
            <div className="text-right">
              <button
                onClick={handlePostClick}
                className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PostThread;
