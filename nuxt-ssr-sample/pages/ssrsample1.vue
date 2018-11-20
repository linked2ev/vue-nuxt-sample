<template>
    <div>
        <h1>
            SSR - Sample Page1
        </h1>
        <div>

            {{data.titles}}
        </div> 
    </div>
</template>


<script>
import axios from 'axios'
import cmBoardTable from '@/pages/common/cmBoardTable'
export default {
   data(){
    return {
      items:[],
      titles:''
    }
  },
  async asyncData () {
    // const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
    // return {articles:data}
    await axios.get('http://javalocal.mallstore.co.kr/sample/list.do?board=notice')
      .then((res) => {
        titles = res.data.data.boardList
    })
  },
  components: {
    cmBoardTable
  }
}
</script>