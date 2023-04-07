import React from "react";
import { useForm } from "react-hook-form";
import { BsFillSendFill } from "react-icons/bs";

const Home = ({ chat, setUpdate }) => {
  //   const [chat, setChat] = useState();
  //   const [update, setUpdate] = useState();
  const {
    register,
    handleSubmit,
    reset,
    // watch,
    formState: { errors },
  } = useForm();

  const handleChat = (data) => {
    // e.preventDefault()
    const chat = data.chat;
    let replyMessage = [];

    if (data.chat === "hi") {
      replyMessage = "Hello! How I can help you today?";
    } else if (
      data.chat ===
      "how i can get admission to daffodil international university?"
    ) {
      replyMessage =
        "Last date to apply for admission is 10th May 2023 and the admission test will be held on 12th May 2023.";
    } else if (data.chat === "can you tell me the process for admission?") {
      replyMessage = `Sure!! You can get apply here in two ways, firstly you can go online and apply at "https://pd.daffodilvarsity.edu.bd/admission/online"  this link or you can directly come to the admission office of the DIU. If you apply online you need to carry your photograph, scanned copy of your signature SSC and HSC academy transcript, and NID card copy. And if you apply for admission to DIU you need to carry some documents like six copies of your photograph scan copy of your signed copy of your NID card copy of your parent's NID card copy of your local guardian's NID card copy and an original copy of SSC and HSC academy transcript.  In this case, you must bring multiple copies of each document.`;
    } else if (data.chat === "can i get any weaver?") {
      replyMessage =
        "Of course, you will get it. But first, tell me What is your result of the SSC and HSC exams?";
    } else if (data.chat === "i got a+ in ssc and a golden a+ in hsc.") {
      replyMessage =
        "You get 50% weber on tuition fees. If you want to keep your weber then you need to keep CGPA above 3.25 every semester.";
    } else if (
      data.chat ===
      "how much money i will have to pay to complete my studies if I keep my weaver?"
    ) {
      replyMessage = "Please tell me which subject you want to study.";
    } else if (data.chat === "i want to study software engineering.") {
      replyMessage =
        "You have to pay 58 thousand takas at the time of admission and then 20 thousand takas and also 60 thousand takas to 65 thousand takas every next semester.";
    } else if (data.chat === "does diu have any halls?") {
      replyMessage = "Yes";
    } else if (data.chat === "what facilities do the halls provide?") {
      replyMessage = `In-room Amenities \n\n
        ▪ One Bed per Student shall be offered \n
        ▪ Fully furnished rooms with beds & underbed drawers ▪ Study tables & Chair \n
         
        parents NID card copy of your local guardian NID card copy and original copy of ssc and \n
        some documents like six copies \n
        of your photograph scan copy of your signature copy of your NID card copy of your \n
        hsc academy transcript. In this case you must bring multiple copies of each \n
        document. \n
        ▪ Tube lights & LED, Fan \n
        ▪ Dustbin in each room \n
        ▪ 300 square feet spacious room \n \n
        
        Self Help Amenities \n
        ▪ Laundry Service \n
        ▪ Filter Water facility to be provided \n
        ▪ Medical facility available with first aid/ provided to sick Residents ▪ Doctor on call number(s) to be shared with the students \n
        ▪ Dining area \n \n
        
        Cost-Effective Living Option \n
        ▪ Cost-effective compared to other living options ▪ Get all services together in the single hall cost ▪ Long corridor infront of room \n
        ▪ Separate balcony in each room \n \n

        Electricity & Internet \n
        ▪ Electricity facility \n
        ▪ 24/7 Generator facility \n
        ▪ High speed internet for each students \n \n
        
        Housekeeping \n
        ▪ Rooms \n
        ▪ Washrooms \n
        ▪ Common areas are cleaned on a daily basis ▪ Regular pest controlled services \n \n
        
        Entertainment \n
        ▪ Mini lounge area with sitting arrangement \n
        ▪ Common TV \n
        ▪ Indoor games like carrom , chess, table tennis etc. \n
        Room Details
        ▪ Three hundred square feet DIU hall rooms are spacious and convenient enough to accommodate four students at a time. \n
        ▪ The room is fully furnished with beds and under-bed drawers. Each student will have separate study tables and chairs from their first day at the hall. There is enough light in the room to ensure a comfortable study environment. Also, high-speed internet and wifi connection for each student is available in the hall. Along with a stable electricity supply, each hall has a generator connection in case of power failure. Housekeeping and pest control service is also available to keep the area clean & hygienic.`;
    } else if (data.chat === "can students book a seat from home?") {
      replyMessage = `Yes. Students can book seat from home online using Hall Portal - "https://hall.daffodilvarsity.edu.bd/hall-portal.html"`;
    } else if (data.chat === "can the students select the room and hall?") {
      replyMessage = `No.`;
    } else if (
      data.chat === "who is eligible to apply for student accommodation?"
    ) {
      replyMessage = `Students parents or local guardian.`;
    } else if (data.chat === "when can I apply for accommodation?") {
      replyMessage = `After university admission.`;
    } else if (
      data.chat ===
      "can i apply for accommodation before i know i am accepted to the university?"
    ) {
      replyMessage = `No.`;
    } else if (data.chat === "will i get a refund if i cancel my contract?") {
      replyMessage = `No.`;
    } else if (data.chat === "hall cost of diu?") {
      replyMessage = `Hall Fees (Effect from Spring 2023) \n
        Per regular seat cost is BDT- 3000/- (Per month). But mode of
        the payment will be semester wise and advance. So, Student
        have to pay "BDT- 21000/-" only in 1st semester and after that
        "BDT- 18000/-" in every semester.`;
    } else {
      replyMessage =
        "Sorry, I did not understand! I'll getting advance day by day. Thank you for your cooperation with the information";
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
            {chat?.map((item, index) => (
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
                  <div className="chat-bubble chat-bubble-success text-white max-w-[50%]">
                    {item?.content}
                  </div>
                </div>
                <div className="chat chat-start">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img
                        src="https://i.ibb.co/YTz9613/Whats-App-Image-2023-04-06-at-17-26-26.jpg"
                        alt="profile"
                        className="border border-green-600 rounded-full"
                      />
                    </div>
                  </div>
                  <div className="chat-bubble chat-bubble-success text-white max-w-[50%]">
                    {item?.reply}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bottom-5 absolute w-full mx-auto ">
            <form
              onSubmit={handleSubmit(handleChat)}
              className="flex justify-center"
            >
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
              <button type="submit" className="btn btn-success text-white">
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
