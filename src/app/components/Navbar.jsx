'use client';
import React from "react";
import { Icon } from "@iconify/react";
export default function Navbar() {
    return (
        <div className="bg-yellow-50 p-3 flex justify-around gap-3">
            <p className="text-xl  font-bold mt-2">Dash<span className="text-red-500">bord</span></p>
        {/* Search bar */}
<div className="relative w-full max-w-sm">
  {/* Search Input */}
  <input
    type="text"
    placeholder="Type search..."
    className="w-full border border-gray-300 text-gray-500 bg-white rounded-lg px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-red-400"
  />

  {/* Search Icon */}
  <button
    className="absolute inset-y-0 right-0 rounded-lg flex  items-center bg-red-400 justify-center px-2"
  >
    <Icon icon="ic:baseline-search" className="w-5 h-5 text-gray-500 " />
  </button>
</div>
{/*Icons*/}
<div className="flex gap-4 hidden md:flex">
    <div className=" bg-red-400 h-fit rounded-lg p-2">
    <Icon icon="mdi-light:bell" className="text-white  w-5 h-5"/>
</div>
<div className=" bg-red-400 h-fit rounded-lg p-2">
    <Icon icon="uit:calender" className="text-white  w-5 h-5"/>
</div>
</div>
<div className="text-sm hidden md:flex">
   <div>
     <p>Tuesday</p>
    <p className="text-blue-500">15/1/2026</p>
   </div>
</div>

        
        </div>
    );
}
