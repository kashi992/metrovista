import { useState } from "react";
import "./App.css";
import FB_Icon from "./assets/images/FB_Icon";
import In_Icon from "./assets/images/In_Icon";
import Tw_Icon from "./assets/images/Tw_Icon";

function App() {
  return (
    <section className="bg-[#232A34] text-white min-h-screen py-[60px] flex flex-col">
      <div className="container flex-1 flex flex-col justify-center">
        <h1 className="md:text-[50px] text-[30px] text-center font-semibold mb-6">Exciting Things Are Coming Soon!</h1>
        <p className="text-center leading-[1.6] mb-10 md:px-10">
        We’re working hard behind the scenes to bring something amazing. Stay tuned for updates and be the first to know when we launch!
        </p>
        <form className="flex gap-4 justify-center md:px-10 md:flex-nowrap flex-wrap">
          <input type="text" placeholder="Email Address" className="bg-white border-white text-black h-[60px] w-full p-4 border-[1px] border-black" required/>
          <button className="bg-white text-black px-6 py-2 border-[1px] border-black cursor-pointer hover:bg-transparent hover:text-white transition-all duration-300 text-nowrap uppercase md:w-fit w-full md:h-full h-[50px]">Notify Me!</button>
        </form>
        <p class="text-center text-sm mt-4">We’ll send you exclusive updates and early access to our launch!</p>
        <div className="flex justify-center gap-5 mt-12">
          <FB_Icon className="w-[40px] h-[40px]" iconClr="#fff"/>
          <In_Icon className="w-[40px] h-[40px]" iconClr="#fff"/>
          <Tw_Icon className="w-[40px] h-[40px]" iconClr="#fff"/>
        </div>
      </div>
    </section>
  );
}

export default App;
