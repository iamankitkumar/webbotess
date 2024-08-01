import React from 'react'
import { Link } from 'react-router-dom'

const Mms = () => {
  return (
    <div>
        

        <div><Link to='/mmsSemOne' >Sem 1</Link></div>
      <div><Link to='/mmsSemTwo' >Sem 2</Link></div>
      <div><Link to='/mmsSemThree' >Sem 3</Link></div>
      <div><Link to='/mmsSemFour' >Sem 4</Link></div>
        
        </div>
  )
}

export default Mms