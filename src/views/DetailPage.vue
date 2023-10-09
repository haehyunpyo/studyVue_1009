<template>
  <div class="board-detail">
    <div class="detail-title">
      {{ detail.bno }}. {{ detail.btitle }}
      <span class="writer">{{ detail.m_name }}</span>
    </div>
    <div class="detail-content">
      <div class="content">{{ detail.bcontent }}</div>
      <div class="date">{{ detail.bdate }}</div>
    </div>
  </div>
  <button @click="board">게시판으로</button>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      requestBody: this.$route.query,
      detail: {
        bno: this.$route.query.bno,
        btitle: "",
        m_name: "",
        bcontent: "",
        bdate: "",
        bcount: "",
      },
    };
  },

  mounted() {
    this.boardDatail();
  },

  methods: {
    boardDatail() {
      //alert(this.requestBody.bno + "이거?");
      axios
        .get("http://localhost:80/detail?bno=" + this.detail.bno)
        .then((res) => {
          this.detail = res.data.detail;
        })
        .catch((err) => {
          if (err.message.indexOf("Network Error") > -1) {
            alert("문제가 발생했습니다. 잠시 후 다시 시도해주세요." + err);
          }
        });
    },

    board() {
      this.$router.push("/boardList");
    },
  },
};
</script>

<style>
.writer {
  float: right;
}
.board-detail {
  margin: 0 auto;
  padding: 5px;
  width: 800px;
  height: 500px;
}
.detail-title {
  background-color: blanchedalmond;
  width: 90%;
  height: 8%;
  margin-bottom: 10px;
  text-align: left;
}
.detail-content {
  background-color: blanchedalmond;
  width: 90%;
  height: 70%;
  text-align: left;
}
.content {
  height: 300px;
}
.date {
  text-align: right;
}
</style>
