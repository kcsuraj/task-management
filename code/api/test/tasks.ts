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
        expect(res.body.data).to.be.a('object')
        done()
      })
  })

  it('get all tasks', (done) => {
    chai
      .request(app)
      .get('/api/tasks')
      .end((err, res) => {
        expect(res).to.have.status(200)
        expect(res.body).to.be.a('object')
        expect(res.body.data).to.be.a('array')
        done()
      })
  })

  it('update a task', (done) => {
    const task = new Tasks({
      id: 'task-4',
      task: 'new task',
      completed: false,
    })

    task.save((err, task) => {
      chai
        .request(app)
        .put(`/api/tasks/${task.id}`)
        .end((err, res) => {
          expect(res).to.have.status(200)
          done()
        })
    })
  })

  it('delete a task', (done) => {
    const task = new Tasks({
      id: 'task-4',
      task: 'new task',
      completed: false,
    })

    task.save((err, task) => {
      chai
        .request(app)
        .delete(`/api/tasks/${task.id}`)
        .end((err, res) => {
          expect(res).to.have.status(200)
          done()
        })
    })
  })
})
