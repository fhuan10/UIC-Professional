import { useState } from 'react'
import './ChatMessenger.css'
import ChatNavBar from './ChatComponents/ChatNavBar'
import Chatbox from './ChatComponents/Chatbox'
import PageTemplate from './PageTemplate'

function ChatMessenger() {

  return (
    <div className="ChatMessenger">
        <PageTemplate />
        <ChatNavBar />
        <Chatbox />
    </div>
  )
}

export default ChatMessenger
