import { Inter } from "@next/font/google";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

interface HeaderProps {
  isFullWidth: boolean;
}

export default function Header(props: HeaderProps) {
  const { isFullWidth = false } = props;
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  return (
    <div
      className={"flex flex-row w-full items-center justify-around custom-bg-white-color h-16 border-b-[1.5px] custom-border-color"}
    >
      <div
        className={"w-full px-2 custom-container flex flex-row justify-between p-0 py-2 items-center custom-bg-invert-color"}
      >
        <div
          className="custom-text-color text-2xl font-bold"
          onClick={() => router.push(`/`)}
        >
          What?
        </div>


      </div>
    </div>
  );
}
