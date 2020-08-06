import express from 'express'
import database from './database/connection'
import convertHourToMinutes from './utils/convertHourToMinutes'

const routes = express.Router()

interface ScheduleItem {
  week_day: number,
  from: string,
  to: string
}

routes.get('/', async (req, res) => {
  return res.json({
    API: 'Proffy API',
    Version: '0.1v',
    Description: 'Find a class or give a class if you are awesome',
    Author: 'Pedro Henrique',
    Contact: 'https://github.com/ghostdovahkiin'
  })
})

routes.post('/aulas', async (req, res) => {
  const {
    name,
    avatar,
    whatsapp,
    bio,
    subject,
    cost,
    schedule
  } = req.body

  const insertedUsersIds = await database('users').insert({
    name,
    avatar,
    whatsapp,
    bio,
  })

  const user_id = insertedUsersIds[0]

  const insertedClassesIds = await database('classes').insert({
    subject,
    cost,
    user_id
  })

  const class_id = insertedClassesIds[0]

  const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
    return {
      class_id,
      week_day: scheduleItem.week_day,
      from: convertHourToMinutes(scheduleItem.from),
      to: convertHourToMinutes(scheduleItem.to)
    }
  })

  await database('class_schedule').insert(classSchedule);

  return res.send()

})

export default routes