import React from 'react'
import { Link } from 'react-router-dom'

const Mca = () => {
  return (
    <div>

      <div><Link to='/semOne' >Sem 1</Link></div>
      <div><Link to='/semTwo' >Sem 2</Link></div>
      <div><Link to='/semThree' >Sem 3</Link></div>
      <div><Link to='/semFour' >Sem 4</Link></div>
    </div>
  )
}

export default Mca