import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ReactNode, useState } from "react";

import { useAppContext } from "@/context/AppContext";

export default function Layout({
  children,
}: {
  children: ReactNode | ReactNode[];
}) {
  const { isFullHeight,  } = useAppContext();

  return (
    <div className={`flex flex-col w-screen items-center ${isFullHeight ? "h-screen" : "min-h-screen justify-between"}`}>
      <Header isFullWidth={false}></Header>
      {children}
      {/* <Footer></Footer> */}
      <Footer></Footer>
    </div>
  );
}