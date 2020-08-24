import { Router } from 'express'
import { createTask, getAllTasks } from './controller'

const router: Router = Router()

/**
 * POST /api/tasks
 */
router.post('/', createTask)

/**
 * GET /api/tasks
 */
router.get('/', getAllTasks)

export default router
