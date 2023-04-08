import './PageTemplate.css'
import { Link } from 'react-router-dom'

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function PageTemplate() {
    const [count, setCount] = useState(0)

    return (
        <div className="PageTemplate">
            <div class="navbar">
                    <div class="logo-image">
                        <img className="logo-image" src = "/src/assets/logo-image.png" alt= "UIC" height="50"></img>
                    </div>

                    <Link to="/events">Events</Link>
                    <Link to="/chat">Chat</Link>
                    <Link to="/browse-someone">Connect</Link>
                    <Link to="/resources">Resources</Link>
            </div>
        </div>


    )
}

export default PageTemplate