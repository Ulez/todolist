<template>
  <div id="app">
    <h1>{{title}}</h1>
    <ol>
      <li v-for="item in items" v-bind:class="{ finished: item.finished }" v-on:click="reverse(item)">
        {{ item.label }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      title: 'This is todolist',
      items: [
        { label: 'coding', finished: false },
        { label: 'dota', finished: true },
        { label: 'read', finished: false }
      ]
    }
  },
  methods: {
    reverse: function(item) {
      item.finished = !item.finished
    }
  }
}
</script>

<style>
.finished {
  text-decoration: line-through
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
