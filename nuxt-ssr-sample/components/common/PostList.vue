<template>
    <div>
        <ul v-for="item in items">
            <li>NO : {{ item.id }}</li>
            <li>제목 : {{ item.title }}</li>
            <li>내용 : {{ item.body }}</li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'PostList',
  props: ['items'],
  data() {
    return {
      // boardList: [
      //   { subject: '이달의 공지사항', writer: '관리자', content: '공지사항 내용', hits: 131, regdate: '2018-08-11', istrash: 'T' },
      //   { subject: '12월 겨울', writer: '운영자', content: '겨울 내용', hits: 28, regdate: '2018-11-03', istrash: 'F' },
      // ],
    }
  }
}
</script>