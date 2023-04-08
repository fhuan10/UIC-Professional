import { useState } from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

function Card() {

  return (
    <div className="Card">
      <img className="CardImage" src="https://www.freeiconspng.com/uploads/person-icon-5.png"></img>
      <h2>Name</h2>
      <h3>Their Role</h3>
      <h3>Pronouns</h3>
      <Link to="/browse-someone/1"><button className="CardButton">Click to read more</button></Link>



    </div>
  )
}

export default Card
