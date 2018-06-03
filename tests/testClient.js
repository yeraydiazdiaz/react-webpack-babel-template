import { PactWeb } from '@pact-foundation/pact/pact-web'
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import TodoServiceClient from '../src/lib/client'

chai.use(chaiAsPromised)
const expect = chai.expect

describe('TodoServiceClient', () => {
  const url = 'http://localhost'
  const port = 2202
  const provider = new PactWeb({
    consumer: 'TodoApp',
    provider: 'TodoService',
    port: port
  })

  const EXPECTED_BODY = {
    id: 1,
    name: 'Learn Pact',
    done: false
  }

  describe('get /todo/1', () => {
    before(done => {
      const interaction = {
        state: 'I have a list of todos',
        uponReceiving: 'A request for a single todo',
        withRequest: {
          method: 'GET',
          path: '/todos/1',
          headers: {
            'Accept': 'application/json'
          }
        },
        willRespondWith: {
          status: 200,
          headers: {
            'Content-Type': 'application/json'
          },
          body: EXPECTED_BODY
        }
      }
      provider.addInteraction(interaction).then(() => {
        done()
      })
    })

    after(() => provider.finalize())

    it('returns the correct response', done => {
      const urlAndPort = {
        url: url,
        port: port
      }
      let client = new TodoServiceClient(urlAndPort)
      expect(
        client.getTodo()
          .then(response => response.data)
      ).to.eventually.deep.equal(EXPECTED_BODY).notify(done)
    })

    afterEach(done => {
      provider.verify()
        .then(() => done())
    })
  })
})
