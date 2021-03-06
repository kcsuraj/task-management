import config from '../config/env'
import { Application } from 'express'

/**
 * Listen on defined port and start server
 * @param {Application} app
 */
export default function (app: Application) {
  console.log('Starting server')

  app.set('port', config.port || 8000)

  app.listen(app.get('port'), () => {
    console.log(
      `App is running at http://localhost:${app.get('port')} in ${app.get(
        'env'
      )} mode`
    )
  })
}
