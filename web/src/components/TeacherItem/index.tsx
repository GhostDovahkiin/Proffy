import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/24435572?s=460&u=888a55087824e8a6e395134c9fe5ef16ca6de353&v=4" alt="Imagem do professor"/>
        <div>
          <strong>Pedro Henrique</strong>
          <span>Projeto Avançado 1</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologias no desenvolvimento web. 
        <br/>
        <br/>
        Apaixonado por estudar como tudo se conecta na internet, estudante eterno de T.I e atualmente ministrando aulas de Node.JS, Amazon AWS e ReactJS.
      </p>
      <footer>
        <p>
          Preço/Hora
          <strong>R$ 99,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem