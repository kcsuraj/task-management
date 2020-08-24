import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import app from '../src/app'
import Tasks from '../src/modules/tasks/model'

chai.use(chaiHttp)

describe('Tasks', () => {
  beforeEach((done) => {
    //Before each test we empty the database
    Tasks.deleteMany({}, (err) => {
      done()
    })
  })

  it('create a new task', (done) => {
    const task = {
      id: 'task-4',
      task: 'new task',
      completed: false,
    }

    chai
      .request(app)
      .post('/api/tasks')

      .send(task)
      .end((err, res) => {
        expect(res).to.have.status(200)
        expect(res.body).to.be.a('object')
        done()
      })
  })
})
