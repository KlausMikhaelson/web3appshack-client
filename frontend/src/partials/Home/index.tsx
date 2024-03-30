import { useRouter } from 'next/router';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
  const router = useRouter();

  const navigateToSignUp = () => {
    router.push('/signup'); // Make sure the route matches your file structure
  };

  return (
    <div className="flex flex-col w-full h-full items-center justify-center md:px-16 custom-container">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Hey there</h1>
        <p className="mb-8">Got questions?</p>
        <button onClick={navigateToSignUp} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default HomePage;
