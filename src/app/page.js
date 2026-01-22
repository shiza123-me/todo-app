'use client';
import React from "react";
import { Icon } from "@iconify/react";
import TodoList from "./components/TodoList";
import CircularProgress from "./components/CircularProgress";
const Page = () => {
  const today = new Date();
const formattedDate = today.toLocaleDateString("en-GB", {
  day: "numeric",
  month: "long",
});

  return (
   <div className="grid grid-cols-1 lg:grid-cols-2">
    {/*first*/}
    <div className="bg-white rounded-lg shadow-lg mt-5 px-6 ml-6 py-2">
      <div className="flex flex-col md:flex-row justify-around">
        <div>
          <p className="font-bold text-red-400">to Do</p>
     <p className="text-sm">
  {formattedDate} <span className="text-gray-400">today</span>
</p>

        </div>
        <div>
          <TodoList/>
        </div>
      </div>
    {/*birthday*/}
    <div className="border border-gray-500 rounded-lg p-4">
     <div className="flex gap-6">
       <Icon icon="uil:circle" className="w-5 h-5 text-red-400 mt-1"/>
      <p className="font-bold text-xl">Attend Birthday Party</p>
     </div>
     {/*cards*/}
     <div className="grid grid-cols-1 md:grid-cols-2 px-12 gap-4">
      <p className="mt-4 text-gray-400">Planning to buy a thoughtful birthday gift, make all necessary preparations in advance, and attend the celebration to enjoy quality time, share joyful moments, and celebrate with friends and family.</p>
     <img
     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvYsIbumW5DmZHlRpNAqD_jijneaU6N4K2zg&s"
     className="w-fit h-fit  rounded-lg mt-4"
     />
     
     </div>
     <div className="flex flex-row flex-wrap text-xs justify-evenly mt-4">
      <p className="text-black">Pariority:<span className="text-blue-300">moderate</span></p>
    <p>Status: <span className="text-red-500">Not Started</span></p>
    <p className="text-gray-400">created on:20/10/2025</p>
     </div>
    </div>
    
    
    {/*design*/}

<div className="border border-gray-500 rounded-lg p-4 mt-4">
     <div className="flex gap-6">
       <Icon icon="uil:circle" className="w-5 h-5 text-blue-900 mt-1"/>
      <p className="font-bold text-xl">landing page design</p>
     </div>
     {/*cards*/}
     <div className=" grid grid-cols-1 md:grid-cols-2  px-12 gap-4">
      <p className="mt-4 text-gray-400">ontinuous communication with the client and team helped refine the features and improve the overall workflow. Feedback was implemented at each stage to ensure accuracy, usability, and timely delivery of the landing page.</p>
     <img
     src="https://cdn.sanity.io/images/599r6htc/regionalized/3502e77d67a0239ee8b84fd86fc399599caae108-2400x2400.png?w=2400&h=2400&q=75&fit=max&auto=format"
     className="w-fit h-fit  rounded-lg mt-4"
     />
     
     </div>
     <div className="flex flex-row flex-wrap text-xs justify-evenly mt-4">
      <p className="text-black">Pariority:<span className="text-blue-300">moderate</span></p>
    <p>Status: <span className="text-red-500">Not Started</span></p>
    <p className="text-gray-400">created on:20/10/2025</p>
     </div>
    </div>
    
    
    {/*presentation*/}
    <div className="border border-gray-500 rounded-lg p-4 mt-4">
     <div className="flex gap-6">
       <Icon icon="uil:circle" className="w-5 h-5 text-blue-900 mt-1"/>
      <p className="font-bold text-xl">Presentation </p>
     </div>
     {/*cards*/}
     <div className=" grid grid-cols-1 md:grid-cols-2  px-12 gap-4">
      <p className="mt-4 text-gray-400">The project requirements were discussed with the client 
        and team to understand expectations, plan tasks, and coordinate effectively. 
       .</p>
     <img
     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT03RLkYw5wvu1asQdAuMpo6GiwsVzmoanyAw&s"
     className="w-fit h-fit  rounded-lg mt-8"
     />
     
     </div>
     <div className="flex flex-row flex-wrap text-xs justify-evenly mt-4">
      <p className="text-black">Pariority:<span className="text-blue-300">moderate</span></p>
    <p>Status: <span className="text-red-500">Not Started</span></p>
    <p className="text-gray-400">created on:20/10/2025</p>
     </div>
    </div>
    
    </div>
    
    {/*second*/}
    <div className="mt-5 px-6 ml-6 py-2">
{/*Progress*/}
<div className=" gap-8  bg-white rounded-lg shadow-lg p-6">
  <p  className="font-bold text-red-400">Task Status</p>
  <div className="flex flex-col md:flex-row justify-around mt-4">
   <div>
     <CircularProgress
    value={84}
    color="#EA7B7B"
  />
  <div className="flex items-center">
  <Icon icon="mdi:dot" className="text-red-500 w-8 h-8"/>
  <p>Completed</p>
</div>
   </div>

  <div>
    <CircularProgress
    value={46}
    color="#4ade80"
    
  />
  <div className="flex items-center">
   <Icon icon="mdi:dot" className="text-green-500 w-8 h-8"/>
  <p>In Progress</p>
</div>
  </div>

  <div>
    <CircularProgress
    value={13}
    color="#60a5fa"
  
  />
  <div className="flex items-center">
   <Icon icon="mdi:dot" className="text-blue-500 w-8 h-8"/>
  <p>Not Started</p>
</div>
  </div>
  </div>
  
</div>
{/*completed*/}
<div className="bg-white rounded-lg shadow-lg mt-5 p-6 ">
  <div className="flex items-center gap-2">
    <Icon icon="fluent-mdl2:completed" className=""/>
  <p className="text-red-400">Completed Task</p>
  </div>
  <div className="border border-gray-500 rounded-lg mt-4">
    <div className="flex px-4 py-2 gap-6">
       <Icon icon="uil:circle" className="w-5 h-5 text-green-900 mt-1"/>
      <p className="font-bold text-xl">Walk Cat </p>
     </div>
  <div className=" grid grid-cols-1 md:grid-cols-2  px-12 gap-4  mt-4">
      
      <p className="mt-4 text-gray-400">Take the cat to the park every day to ensure they get fresh air, exercise, and a chance to explore safely. Spending time outdoors will keep your cat active and happy, while also strengthening the bond between you and your furry friend.</p>
     <img
     src="https://hips.hearstapps.com/hmg-prod/images/white-cat-breeds-kitten-in-grass-67bf648a54a3b.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=1200:*"
     className="w-fit h-fit  rounded-lg mt-4"
     />
      <div className="py-3">
       <p className="px-3 mt-2 text-sm ">Status: <span className="text-blue-500">Completed</span></p>
   <p className="text-xs text-gray-500 px-3">Completed: Two Days ago</p>
     </div>
     </div>
     </div>
      <div className="border border-gray-500 rounded-lg mt-4">
    <div className="flex px-4 py-2 gap-6">
       <Icon icon="uil:circle" className="w-5 h-5 text-green-900 mt-1"/>
      <p className="font-bold text-xl">Conduct meeting</p>
     </div>
      <div className=" grid grid-cols-1 md:grid-cols-2  px-12 gap-4 mt-4">
      <p className="mt-4 text-gray-400">Successfully conducted the scheduled meeting, discussing all agenda items, addressing team concerns, and aligning on project goals.</p>
     <img
     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8HmUSyhptJSAceCDN6-udJmnWkIAvloz2Aw&s"
     className="w-fit h-fit  rounded-lg mt-4"
     />
      <div className="py-3">
       <p className="px-3 mt-2 text-sm">Status: <span className="text-blue-500">Completed</span></p>
   <p className="text-xs text-gray-500 px-3">Completed: Two Days ago</p>
     </div>
     </div>
    </div>
    
</div>

    </div>
   </div>
  )
}

export default Page