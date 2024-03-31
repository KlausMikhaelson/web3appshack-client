import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { useAppContext } from "@/context/AppContext";

export default function Header(props: any) {
  const { isHeaderFullWidth } = useAppContext();
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const tabs = [
    { name: 'Home', href: '/' },
    { name: 'Find', href: '/' },
    { name: 'Forums', href: '/forums' },
  ];

  return (
    <div
      className="flex w-full items-center justify-around custom-bg-white-color h-20 border-b-[1.5px] custom-border-color"
    >
      <div
        className={`${isHeaderFullWidth ? "w-full" : "container custom-container"} flex justify-between items-center custom-bg-invert-color px-32`}
      >
        <div
          className="custom-text-color text-2xl font-bold cursor-pointer"
          onClick={() => router.push('/')}
        >
          {/* LOGO HERE */}
          <img src="/assets/logo.png" alt="Logo" className="pl-2 h-16 w-auto" />
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
          <button
            className="py-2 px-4 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => router.push('/signup')}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
