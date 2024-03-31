import Layout from '@/containers/Layout'
import React, { useEffect, useState } from 'react'
import { ChatView, ChatUIProvider, darkChatTheme, ChatViewList } from '@pushprotocol/uiweb'
import { useAppContext } from '@/context/AppContext'
import axios from 'axios'
import { backendUrl } from './_app'

const Tutor = () => {
    const { email, setEmail, address, setAddress } = useAppContext();
    const [recommendedRoommates, setRecommendedRoommates] = useState([]);

    const getRecommendedRoommmates = async () => {
        await axios.get(`${backendUrl}/user/getrecommendation`, {
            headers: {
                email: email,
            }
        }).then((response) => {
            console.log('Recommended Roommates: ', response.data);
            setRecommendedRoommates(response.data);
        }).catch((error) => {
            console.log('Error:', error);
        })
    };

    useEffect(() => {
        if (email) {
            getRecommendedRoommmates();
        }
    }, [email])

    return (
        // <ChatUIProvider theme={darkChatTheme} account={address}>
        <Layout>
            <div className='flex items-start justify-start'>
                <h1 className="font-semibold text-xl">Find roommates with similar interests</h1>
            </div>
            <div className='flex gap-2 flex-col items-start justify-start'>
                <div className='gap-4 flex flex-col'>
                    {recommendedRoommates.map((room) => (
                        // @ts-ignore
                        <div className='flex flex-col items-center justify-start border-[1px] border-black rounded-md' key={room?.id}>
                            <div className='flex flex-row items-start justify-start p-2 gap-2'>
                                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0pAOPeDLdmquesK5eMgiMqxmrgyGRBhfP2Q&usqp=CAU'} className='rounded-full h-10 w-10' />
                            </div>
                            {/* @ts-ignore */}
                            <h3>{room.name}</h3>
                            {/* @ts-ignore */}
                            <p>{room.email}</p>
                            {/* @ts-ignore */}
                            <p className='flex gap-2 p-3'>
                                {/* @ts-ignore */}
                                {room.interests.map((interest) => (
                                    <span className='flex flex-row border-[1px] border-black p-2 rounded-md' key={interest}>{interest}</span>
                                )
                                )}
                            </p>
                        </div>
                    ))}
                </div>
                {/* <div>
                    <ChatView chatId='0xEDF59F183584107B20e2c95189A4423224bba8F2' />
                </div> */}
            </div>
        </Layout>
    )
}

export default Tutor