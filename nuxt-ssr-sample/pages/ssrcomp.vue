<template>
    <div>
        <h1>
            SSR - Comp Page
        </h1>
        <div class='div-contents'>
            <PostList :items='items' />
        </div>
        <div class='div-btn'>
            <nuxt-link to='/' class='button--grey'>index</nuxt-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import PostList from '@/components/common/PostList'
export default {
    async asyncData () {
        return axios.get('https://jsonplaceholder.typicode.com/posts?id=1')
            .then((res) => {
            return { items: res.data }
        })
    },
    components: {
        PostList
    } 
}
</script>


