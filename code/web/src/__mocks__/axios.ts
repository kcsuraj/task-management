// import { AxiosResponse } from 'axios'
// import mockData from './data.json'

// // Our mocked response
// const axiosResponse: AxiosResponse = {
//   data: mockData,
//   status: 200,
//   statusText: 'OK',
//   config: {},
//   headers: {},
// }

// // axios mocked
// export default {
//   // Typescript requires a 'default'
//   default: {
//     get: jest.fn().mockResolvedValue(() => Promise.resolve(axiosResponse)),
//   },
//   get: jest.fn(() => Promise.resolve(axiosResponse)),
// }

export default {
  get: jest.fn().mockResolvedValue({ data: [] }),
}
