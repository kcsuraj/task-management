import { Application } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import morgan from 'morgan'

/**
 *  Express configurations
 * @param {Application} app
 */
export default function (app: Application) {
  // Enable cors
  app.use(cors())

  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }))

  // parse application/json
  app.use(bodyParser.json())

  // HTTP request logger
  if (app.get('env') === 'development') {
    app.use(morgan('tiny'))
  }
}
