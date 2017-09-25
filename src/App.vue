<template>
  <div id="app">
    <h1>{{title}}</h1>
    <input v-model="newItem" @keyup.enter="onEnter">
    <ol>
      <li v-for="item in items" v-bind:class="{ finished: item.finished }" v-on:click="reverse(item)">
        {{ item.label }}
      </li>
    </ol>
    <p>child say:{{childWords}}</p>
    <!-- <hello></hello> -->
    <my-footer msgFromFather="msg From Father." v-on:child-to-parent='listenChild'></my-footer>
  </div>
</template>

<script>
import Store from './store'
import MyFooter from '@/components/MyFooter'
import Hello from '@/components/Hello'
export default {
  data: function() {
    return {
      title: 'This is todolist',
      items: Store.fetch(),
      newItem: '',
      childWords: ''
    }
  },
  components: { MyFooter, Hello },
  watch: {
    items: {
      handler: function(items) {
        Store.save(items)
      },
      deep: true
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
    },
    listenChild: function(msg) {
      console.log(msg)
      this.childWords = msg
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
