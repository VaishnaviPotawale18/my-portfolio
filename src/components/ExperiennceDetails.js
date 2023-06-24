import React from 'react'
import Navbar from './Navbar'
import {AiOutlineCheckCircle,AiFillCheckCircle,} from "react-icons/ai"
import {BsCheckCircleFill} from "react-icons/bs"
import {HiCheckCircle} from 'react-icons/hi'
const ExperienceDetails = () => {
  return (
    <>
    
    
        {/* <div  className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'> */}
          <div  className='w-full h-full bg-black rounded-lg shadow-lg  shadow-gray-800 text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-xl sm:text-2xl font-bold inline border-b-4 border-gray-500'>   WORK EXPERIENCE</p>
            </div>
 {/* <div className='  '> */}
            <p className='text-lg sm:xl font-bold text-justify mt-3  '
            >Seven months of experience as Salesforce Developer at Cloudaction Technology as Trainee
Responsibilities:</p>

            <br />
<div className='text-align-justify'>
            <p className='text-lg text-justify flex'><span className='pr-2 '>{<HiCheckCircle color='white' size={30} />}</span> I Have Completed training on salesforce administration and developer hands on
experience on security model and flows.</p>

<p className=' text-justify flex text-lg  sm:text-xl '> <span className='pr-2'>{<HiCheckCircle size={30} color='white'/>}</span>Developing and optimizing Apex Trigger, Apex Classes ,and Asynchronous Apex.</p>
<p className='text-lg  sm:text-xl text-justify flex'><span className='pr-2'>{<HiCheckCircle size={30} color='white'/>}</span> Worked on Lightning web components and visualforce pages.</p>
<p className='text-lg  sm:text-xl  text-justify flex'><span className='pr-2'>{<HiCheckCircle size={30} color='white'/>}</span>Efficiently implemented and modified process Automation tools like Process builder ,
Workflow rules, Approval process, and Flows. </p>
<p className='text-lg  sm:text-xl text-justify flex'><span className='pr-2'>{<HiCheckCircle size={30} color='white'/>}</span>Performed migration of process builders and workflow rules to Flows and Apex
Trigger. </p>
<p className='text-lg  sm:text-xl  text-justify flex'><span className='pr-2'>{<HiCheckCircle size={30} color='white'/>}</span> Proficient in salesforce security setup like Profile, Permission set, OWDs, Roles and
Sharing Rules.</p>
<p className='text-lg  sm:text-xl  text-justify flex'><span className='pr-2'>{<HiCheckCircle size={30} color='white'/>}</span>Proficiently performed Bulk Data Load activities using Workbench and Data Loader.
 </p>
<br/>
<p className='text-center'>    Cloudaction Technology Services Pvt. Ltd , Pune. </p>
</div>
{/* </div> */}


      </div>
    
        </div>
    





     








    </>
  )
}

export default ExperienceDetails