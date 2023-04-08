import './Resources.css'

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PageTemplate from './PageTemplate'

function Resources() {
    const [count, setCount] = useState(0)

    return (
        <div className="Resources">
            <PageTemplate></PageTemplate>
            <div class="background">
                <div class= "vertical">
                    <div class = "horizontal">
                        <div class = "picture">
                            <img src = "/src/assets/logo-image.png" alt= "UIC" height="150"></img>
                        </div>
                        <div class="vertical">
                            <h6>Additional Alumni Resources</h6>
                            <a href="https://www.uic.edu/alumni/">https://www.uic.edu/alumni/</a>

                        </div>
                    </div>
                    <div class = "horizontal">
                        <div class = "picture">
                            <img src = "/src/assets/logo-image.png" alt= "UIC" height="150"></img>
                        </div>
                        <div class="vertical">
                            <h6>Schedule Appointments with UIC career services</h6>
                            <a href="https://careerservices.uic.edu/about-us/hours/">https://careerservices.uic.edu/about-us/hours/</a>

                        </div>
                    </div>

                    <div class = "horizontal">
                        <div class = "picture">
                            <img src = "/src/assets/logo-image.png" alt= "UIC" height="150"></img>
                        </div>
                        <div class="vertical">
                            <h6>Descriptions of Career Fairs</h6>
                            <a href="https://careerservices.uic.edu/uic-career-fair-descriptions/">https://careerservices.uic.edu/uic-career-fair-descriptions/</a>

                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Resources