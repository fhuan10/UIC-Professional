import './PersonalPages.css'

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PageTemplate from './PageTemplate'

function PersonalPages() {
    const [count, setCount] = useState(0)

    

    return (
        <div className="PersonalPages">
            <PageTemplate></PageTemplate>
            <div class="background">
                <div class="vertical-flex-container">
                    <div class = "picturecont">
                        <img src = "/src/assets/logo-image.png" alt= "UIC" height="auto"></img>
                    </div>

                    <div class="namepos">
                            <h6>Name: Alumni UIC</h6>
                            <h6>Current Position: Data Scientist</h6>

                     </div>
                     <div class="button">
                        <a href="">
                            <button class= "button"> Message </button>
                        </a>
                     </div>
                        
                </div>
                <div class="bottom-section">
                    <div class="tags">
                        <h6>Tags: </h6> 
                        <a href="url">Alumni for 6 Years</a>
                        <a href="url">Computer Science</a>
                        <a href="url">Data Science</a>
                        <a href="url">Math Minor</a>

                    </div>
                        <div class="descrip">
                            <h6>Description: </h6>
                            <p>Hello, I'm an UIC Alumni. I majored in Computer Science. I've worked in the field for 2 years. Feel free to reach out and connect with me. </p>
                        </div>
                </div>
            </div>
        </div>


    )
}

export default PersonalPages