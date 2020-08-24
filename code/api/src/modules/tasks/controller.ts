import { Request, Response, NextFunction, response } from 'express'
import * as taskService from './service'

async function createTask(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await taskService.createTask(req.body)
    res.status(200).json({
      message: 'Task successfully added',
      data: response,
    })
  } catch (error) {
    next(error)
  }
}

async function getAllTasks(req: Request, res: Response, next: NextFunction) {
  console.log('test')
}

export { createTask, getAllTasks }
