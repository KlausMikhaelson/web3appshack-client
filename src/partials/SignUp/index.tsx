import { useState } from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';

const SignUpComponent: NextPage = () => {
  const [studentData, setUserData] = useState({
    email: '',
    name: '',
    universityYear: '',
    major: '',
    universityName: '',
    // Initialize interests as an empty array
    interests: [] 
  });
  const [interestInput, setInterestInput] = useState(''); // New state for handling the interest input
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name !== 'interests') {
      setUserData({...studentData, [name]: value});
    } else {
      setInterestInput(value); // Update interest input instead of directly modifying the interests array
    }
  };

  const handleInterestKeyPress = (e) => {
    // Add interest when Enter is pressed and input is not empty
    if (e.key === 'Enter' && interestInput.trim() !== '') {
      e.preventDefault(); // Prevent form submission
      setUserData({
        ...studentData,
        interests: [...studentData.interests, interestInput.trim()]
      });
      setInterestInput(''); // Reset interest input field
    }
  };

  const removeInterest = (index) => {
    const newInterests = studentData.interests.filter((_, i) => i !== index);
    setUserData({...studentData, interests: newInterests});
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('http://localhost:4000/api/v1/student/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(studentData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to sign up. Please try again.');
      }
      
      const data = await response.json();
      if (data.token) {
        localStorage.setItem('authToken', data.token);
        console.log('SignUp successful', data);
        router.push('/forums');
      } else {
        throw new Error('Authentication token was not provided');
      }

    } catch (error: any) {
      setError(error.message || 'Failed to sign up. Please try again.');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full max-w-md mx-auto my-10">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold text-center">Sign Up</h2>
        {['email', 'name', 'universityYear', 'major', 'universityName'].map((field) => (
          <div key={field}>
            <label htmlFor={field} className="block text-sm font-medium text-gray-700 capitalize">
              {field.replace(/([A-Z])/g, ' $1').trim()}
            </label>
            <input
              type={field === 'email' ? 'email' : 'text'}
              name={field}
              id={field}
              required={field === 'email' || field === 'name'}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder={`Enter your ${field}`}
              value={studentData[field]}
              onChange={handleChange}
            />
          </div>
        ))}
        <div>
          <label htmlFor="interests" className="block text-sm font-medium text-gray-700">
            Interests
          </label>
          <input
            type="text"
            name="interests"
            id="interests"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your interests"
            value={interestInput}
            onChange={handleChange}
            onKeyPress={handleInterestKeyPress}
          />
          <div className="mt-2 flex flex-wrap gap-2">
            {studentData.interests.map((interest, index) => (
              <span key={index} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full cursor-pointer" onClick={() => removeInterest(index)}>
                {interest} &times;
              </span>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Signing Up...' : 'Sign Up'}
        </button>
        {error && <p className="mt-2 text-center text-sm text-red-600">{error}</p>}
      </form>
      <p className="mt-4 text-center text-sm text-gray-600">
        Already have an account?{' '}
        <a
          href="#"
          onClick={() => router.push('/signin')}
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          Log in
        </a>
      </p>
    </div>
  );
};

export default SignUpComponent;
