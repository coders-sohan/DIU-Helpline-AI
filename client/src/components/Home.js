import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsFillSendFill } from 'react-icons/bs';
import img from '../assets/logo.jpeg'

const Home = () => {
    const [chat, setChat] = useState()
    const [update, setUpdate] = useState()
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

    useEffect(() => {
        fetch('http://localhost:8000/api/v1/send-message')
            .then(res => res.json())
            .then(data => {
                setChat(data)
            })
    }, [update])


    const handleChat = (data) => {
        // e.preventDefault()
        const chat = data.chat
        fetch('http://localhost:8000/api/v1/send-message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content: chat
            })
        })
            .then(res => res.json())
            .then(data => {
                setUpdate(Math.random())
                reset()
            })
    }


    return (
        <div className='bgImg'>
            <div className='mid-container relative h-[85vh]'>
                <div className='flex justify-center'>
                    <div className='absolute mt-10 w-[85%] h-[85%] overflow-y-auto'>

                        {
                            chat?.map((item, index) => (
                                <>
                                    <div className="chat chat-end">
                                        <div className="chat-image avatar">
                                            <div className="w-10 rounded-full">
                                                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80"  alt='profile'/>
                                            </div>
                                        </div>
                                        <div className="chat-bubble">{item?.content}</div>
                                    </div>
                                    <div className="chat chat-start mb-5">
                                        <div className="chat-image avatar">
                                            <div className="w-10 rounded-full">
                                                <img src={img} alt='profile' />
                                            </div>
                                        </div>
                                        <div className="chat-bubble">Hello How are you?</div>
                                    </div>
                                </>
                            )
                            )
                        }

                    </div>
                </div>

                <form onSubmit={handleSubmit(handleChat)}>
                    <div className='flex justify-center bottom-0 absolute w-full '>

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
            </div>
        </div>
    );
};

export default Home;