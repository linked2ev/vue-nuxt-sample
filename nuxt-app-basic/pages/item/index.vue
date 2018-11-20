<template>
  <div class="contain">
    <ItemApp
      v-for="item in items"
      :key="item.id"
      :name="item.name"
      :price="item.price"
      :imgs="item.imgs"
    />
  </div>
</template>

<script>
import ItemApp from '@/components/compItem/ItemApp.vue';
export default {
  data(){
    return {
      items:[]
    }
  },
  methods:{
    getItems () {
      //this.$http.get('localhost:3000')
      //.then((res) => {
      //  this.todos = res.data
      //})
      this.items.push(
        {
          "id": 1,
          "name": "나이키 에어 줌 페가수스 35",
          "price": 97300,
          "imgs": 'nike-sample1.png'
        },
        {
          "id": 2,
          "name": "나이키 에어 포스 1 ' 유틸리티",
          "price": 139000,
          "imgs": 'nike-sample2.png'
        },
        {
          "id": 3,
          "name": "나이키 에어 포스 1 07 LV8 WB",
          "price": 169000,
          "imgs": 'nike-sample3.png'
        },
        {
          "id": 4,
          "name": "나이키 에어 포스 1 '07 WB",
          "price": 149000,
          "imgs": 'nike-sample4.png'
        },
        {
          "id": 5,
          "name": "나이키 에어 포스 WB 18",
          "price": 89000,
          "imgs": 'nike-sample5.png'
        }
      )
    }
  },
  mounted(){
    this.getItems()
  },
  components: {
    ItemApp
  }
};
</script>

<style>
aside {
  float: left;
  width: 20%;
}
@supports (display: grid) {
  .capsule > * {
    width: auto;
    margin: 0;
  }
}
</style>