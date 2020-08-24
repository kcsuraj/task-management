import { Router } from 'express'
import { createTask, getAllTasks, deleteTask } from './controller'

const router: Router = Router()

/**
 * POST /api/tasks
 */
router.post('/', createTask)

/**
 * GET /api/tasks
 */
router.get('/', getAllTasks)

/**
 * DELETE /api/tasks
 */
router.delete('/:id', deleteTask)

export default router
