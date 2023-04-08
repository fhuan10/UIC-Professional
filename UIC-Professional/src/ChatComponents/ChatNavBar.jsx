import { useState } from 'react'
import './ChatNavBar.css'
import ChatListItem from './ChatListItem'

function ChatNavBar() {

  return (
    <div className="ChatNavBar">
        <div className="ChatNavBarHeader">
            <br></br>
            <h2>Chats</h2>
        </div>

        <div className="ChatsList">
            <ChatListItem name="Bob the Builder" role="UIC Alumini | Class of 2021" message="Hi, How a..."/>
            <ChatListItem name="Neil Thomas" role="CS Professor"message="Hello, I am..."/>
            <ChatListItem name="Leo Dicapro" role="Civil Engineering Senior"message="Bob, there's a..."/>
            <ChatListItem name="Justin Timber" role="Biology Junior"message="Haha, very..."/>
            <ChatListItem name="Alexandar Knight" role="UIC Alumini | Class of 2010"message="Did you..."/>
        </div>

    </div>
  )
}

export default ChatNavBar
