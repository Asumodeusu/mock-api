import { Elysia } from 'elysia'
import { cors } from '@elysiajs/cors'
import { EmployeesController } from './controllers/Employees'
import { DictionariesController } from './controllers/Dictionaries'
import { ScheduleController } from './controllers/Schedule'


const app = new Elysia()
	.use(
		cors({
			origin: 'http://localhost:5173'
		})
	)
	.use(EmployeesController)
	.use(DictionariesController)
	.use(ScheduleController)
	.get('/', () => 'Приветствую Андрей!!')
	.listen(3000)

  console.log(`🦊 Elysia is running at on port ${app.server?.port}...`)