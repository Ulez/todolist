<template>
  <div id="app">
    <h1>{{title}}</h1>
    <ol>
      <li v-for="item in items">
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
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
