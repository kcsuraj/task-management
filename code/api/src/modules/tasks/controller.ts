import { Request, Response, NextFunction, response } from 'express'
import * as taskService from './service'

async function createTask(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await taskService.createTask(req.body)

    res.status(200).json(response)
  } catch (error) {
    next(error)
  }
}

async function getAllTasks(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await taskService.getAllTasks(req.body)
    res.status(200).json(response)
  } catch (error) {
    next(error)
  }
}

async function deleteTask(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await taskService.deleteTask(req.params.id)

    res.status(200).json(response)
  } catch (error) {
    next(error)
  }
}

export { createTask, getAllTasks, deleteTask }
