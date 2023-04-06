import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { BsFillSendFill } from "react-icons/bs";
import img from "../assets/logo.jpeg";

const Home = ({ chat, setChat, update, setUpdate }) => {
//   const [chat, setChat] = useState();
//   const [update, setUpdate] = useState();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();


  const handleChat = (data) => {
    // e.preventDefault()
    const chat = data.chat;
    let replyMessage = [];

    if (data.chat === "Hi") {
      replyMessage = "Hello! How I can help you today?";
    } else if (
      data.chat ===
      "How I can get admission to Daffodil International University?"
    ) {
      replyMessage =
        "Last date to apply for admission is 10th May 2023 and the admission test will be held on 12th May 2023.";
    } else if (data.chat === "Can you tell me the process for admission?") {
      replyMessage = `Sure!! You can get apply here in two ways, firstly you can go online and apply at "https://pd.daffodilvarsity.edu.bd/admission/online"  this link or you can directly come to the admission office of the DIU. If you apply online you need to carry your photograph, scanned copy of your signature SSC and HSC academy transcript, and NID card copy. And if you apply for admission to DIU you need to carry some documents like six copies of your photograph scan copy of your signed copy of your NID card copy of your parent's NID card copy of your local guardian's NID card copy and an original copy of SSC and HSC academy transcript.  In this case, you must bring multiple copies of each document.`;
    } else if (data.chat === "Can I get any weaver?") {
      replyMessage =
        "Of course, you will get it. But first, tell me What is your result of the SSC and HSC exams?";
    } else if (data.chat === "I got  A+ in SSC and a golden A+ in HSC.") {
      replyMessage =
        "You get 50% weber on tuition fees. If you want to keep your weber then you need to keep CGPA above 3.25 every semester.";
    } else if (
      data.chat ===
      "How much money I will have to pay to complete my studies if I keep my weber?"
    ) {
      replyMessage = "Please tell me which subject you want to study.";
    } else if (data.chat === "I want to study software engineering.") {
      replyMessage =
        "You have to pay 58 thousand takas at the time of admission and then 20 thousand takas and also 60 thousand takas to 65 thousand takas every next semester.";
    } else {
      replyMessage =
        "Sorry, I did not understand! Please let me know what you want to know.";
    }

    fetch("https://diu-helpline-ai-server.vercel.app/api/v1/send-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: chat,
        reply: replyMessage,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUpdate(Math.random());
        reset();
      });
  };

  

  return (
    <div className="bgImg">
      <div className="container mx-auto relative h-[90vh]">
        <div className="flex justify-center">
          <div className="absolute mt-10 w-[85%] h-[85%] overflow-y-auto">
            {chat?.slice(-5)?.map((item, index) => (
              <div key={index}>
                <div className="chat chat-end">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img
                        src="https://i.ibb.co/L9f3qyp/profile.png"
                        alt="profile"
                      />
                    </div>
                  </div>
                  <div className="chat-bubble chat-bubble-success text-white max-w-[50%]">{item?.content}</div>
                </div>
                <div className="chat chat-start">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img src="https://i.ibb.co/YTz9613/Whats-App-Image-2023-04-06-at-17-26-26.jpg" alt="profile" className="border border-green-600 rounded-full" />
                    </div>
                  </div>
                  <div className="chat-bubble chat-bubble-success text-white max-w-[50%]">{item?.reply}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="bottom-14 absolute w-full mx-auto">
            <form onSubmit={handleSubmit(handleChat)} className="flex justify-center shadow-lg">
              <div className="w-[80%]">
                <input
                  type="text"
                  id="chat"
                  name="chat"
                  placeholder="Type here"
                  className="input input-bordered input-success w-full bg-gray-200 "
                  {...register("chat", { required: true })}
                />
              </div>
              <button
                type="submit"
                className="btn btn-success text-white"
              >
                <BsFillSendFill />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
