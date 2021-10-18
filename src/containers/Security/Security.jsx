import React from 'react'
import "./Security.scss"
import SecurityScore from '../../components/SecurityScore/SecurityScore'

const Security = () => {
  return (
    <div className="security__text">
      <h1>Security Page</h1>
      <SecurityScore />
    </div>
  )
}

export default Security
