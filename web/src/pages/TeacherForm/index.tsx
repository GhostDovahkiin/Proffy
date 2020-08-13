import React, { useState } from 'react'
import "./styles.css";
import PageHeader from "../../components/PageHeader/";
import Input from "../../components/Input/";
import Select from "../../components/Select/";
import warningIcon from "../../assets/images/icons/warning.svg";
import TextArea from '../../components/TextArea';

export default function TeacherForm() {
  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' }
  ])

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from: '', to: '' }
    ])
  }

  return (
    <div className="container" id="page-teacher-form">
      <PageHeader
        title="Que incrível que você quer dar aulas"
        description="O primeiro passo é preencher esse formulario de inscrição."
      />

      <main>
        <fieldset>
          <legend>Seus Dados</legend>
          <Input name="name" label="Nome Completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="Whatsapp" />
          <TextArea name="bio" label="Biografia" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>
          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Biologia", label: "Biologia" },
              { value: "Geografia", label: "Geografia" },
              { value: "Matematica", label: "Matematica" },
              { value: "Ingles", label: "Ingles" },
              { value: "Historia", label: "Historia" },
              { value: "Fisica", label: "Fisica" },
              { value: "Portugues", label: "Portugues" },
              { value: "Quimica", label: "Quimica" },
            ]}
          />
          <Input name="cost" label="Custo da sua hora por aula" />
        </fieldset>

        <fieldset>
          <legend>
            Horários Disponiveis
            <button type="button" onClick={addNewScheduleItem}>+ Novo Horario</button>
          </legend>

          {scheduleItems.map(scheduleItem => {
            return (
              <div key={scheduleItem.week_day} className="schedule-item">
                <Select
                  name="week_day"
                  label="Dia da Semana"
                  options={[
                    { value: "0", label: "Domingo" },
                    { value: "1", label: "Segunda" },
                    { value: "2", label: "Terça" },
                    { value: "3", label: "Quarta" },
                    { value: "4", label: "Quinta" },
                    { value: "5", label: "Sexta" },
                    { value: "6", label: "Sábado" },
                  ]}
                />
                <Input name="from" label="Das" type="time" />
                <Input name="to" label="Até" type="time" />
              </div>
            )
          })}
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso Importante" />
            Importante <br />
            Preencha todos os dados
          </p>
          <button type="button">Salvar cadastro</button>
        </footer>
      </main>
    </div>
  );
}