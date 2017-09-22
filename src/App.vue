<template>
  <div id="app">
    <h1>{{title}}</h1>
    <input v-model="newItem" @keyup.enter="onEnter">
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
      items: [],
      newItem: ''
    }
  },
  methods: {
    reverse: function(item) {
      item.finished = !item.finished
    },
    onEnter: function() {
      this.items.push({
        label: this.newItem,
        finished: false
      })
      this.newItem = ''
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
