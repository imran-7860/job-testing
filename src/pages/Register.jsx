import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  

  return (
    
    <div className='container mx-auto'>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-9 ">
      <div className="flex flex-col flex-wrap justify-center items-start  p-10  md:w-[90%]  mx-auto bg-white shadow-xl rounded-xl ">
        <div className='text-4xl font-bold mx-auto '>Register</div>
        <label htmlFor="name" className='font-semibold mt-7'>Name: </label>
        <input type="text" placeholder='Enter your name' id='name' className='mt-2 px-2 py-2  w-[80%] outline-none border border-blue-600 rounded bg-blue-100 ' />
        <label htmlFor="email" className='font-semibold mt-2'>Email: </label>
        <input type="email" placeholder='Enter your email' id='email' className='mt-2 mb-2 px-2 py-2  w-[80%] outline-none border border-blue-600 rounded bg-blue-100 ' />
        <label htmlFor="password" className='font-semibold'>Password:</label>
        <input type="password" placeholder='Enter your password' className='mt-2 mb-2 px-2 py-2 w-[80%] outline-none border border-blue-600 rounded bg-blue-100 ' />

        <select className='mt-3 mb-2 px-2 py-2 w-[80%] outline-none border border-blue-600 rounded bg-blue-100 '>

           <option value="job_seeker" defaultChecked>Select</option>
           <option value="job_seeker">Job Seeker</option>
           <option value="employer">Employer</option>
       </select>

        <button className='mt-3 mb-3 px-2 py-2 w-[80%]  border border-blue-700 rounded bg-blue-500  font-semibold text-white'>Sign In</button>
       

        <div className='mt-3 lg:ml-10 '>Already have an account? <Link to={'/login'} className='text-blue-500 font-medium underline'>Login In</Link></div>
      
      </div>
      <div className="">
      <img
          src="https://5.imimg.com/data5/SELLER/Default/2023/9/345269831/VB/NH/EV/191218515/job-portal-service.jpg"
          alt=""
          className="lg:w-[500px] w-full    "
        />
      </div>
    </div>
</div>
  );
};

export default Register;
