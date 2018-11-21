<template>
    <div>
        <h1>
            SSR - Sample Page
        </h1>
        <div class='div-contents'>
            <ul v-for="item in items">
                <li>NO : {{ item.id }}</li>
                <li>제목 : {{ item.title }}</li>
                <li>내용 : {{ item.body }}</li>
            </ul>
        </div>
        <div class='div-btn'>
            <nuxt-link to='/' class='button--grey'>index</nuxt-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData () {
    return axios.get('https://jsonplaceholder.typicode.com/posts?id=1')
    .then((res) => {
      return { items: res.data }
    })
  }
}
</script>