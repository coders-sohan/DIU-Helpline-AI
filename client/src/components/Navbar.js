import React from "react";
import img from "../assets/logo-removebg-preview.png";
import { useForm } from "react-hook-form";

const Navbar = ({ chat, setUpdate }) => {
  const {
    reset,
    formState: { errors },
  } = useForm();

  const handleDelete = () => {
    fetch(
      "https://diu-helpline-ai-server.vercel.app/api/v1/send-message/delete",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setUpdate(Math.random());
        reset();
      });
  };

  return (
    <>
      <div className="shadow-md sticky top-0 z-50 bg-base-100">
        <div className="mid-container ">
          <div className="bg-base-100 px-0 py-3">
            <div className="flex justify-between items-center">
              <div>
                <img src={img} alt="" className="w-40" />
              </div>
              <div>
                {chat?.length > 0 && (
                  <button
                    onClick={handleDelete}
                    className="btn btn-error btn-sm"
                  >
                    Clear Chat
                  </button>
                )}
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
