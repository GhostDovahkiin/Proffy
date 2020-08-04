import React from 'react'
import {Link} from 'react-router-dom'
import backIcon from '../../assets/images/icons/back.svg'
import logoImg from '../../assets/images/logo.svg'

function PageHeader() {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to='/'>
          <img src={backIcon} alt="Voltar"/>
        </Link>
          <img src={logoImg} alt="Proffy"/>
      </div>

      <div className="header-content">
        <strong>Esses são os Proffys disponíveis.</strong>
      </div>
    </header>
  )
}

export default PageHeader