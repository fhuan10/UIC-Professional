
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {
    return (

        <div className="Login">

            <head>
                <title>Our Page</title>
            </head>

            <div class="flex-container">
                <div>

                    <img src="/src/assets/uic.png" id="left" />

                </div>

                <div>



                    <div class="divider">

                    </div>

                    <body>
                        <h1>UIC Connect ++</h1>
                        <h4>Login</h4>
                        <form>
                            <input type="text" id="fname" name="fname" placeholder="someone@example.com" />
                            <input type="password" id="lname" name="lname" placeholder="Password" />

                            <Link to="/events">
                                <button>SUBMIT</button>
                            </Link>
                        </form>
                    </body>

                </div>
            </div>



        </div>
    )
}

export default Login