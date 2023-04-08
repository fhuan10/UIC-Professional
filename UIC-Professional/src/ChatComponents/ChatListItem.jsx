import { useState } from 'react'
import './ChatListItem.css'

function ChatListItem(item) {

  return (
    <div className="ChatListItem">
        <img className="ChatPersonImage" src="https://thumbs.dreamstime.com/b/people-technology-casual-young-man-holding-touch-pad-tablet-pc-grey-background-48981971.jpg"></img>
        <div className="ChatPersonText">
            <h2>{item.name}</h2>
            <p>{item.role}</p>
            <i><p>{item.name}: {item.message}</p></i>

        </div>
    </div>
  )
}

export default ChatListItem
