<template>
  <h1>글쓰기</h1>
  <div class="write">
    <input v-model="title" />
    <textarea v-model="content"></textarea>
    <button @click="write">글쓰기</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      title: "",
      content: "",
    };
  },

  methods: {
    write() {
      //alert(this.title);
      let saveData = {};
      saveData.title = this.title;
      saveData.content = this.content;
      //alert(saveData.title);
      axios
        .post("http://localhost:80/write", JSON.stringify(saveData), {
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => {
          if (res.data.result == 1) {
            alert("데이터베이스에 글을 저장했습니다.");
            //location.href = "/boardList";
            this.$router.push("/boardList");
          } else {
            alert("글저장 실패ㅠ^ㅠ");
          }
        })
        .catch((err) => {
          alert("문제발생" + err + "여기인거??");
        });
    },
  },
};
</script>

<style>
.write {
  margin: 0 auto;
  padding: 5px;
  width: 800px;
  height: 500px;
  background-color: lemonchiffon;
}
.write textarea {
  width: 90%;
  height: 70%;
  margin: 10px;
}
.write input {
  width: 90%;
  height: 5%;
  margin: 20px 10px;
}
</style>
