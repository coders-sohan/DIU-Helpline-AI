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

        if (data.chat === 'hi') {
            replyMessage = 'Hello'
        } else if (data.chat === 'how are you') {
            replyMessage = 'I am fine'
        } else if (data.chat === 'what is your name') {
            replyMessage = 'My name is Chatbot'
        } else if (data.chat === 'what is your age') {
            replyMessage = 'I am 1 year old'
        } else if (data.chat === 'what is your hobby') {
            replyMessage = 'I like to chat with you'
        } else if (data.chat === 'what is your favorite color') {
            replyMessage = 'My favorite color is blue'
        } else if (data.chat === 'what is your favorite food') {
            replyMessage = 'My favorite food is pizza'
        } else if (data.chat === 'what is your favorite movie') {
            replyMessage = 'My favorite movie is Harry Potter'
        } else if (data.chat === 'what is your favorite book') {
            replyMessage = 'My favorite book is Harry Potter'
        } else if (data.chat === 'what is your favorite song') {
            replyMessage = 'My favorite song is Shape of you'
        } else if (data.chat === 'what is your favorite game') {
            replyMessage = 'My favorite game is PUBG'
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
                    <div className='absolute mt-10 w-[85%] h-[85%] overflow-y-auto'>

                        {
                            chat?.slice(-5)?.map((item, index) => (
                                <>
                                    <div className="chat chat-end">
                                        <div className="chat-image avatar">
                                            <div className="w-10 rounded-full">
                                                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80" alt='profile' />
                                            </div>
                                        </div>
                                        <div className="chat-bubble max-w-[50%]">{item?.content}</div>
                                    </div>
                                    <div className="chat chat-start mb-5">
                                        <div className="chat-image avatar">
                                            <div className="w-10 rounded-full">
                                                <img src={img} alt='profile' />
                                            </div>
                                        </div>
                                        <div className="chat-bubble max-w-[50%]">{item?.reply}</div>
                                    </div>
                                </>
                            )
                            )
                        }

                    </div>
                </div>

                <form onSubmit={handleSubmit(handleChat)}>
                    <div className='flex justify-center bottom-14 absolute w-full '>

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