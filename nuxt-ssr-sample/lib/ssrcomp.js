import axios from 'axios'

class SsrApi {
  posts() {
    console.log('> posts');
    return axios.get('https://jsonplaceholder.typicode.com/posts', {
      params: {
        id: 1
      }
    })
      .then(res => {
        console.log(res)
        return { items: res }
      })
      .catch(e => {
        return { error: e }
      })
  }
}

const ssrcomp = new SsrApi('https://jsonplaceholder.typicode.com/posts?id=1')

export default ssrcomp