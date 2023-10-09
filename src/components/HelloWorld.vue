  <template>
    <div class="hello">
      <h1>Hello</h1>
      <div v-for="n in arr" :key="n">{{ arr[n] }}</div>
      <hr>
      <div v-if="arr[0] == 1">배열의 0번째가 1이면 나와</div>
      <div v-else-if="arr[0] == 2">배열의 0번째가 2면 나와</div>
      <div v-else>배열의 0번째가 1도 2도 아니면 나와</div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HelloWorld',
    data(){
      return{
        arr: [2, 2, 3, 4, 5, 6, 7]
      };
    },
  };
  </script>
  
  <style>
  
  </style>