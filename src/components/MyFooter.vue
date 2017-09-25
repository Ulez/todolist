<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="doThis">clickMe</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'message from footer'
    }
  },
  props:['msgFromFather'],
  methods: {
    doThis: function() {
      console.log(this.msgFromFather)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
