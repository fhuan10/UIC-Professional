import './PageTemplate.css'

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
                        <img src = "/src/assets/images.png" alt= "UIC" height="50"></img>
                    </div>
                <a href="#Events">Events</a>
                <a href="#Connect">Connect</a>
                <a href="#Resources">Resources</a>
            </div>
        </div>


    )
}

export default PageTemplate