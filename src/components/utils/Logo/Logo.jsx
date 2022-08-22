import React from 'react'
import "./Style.css"

function Logo() {
  return (
    <div className="logo_containr">
      <a href='/'>
      <img width={505} src={require('../../../assets/feetura_logo.png')} alt="feetura logo"/>
      </a>
    </div>
  )
}

export default Logo