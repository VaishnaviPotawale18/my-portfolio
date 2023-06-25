import React from "react";
// import ZomatoClone from "../assets/projects/Zomato Clone.png";
import nodeServer from "../assets/projects/bookRecordServer.png";
import myTask from "../assets/projects/myTask.png";
import bookMyShow from "../assets/projects/bookMyShow.png";
import portfolio  from "../assets/projects/portfolio.png"
  
const Projects = () => {
  const projects = [


    {
      id: 1,
      src: portfolio,
      demo : "my-portfolio-j87jujz4g-vaishnavipotawale18.vercel.app",
      code : "https://github.com/VaishnaviPotawale18/my-portfolio.git",

    },
    {
      id: 2,
      src: myTask,
      demo : "https://vaishnavipotawale18.github.io/Task_Management/",
      code : "https://github.com/VaishnaviPotawale18/Task_Management",

    },
    {
      id: 3,
      src: bookMyShow,
      demo: "https://book-my-show-website-aybbn3meo-vaishnavipotawale18.vercel.app/",
      code: "https://github.com/VaishnaviPotawale18/book-my-show-website",
       },
    
   
    // {
    //   id: 4,
    //   src: nodeServer,
    //   demo : "#",
    //   code : "https://github.com/ManishaLalage/book-record-management",

    // },
   
  ]
  return (
    <>
      <div
        name="Projects"
        className="bg-black w-full text-white md:h-auto"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-3xl font-bold inline border-b-4 border-gray-500">
              Projects
            </p>
            <p className="py-6">Checkout my all the Projects Here</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {projects.map(({ id, src , demo , code }) => (
              <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <a href={demo} target = "_blank" rel='noreferrer' className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </a>
                  <a href={code} target = "_blank" rel='noreferrer' className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
