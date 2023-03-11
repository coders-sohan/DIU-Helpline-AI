import React from "react";
import img from '../assets/logo-removebg-preview.png'



const Navbar = () => {


  return (
    <>
      <div className="shadow-sm sticky top-0 z-50 bg-base-100">
        <div className="mid-container ">
          <div className=" bg-base-100 px-0 py-3">

            <div className=" flex justify-between items-center">
              <div>
                <img src={img} alt="" className="w-40" />
              </div>

              <div>
                <button className=" bg-white shadow rounded-xl px-3 py-1 font-semibold cursor-pointer">Student</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

// cart drawer
