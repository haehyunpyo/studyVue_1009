<template>
  <div>
    <h1>게시판</h1>
    <table>
      <tr>
        <th>번호</th>
        <th>제목</th>
        <th>글쓴이</th>
        <th>날짜</th>
        <th>조회수</th>
      </tr>
      <tr v-for="n in list" :key="n.bno">
        <td>{{ n.bno }}</td>
        <td class="title">
          <a v-on:click="viewDetail(`${n.bno}`)">{{ n.btitle }}</a>
        </td>
        <td>{{ n.m_name }}</td>
        <td>{{ n.bdate }}</td>
        <td>{{ n.blike }}</td>
      </tr>
    </table>
    <button @click="write">글쓰기</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "BoardList",
  data() {
    return {
      list: [],
      requestBody: this.$route.query,
      bno: this.$route.query.bno,
    };
  },

  mounted() {
    axios
      .get("http://localhost:80/board")
      .then((res) => {
        //alert(res.data.list[0].bno);
        this.list = res.data.list;
      })
      .catch((err) => {
        alert("문제발생" + err);
      });
  },

  methods: {
    viewDetail(bno) {
      //alert(bno);
      this.requestBody.bno = bno;
      this.$router.push({
        path: "./detail",
        query: this.requestBody,
      });
    },

    write() {
      this.$router.push("write");
    },
  },
};
</script>

<style>
table {
  width: 800px;
  height: 300px;
  border-collapse: collapse;
  margin: 10px;
  text-align: center;
}
th {
  width: 10%;
  border: 1px solid orange;
  background-color: black;
  color: orange;
}
td {
  border: 1px solid black;
}
td a {
  color: black;
}
tr:hover {
  font-weight: bolder;
  background-color: rgb(252, 169, 97);
}
.title {
  width: 60%;
  text-align: left;
  padding-left: 10px;
}
</style>
