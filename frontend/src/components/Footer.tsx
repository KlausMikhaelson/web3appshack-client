import Image from "next/image";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  return (
    <div className="flex flex-row justify-center w-screen p-3 mt-2 items-center border-t-[1.5px] custom-border-color gap-4">
      Copyrights Reserved by What
    </div>
  );
}
