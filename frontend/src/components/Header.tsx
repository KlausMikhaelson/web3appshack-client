import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { useAppContext } from "@/context/AppContext";
import { DynamicWidget } from "@dynamic-labs/sdk-react-core";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl } from "@/pages/_app";
import { redirect } from "next/navigation";
import { useNavigate } from "react-router-dom";

export default function Header(props: any) {
  // const [email, setEmail] = useState('');
  // const [address, setAddress] = useState('');
  const { isHeaderFullWidth, email, setEmail, address, setAddress } = useAppContext();
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const { user } = useDynamicContext();

  const tabs = [
    { name: 'Home', href: '/' },
    { name: 'Find', href: '/Tutor' },
    { name: 'Forums', href: '/products' },
  ];

  const getUserFromEmail = async (email: string) => {
    if (email && address) {
      console.log('Email:', email, 'Address:', address);
      await axios.get(`${backendUrl}/user/getUser`, {
        headers: {
          email: email,
        }
      }).then((response) => {
        console.log('User:', response.data);
      }).catch(async (error) => {
        console.log('Error:', error);
        if (error.response.status === 404) {
          await axios.post(`${backendUrl}/user/createUser`, {
            email: email,
            address: address,
          }).then(() => {
            router.push('/signup');
          })
        } else {
          console.log('Error:', error);
        }
      });
    }
  }

  useEffect(() => {
    console.log('User:', user);
    if (user) {
      for (let i = 0; i < user?.verifiedCredentials.length; i++) {
        if (user?.verifiedCredentials[i].email) {
          console.log('Email:', user?.verifiedCredentials[i].email);
          setEmail(user?.verifiedCredentials[i].email!);
          break;
        }
        if (user?.verifiedCredentials[i].address) {
          console.log('Address:', user?.verifiedCredentials[i].address);
          setAddress(user?.verifiedCredentials[i].address!);
        }
      }
      getUserFromEmail(email);
    }
  }, [user, email, address]);

  return (
    <div
      className="flex w-full items-center justify-around custom-bg-white-color h-20 border-b-[1.5px] custom-border-color"
    >
      <div
        className={`${isHeaderFullWidth ? "w-full px-32" : "container custom-container"} flex justify-between items-center custom-bg-invert-color`}
      >
        <div
          className="custom-text-color text-2xl font-bold cursor-pointer"
          onClick={() => router.push('/')}
        >
          Stu<span className="text-red">Q</span>
        </div>

        {/* Tabs and Sign Up Button Group */}
        <div className="flex items-center">
          {/* Navigation Tabs */}
          <div className="flex flex-row mr-8 gap-8">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className="custom-text-color text-md cursor-pointer hover:text-red-600"
                onClick={() => router.push(tab.href)}
              >
                {tab.name}
              </div>
            ))}
          </div>

          {/* Sign Up Button */}
          {/* <button
            className="py-2 px-4 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => router.push('/signup')}
          >
            Sign Up
          </button> */}
          <DynamicWidget key={'flowwallet'} />
        </div>
      </div>
    </div>
  );
}
