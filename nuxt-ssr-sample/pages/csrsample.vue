<template>
    <div>
        <h1>
            CSR - Sample Page
        </h1>
        <div>
            <cmBoardTable v-bind:items="items"></cmBoardTable>
        </div>
    </div>
</template>


<script>
import axios from 'axios'
import cmBoardTable from '@/components/common/cmBoardTable'
export default {
  data(){
    return {
      items:[]
    }
  },
  methods:{
    getBoardList () {
    //axios.get('http://javalocal.mallstore.co.kr/sample/list.do?board=notice')
    //   this.$http.get('http://javalocal.mallstore.co.kr/sample/list.do?board=notice')
    //   .then((res) => {
    //     this.items = res.data.data.boardList
    //   }) // https://jsonplaceholder.typicode.com/posts

    // this.items.push(
      axios.get('http://javalocal.mallstore.co.kr/sample/list.do?board=notice')
      .then((res) => {
        console.log(res.data.data.boardList);
        this.items = res.data.data.boardList
      })
    }
  },
  mounted(){
    this.getBoardList()
  },
  components: {
    'cmBoardTable': cmBoardTable
  }
}
</script>