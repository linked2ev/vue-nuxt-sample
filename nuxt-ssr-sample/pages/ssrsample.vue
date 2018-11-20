<template>
    <div>
        <h1>
            SSR - Sample Page
        </h1>
        <div>
            {{ articles[0].title }}
        </div>
    </div>
</template>


<script>
import axios from 'axios'

export default {
  title: 'Hey there',
  async asyncData () {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return {articles:data}
  }
}

</script>