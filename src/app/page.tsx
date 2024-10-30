

import * as React from "react";

import Aside from "@/components/Aside";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";

export default function Home() {
  return (
    <div className="text-black flex flex-col" style={{ height: "100vh" }}>
      <Header />
      <div className="flex-shrink flex-grow flex flex-nowrap">
        <Main />
        <Aside />
      </div>
      <Footer />
    </div>
  );
}
