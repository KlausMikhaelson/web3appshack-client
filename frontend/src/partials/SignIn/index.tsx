import { useState } from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';

const SignInComponent: NextPage = () => {
  const [signInData, setSignInData] = useState({
    email: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignInData({ ...signInData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // API call to log the user in
    try {
      // const response = await signIn(signInData);
      // console.log('SignIn successful', response);
      // router.push('/dashboard');
    } catch (error) {
      setError('Failed to log in. Please try again.');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full max-w-md mx-auto my-10">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold text-center">Log In</h2>
        {/* Email field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your email"
            required
            value={signInData.email}
            onChange={handleChange}
          />
        </div>
        {/* Password field */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your password"
            required
            value={signInData.password}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Logging In...' : 'Log In'}
        </button>
        {error && <p className="mt-2 text-center text-sm text-red-600">{error}</p>}
      </form>
      <p className="mt-4 text-center text-sm text-gray-600">
        Don’t have an account?{' '}
        <a
          href="#"
          onClick={() => router.push('/signup')}
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          Sign Up
        </a>
      </p>
    </div>
  );
};

export default SignInComponent;
