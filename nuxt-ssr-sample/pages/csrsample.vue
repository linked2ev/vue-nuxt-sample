<template>
    <div>
        <h1>
            CSR - Sample Page
        </h1>
        <div class='div-contents'>
            <ul v-for="item in items">
                <li>NO : {{ item.id }}</li>
                <li>제목 : {{ item.title }}</li>
                <li>내용 : {{ item.body }}</li>
            </ul>
        </div>
        <div class='div-btn'>
          <nuxt-link to="/" class="button--grey">index</nuxt-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      items:[]
    }
  },
  methods:{
    getBoardList () {
      axios.get('https://jsonplaceholder.typicode.com/posts?id=1')
      .then((res) => {
        this.items = res.data 
      })
    }
  },
  mounted(){
    this.getBoardList()
  }
}
</script>