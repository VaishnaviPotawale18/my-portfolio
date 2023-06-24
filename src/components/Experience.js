// import Info from './Info'
import { Link, Routes } from "react-router-dom";
import Contact from "./Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { useState } from "react";
import ExperienceDetails from "./ExperiennceDetails";

const Experience = () => {
  //   return (
  //     Where I’ve Worked
  // Here are companies Where I’ve Worked

  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <div name="Skills" className="bg-black w-full h-auto">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
          <div>
            <p className="text-3xl font-bold border-b-4 border-gray-500 p-2 inline">
              Experience
            </p>
            <p className="py-6"> Here are companies Where I’ve Worked</p>
          </div>

          <div className=" ml-10  bg-gradient-to-b from-gray-800 to-black  shadow-md shadow-gray-600 rounded-lg  p-4 text-center w-4/5 md:w-4/5  ">
            {/* <div className="grid bg-blue-100 sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0"> */}

            <h2 className="text-xl font-bold">
              {/* {" "} */}
              Cloudaction technology service pvt ltd
            </h2>
            <h3 className="text-gray-300 text-lg font-bold">Trainee</h3>
            <p className="text-gray-500">Aug 2022 to feb 2023</p>
   

   { isVisible ? (          
            <button onClick={()=>setIsVisible(false)} className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto  rounded-md hover:scale-110 duration-300">
              Show Less </button> ):(
                 <button onClick={()=>setIsVisible(true)} className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto  rounded-md hover:scale-110 duration-300">
                 Show More </button>
            )
   }
       {isVisible && <p>{<ExperienceDetails/>} </p>}



          </div>
        </div> 

      </div>
    </>
  );
};

export default Experience;
