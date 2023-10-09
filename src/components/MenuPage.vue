<template>
  <header>
    <nav>
      <ul>
        <li><router-link to="/">index</router-link></li>
        <li><router-link to="/main">main</router-link></li>
        <li><router-link to="/boardList">게시판</router-link></li>
        <li><router-link to="/boardList2">게시판2</router-link></li>
        <li class="LnJ"><router-link to="/join">join</router-link></li>
        <li class="LnJ"><router-link to="/login">login</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "MenuPage",
};
</script>

<style>
header {
  height: 50px;
}
nav {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: black;
}
nav ul {
  margin: 0;
  padding: 0;
}
nav li {
  list-style: none;
  float: left;
  width: 100px;
  height: 30px;
  line-height: 30px;
  text-align: center;
}
nav li:hover {
  font-weight: bold;
}
a {
  text-decoration: none;
  color: orange;
}
.LnJ {
  float: right;
  width: 80px;
}
</style>
