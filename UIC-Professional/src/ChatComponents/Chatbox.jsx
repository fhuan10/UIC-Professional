import { useState } from 'react'
import './Chatbox.css'

function Chatbox() {
  const [count, setCount] = useState(0)

  return (
    <div className="Chatbox">
        <div className="ChatboxHeader">
            <img src="https://thumbs.dreamstime.com/b/people-technology-casual-young-man-holding-touch-pad-tablet-pc-grey-background-48981971.jpg"></img>
            <div className="ChatboxHeaderText">
                <h2>Bob the Builder</h2>
                <p>UIC Alumini | Class of 2021</p>
            </div>
        </div>

        <div className="ChatInteractionPlace">
            <br></br>
        </div>

        <div className="ChatSend">
            <form>
                <input className="ChatSendBar" type="search"></input>
                <button className="ChatSendButton" type="submit">SEND</button>
            </form>
        </div>
    </div>
  )
}

export default Chatbox
