import { useState } from 'react'
import './Card.css'

function Card() {

  return (
    <div className="Card">
      <img className="CardImage" src="https://www.freeiconspng.com/uploads/person-icon-5.png"></img>
      <h2>Name</h2>
      <h3>Their Role</h3>
      <h3>Pronouns</h3>
      <button className="CardButton">Click to read more</button>



    </div>
  )
}

export default Card
