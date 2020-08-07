import React from 'react'
import PageHeader from '../../components/PageHeader'
import './styles.css'
import TeacherItem from '../../components/TeacherItem'
import Input from '../../components/Input'


function Teachers() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader
        title="Esses são os Proffys disponíveis."
        description="Selecione o Proffy a sua escolha e entre em contato para a conexão acontecer.">
        <form id="search-teachers">
          <Input name="subject" label="Matéria"></Input>
          <Input name="week_day" label="Dia da semana"></Input>
          <Input type="time" name="time" label="Hora"></Input>
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  )
}

export default Teachers