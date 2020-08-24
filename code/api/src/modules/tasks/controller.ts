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

  try {
    const response = await taskService.getAllTasks(req.body)
    res.status(200).json({
      code: 200,
      message: 'Success',
      data: response,
    })
  } catch (error) {
    next(error)
  }
}

async function updateTask(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await taskService.updateTask(req.params.id, req.body)
    res.status(200).json({
      code: 200,
      message: 'Success',
      data: response,
    })
  } catch (error) {
    next(error)
  }
}

async function deleteTask(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await taskService.deleteTask(req.params.id)
    res.status(200).json({
      code: 200,
      message: 'Success',
      data: response,
    })
  } catch (error) {
    next(error)
  }
}

export { createTask, getAllTasks, deleteTask, updateTask }
