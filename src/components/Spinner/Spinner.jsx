import React from 'react'
import '../Spinner/Spinner.scss'

function Spinner() {
  return (
    <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}

export default Spinner