import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsFillSendFill } from 'react-icons/bs';
import img from '../assets/logo.jpeg'

const Home = () => {
    const [chat, setChat] = useState()
    const [update, setUpdate] = useState()
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();



    useEffect(() => {
        fetch('https://diu-helpline-ai-server.vercel.app/api/v1/send-message')
            .then(res => res.json())
            .then(data => {
                setChat(data)
            })

    }, [update])



    const handleChat = (data) => {
        // e.preventDefault()
        const chat = data.chat
        let replyMessage = []

        if (data.chat === 'Hi') {
            replyMessage = 'Hello! How I can help  you today?'
        } else if (data.chat === 'How i can get admission in Daffodil International University?') {
            replyMessage = 'Last date to apply for admission is 10th May 2023 and the admission test will be held on 12th May 2023'
        } else if (data.chat === ' can you tell me the process for admission?') {
            replyMessage = 'sure!! You can get apply here in two ways ,firstly you can go online and apply through https://pd.daffodilvarsity.edu.bd/admission/online  this link or you can directly come to the admission office of the DIU.If you apply through the online you need to carry your photograph ,scanned copy of your signature SSC and HSC academy transcript and NID card copy and.And if you apply through the admission of DIU you need to carry some documents like six copies of your photograph scan copy of your signature copy of your NID card copy of your parents NID card copy of your local guardian NID card copy and original copy of ssc and hsc academy transcript.  In this case you must bring multiple copies of each document.'
        } else if (data.chat === 'can i get any weaver?') {
            replyMessage = 'Of course you will get. But first tell me What is your result of SSC and HSC exam?'
        } else if (data.chat === 'I got  A+ in SSC and golden A+ in HSC.') {
            replyMessage = 'You get 50% weber on tuition fees.If you want to keep your weber then you need to keep CGPA above 3.25 in every semester.'
        } else if (data.chat === 'How much money I will have to pay to complete my studies if I keep my weber?') {
            replyMessage = 'Please tell me which subject do you want to study.'
        } else if (data.chat === 'I want to study software engineering.') {
            replyMessage = 'You have to pay 58 thousand taka at the time of admission and then 20 thousand taka and also 60 thousand taka to 65 thousand taka every next semester.'
        } else {
            replyMessage = 'Sorry, I did not understand ! Please let me know what you want to know'
        }

        fetch('https://diu-helpline-ai-server.vercel.app/api/v1/send-message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content: chat,
                reply: replyMessage
            })
        })
            .then(res => res.json())
            .then(data => {
                setUpdate(Math.random())
                reset()
            })

    }


    const handleDelete = () => {
        fetch('https://diu-helpline-ai-server.vercel.app/api/v1/send-message/delete', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                setUpdate(Math.random())
                reset()
            })
    }



    return (
        <div className='bgImg'>
            <div className='mid-container relative h-[90vh]'>
                <div className='flex justify-center'>
                    <div className='absolute mt-10 w-[85%] bottom-28   h-[85%] overflow-y-auto'>

                        {
                            chat?.slice(-5)?.map((item, index) => (
                                <div >
                                    <div className="chat chat-end">
                                        <div className="chat-image avatar">
                                            <div className="w-10 rounded-full">
                                                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80" alt='profile' />
                                            </div>
                                        </div>
                                        <div className="chat-bubble max-w-[50%]">{item?.content}</div>
                                    </div>
                                    <div className="chat chat-start">
                                        <div className="chat-image avatar">
                                            <div className="w-10 rounded-full">
                                                <img src={img} alt='profile' />
                                            </div>
                                        </div>
                                        <div className="chat-bubble max-w-[50%]">{item?.reply}</div>
                                    </div>
                                </div>
                            )
                            )
                        }

                    </div>
                </div>

                <form onSubmit={handleSubmit(handleChat)}>
                    <div className='flex justify-center bottom-14 absolute w-full  '>

                        <div className='w-[80%]'>
                            <input
                                type="text"
                                id='chat'
                                name='chat'
                                placeholder="Type here" className="input rounded-none w-full "
                                {...register("chat", { required: true })}

                            />
                        </div>
                        <button
                            type='submit'
                            className='bg-white py-2 px-5 cursor-pointer hover:bg-gray-400 duration-200 hover:text-white flex justify-center items-center  mr-9'>
                            <BsFillSendFill />
                        </button>

                    </div>
                </form>

                {
                    chat?.length > 0 && (
                        <div className=' mt-20 flex justify-center '>
                            <button
                                onClick={handleDelete}
                                className='btn btn-error btn-sm absolute bottom-0 '>Clear Chat</button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Home;