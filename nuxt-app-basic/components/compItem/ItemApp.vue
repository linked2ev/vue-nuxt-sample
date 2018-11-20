<template>
    <div>
        <div class='item content'>
            <p>{{name}}</p>
            <img :src="require('@/mocks/imgs/'+imgs)">
            <p>{{price}} 원</p>
            <button class='add'>장바구니</button>
        </div>
    </div>
</template>

<script>
export default {
  props: ['id', 'name', 'imgs', 'price']
}
</script>

<style scoped>
.item {
    width: 30%;
    border-radius: 5px;
    margin: 5px;
    padding: 20px;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
}
.item img {
    width: 80%;
}
p {
    padding-top: 20px;
    font-size: 20px;
}
.content {
  float: left;
}
</style>