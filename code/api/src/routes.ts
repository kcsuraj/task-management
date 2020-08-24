import { Router } from 'express'
import taskRoutes from './modules/tasks/routes'

const router: Router = Router()

router.use('/tasks', taskRoutes)

export default router
