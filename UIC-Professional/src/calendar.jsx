import './calendar.css'
import React, { useEffect, useState } from "react";
import PageTemplate from './PageTemplate';

function Site() {

    const [style, setStyle] = useState("none");
    const [x, setX] = useState(0);
    // const [y, setY] = useState(0);

    const showTab = (event) => {
        setX(event.clientX);
        // setY(event.clientY);
        event.preventDefault();
        console.log("msg1");
        setStyle("block");
    }

    const closeTab = (event) => {
        event.preventDefault();
        console.log("msg2");
        setStyle("none");
    }


    return (
        <div class="main">
            <PageTemplate />

            <h1 class="eventsTitle">Today's Events:</h1>
            <div class="events">
                <div class="event">
                    <h2>event1 title</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div class="event">
                    <h2>event2 title</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>

            <div class="calendar">
                <div class="month">
                    <ul>
                        <p class="prev">&#10094;</p>
                        <p class="next">&#10095;</p>
                        <h1>April</h1>
                        <h2>2023</h2>
                    </ul>
                </div>

                <ul class="weekdays">
                    <li>Mon</li>
                    <li>Tue</li>
                    <li>Wed</li>
                    <li>Thu</li>
                    <li>Fri</li>
                    <li>Sat</li>
                    <li>Sun</li>
                </ul>

                <ul class="days">
                    <div class="day">
                        <li class="daynum">1</li>
                        <button class="dayEvnt" onClick={showTab}>event</button>
                        <button class="dayEvnt" onClick={showTab}>event</button>
                        <button class="dayEvnt" onClick={showTab}>event</button>
                    </div>
                    <div class="day">
                        <li class="daynum">2</li>
                    </div>
                    <div class="day">
                        <li class="daynum">3</li>
                        <button class="dayEvnt" onClick={showTab}>event</button>
                    </div>
                    <div class="day">
                        <li class="daynum">4</li>
                    </div>
                    <div class="day">
                        <li class="daynum">5</li>
                    </div>
                    <div class="day">
                        <li class="daynum">6</li>
                        <button class="dayEvnt" onClick={showTab}>event</button>
                    </div>
                    <div class="day">
                        <li class="daynum">7</li>
                    </div>
                    <div class="day" id="active">
                        <li class="daynum">8</li>
                        <button class="dayEvnt" onClick={showTab}>event</button>
                    </div>
                    <div class="day">
                        <li class="daynum">9</li>
                        <button class="dayEvnt" onClick={showTab}>event</button>
                    </div>
                    <div class="day">
                        <li class="daynum">10</li>
                    </div>
                    <div class="day">
                        <li class="daynum">11</li>
                    </div>
                    <div class="day">
                        <li class="daynum">12</li>
                    </div>
                    <div class="day">
                        <li class="daynum">13</li>
                    </div>
                    <div class="day">
                        <li class="daynum">14</li>
                    </div>
                    <div class="day">
                        <li class="daynum">15</li>
                    </div>
                    <div class="day">
                        <li class="daynum">16</li>
                        <button class="dayEvnt" onClick={showTab}>event</button>
                        <button class="dayEvnt" onClick={showTab}>event</button>
                    </div>
                    <div class="day">
                        <li class="daynum">17</li>
                    </div>
                    <div class="day">
                        <li class="daynum">18</li>
                    </div>
                    <div class="day">
                        <li class="daynum">19</li>
                        <button class="dayEvnt" onClick={showTab}>event</button>
                    </div>
                    <div class="day">
                        <li class="daynum">20</li>
                    </div>
                    <div class="day">
                        <li class="daynum">21</li>
                    </div>
                    <div class="day">
                        <li class="daynum">22</li>
                    </div>
                    <div class="day">
                        <li class="daynum">23</li>
                    </div>
                    <div class="day">
                        <li class="daynum">24</li>
                        <button class="dayEvnt" onClick={showTab}>event</button>
                    </div>
                    <div class="day">
                        <li class="daynum">25</li>
                    </div>
                    <div class="day">
                        <li class="daynum">26</li>
                    </div>
                    <div class="day">
                        <li class="daynum">27</li>
                    </div>
                    <div class="day">
                        <li class="daynum">28</li>
                    </div>
                    <div class="day">
                        <li class="daynum">29</li>
                    </div>
                    <div class="day">
                        <li class="daynum">30</li>
                    </div>
                </ul>
            </div>

            <div class="eventDetails" style={{ "display": style, "left": x}}>
                <ul>
                    <li>When:</li>
                    <li>Where:</li>
                    <li>Description:</li>
                </ul>
                <ul>
                    <li>mm/dd/yyyy</li>
                    <li>zoom &#40;<a>link</a>&#41;</li>
                    <li>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</li>
                </ul>
                <button class="exit" onClick={closeTab}>x</button>
            </div>
        </div>
    )
}

export default Site;
