import React from 'react'
import { ReactComponent as ChatBtn } from '../../assets/chat.svg'

const ChatButton = () => {
  return (
    <div className='fixed bottom-0 right-0 m-0 p-0 cursor-pointer'>
        <ChatBtn />
    </div>
  )
}

export default ChatButton