import { Router } from 'express'
import { createTask, getAllTasks, updateTask, deleteTask } from './controller'

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
 * PUT /api/tasks
 */
router.put('/:id', updateTask)

/**
 * DELETE /api/tasks
 */
router.delete('/:id', deleteTask)

export default router
