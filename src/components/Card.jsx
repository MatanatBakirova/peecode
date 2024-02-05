import React from 'react'
import "./Card.css"


const Card = (props) => {
  console.log(props)
  return (
    <div class="card">
      <span className='light badge bg-light text-dark'>Partner material</span>
      <span className='green badge bg-success'>QA</span>
      <span className='yellow badge bg-warning'>UX/UI</span>
    <img src={props.meqaleShekliProps} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">{props.meqaleBasligiProps}</h5>
      <p class="card-text">{props.meqaleMetniProps}</p>
    </div>
  </div>  )
}

export default Card