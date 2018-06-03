import axios from 'axios'

export default class AnimalServiceClient {
  constructor (hostAndPort) {
    this.axios = axios.create({
      baseURL: `${hostAndPort.url}:${hostAndPort.port}`,
      timeout: 5000,
      headers: {
        'Accept': 'application/json'
      }
    })
  }

  getTodo () {
    return this.axios.get('/todos/1')
  }
}
