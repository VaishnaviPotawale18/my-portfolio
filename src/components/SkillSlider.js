// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./style.css"
// import React from 'react'

// const ImageSlider = ({ images }) => {

// 	const settings = {
// 		// infinite: true,
// 		// dots: true,
// 		// slidesToShow: 1,
// 		// slidesToScroll: 1,
// 		// lazyLoad: true,
// 		// autoplay: true,
// 	// 	// autoplaySpeed: 2000,
//     //     dots: true,
//     //   infinite: true,
//     //   speed: 500,
//     //   slidesToShow: 2,
//     //   slidesToScroll:2



//     infinite: false,
//     autoplay: false,
//     slidesToShow: 3,
//     slidesToScroll:2,
//     initialSlide: 0,

// 	};
// 	return (
// 		<>
// 			<div className="tag">
// 				<h1>Image Gallery</h1>
// 			</div>
// 			<div className="imgslider">
// 				<Slider {...settings}>
// 					{images.map((item) => (
// 						<div key={item.id}>
// 							<img src={item.src} alt={item.alt} />
// 						</div>
// 					))}
// 				</Slider>
// 			</div>
// 		</>
// 	)
// }
// export default ImageSlider;



import React from "react";
import Slider from "react-slick";



import html from "../assets/skills/html.svg";
import css from "../assets/skills/css.svg";
import javascript from "../assets/skills/javascript.svg";
import reactImage from "../assets/skills/react.svg";
import tailwind from "../assets/skills/tailwindcss.svg";
import bootstrap from "../assets/skills/bootstrap.svg"
import redux from "../assets/skills/redux.svg"
import nodejs from "../assets/skills/nodejs.svg"
import mongoDb from "../assets/skills/mongodb.svg"
import express from "../assets/skills/express.svg"
import git from "../assets/skills/git.svg";
import postman from "../assets/skills/postman.png";
import docker from "../assets/skills/docker.svg";
import aws from "../assets/skills/aws.svg";
import github from "../assets/skills/github.png"

const SkillSlider = () => {
  const Images = [
    

    {
        id: 1,
        src: html,
        title: "HTML",
        // style: "shadow-orange-500",
      },
      {
        id: 2,
        src: css,
        title: "CSS",
        // style: "shadow-blue-500",
      },
      
      {
        id: 3,
        src: javascript,
        title: "JavaScript",
        // style: "shadow-yellow-500",
      },
      {
        id: 4,
        src:bootstrap,
        title: "Bootstrap",
        // style:"shadow-blue-700"
      },
      {
        id: 5,
        src: reactImage,
        title: "React",
        // style: "shadow-blue-600",
      },
      {
        id: 6,
        src: tailwind,
        title: "Tailwind",
        // style: "shadow-sky-400",
      },
      // {
      //   id: 8,
      //   src:redux,
      //   title: "Redux",
      //   style:"w-10"
      // },
      // {
      //   id: 9,
      //   src:express,
      //   title: "Express",
      //   style:"w-10"
      // },
      // {
      //   id: 10,
      //   src:nodejs,
      //   title: "Nodejs",
      //   // style:"shadow-lime-600"
      // },
      {
        id: 11,
        src:github,
        title: "Github",
        // style:"shadow-lime-600"
      },   
      {
        id: 12,
        src: git,
        title: "Git",
        style: "w-10",
      },
      




  ];

  const settings = {
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,

    //     infinite: false,
    // autoplay: false,
    // slidesToShow: 3,
    // slidesToScroll:2,
    // initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };








return (
  <>
    <div
      name="Skills"
      className=" bg-black w-full h-auto pb-10 "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white px-10">
        <div>
          <p className="text-3xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="pt-6 pb-16 ">These are the technologies I've worked with</p>
        </div>

        {/* <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0"> */}
        <Slider {...settings}>
          {Images.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md  py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4 text-center text-white">{title}</p>
            </div>
          ))}
          </Slider>
        {/* </div> */}
      </div>
    </div>
  </>
);
};

// export default Skills;

export default SkillSlider;
