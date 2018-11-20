<template>
  <div class="container mt-4">

    <table class="table table-bordered mt-4">
      <thead class="thead-light">
        <tr>
          <th width="5%">#</th>
          <th width="20%">제목</th>
          <th width="30%">내용</th>
          <th width="14%">작성자</th>
          <th width="8%">조회수</th>
          <th width="8%">사용여부</th>
          <th width="10%">등록일</th>
          <th width="5%"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td>{{ index + 1 }}</td>
          <td>
            <span>{{ item.SUBJECT }}</span>
          </td>
          <td>
            <span v-html="item.CONTENT"></span>
          </td>
          <td>
            <span>{{ item.WRITER }}</span>
          </td>
          <td>
            <span>{{ item.HITS }}</span>
          </td>
          <td>
            <span>{{ item.ISTRASH }}</span>
          </td>
          <td>
            <span>
              <button class="btn btn-sm btn-outline-secondary mr-2">수정</button><br>
              <button class="btn btn-sm btn-outline-secondary mr-2">삭제</button>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'cmBoardTable',
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

<style>
  input[type="number"] {
    text-align: right;
  }
</style>