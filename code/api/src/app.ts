/**
 * Entry point to the application
 */
import express, { Application } from 'express'
import {
  setupLoadModules,
  setupDatabase,
  setupServer,
  setupRoutes,
} from './setup'

// Create Express server
const app: Application = express()

// Setup load modules
setupLoadModules(app)

// Setup database
setupDatabase()

// // Setup routes
setupRoutes(app)

// Setup server
setupServer(app)

export default app
