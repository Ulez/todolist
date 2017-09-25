<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ msgFromFather }}</h1>
    <button @click="doThis">clickToSay</button>
  </div>
</template>

<script>
import Bus from '@/components/bus.js'
export default {
  name: 'hello',
  data() {
    return {
      msg: 'message from footer',
      items: ''
    }
  },
  props: ['msgFromFather'],
  methods: {
    doThis: function() {
      this.$emit('child-to-parent', this.msg)
      console.log(this.msgFromFather)
    },
    resss: function(items) {
      console.log(items)
    }
  },
  created() {
    Bus.$on('on-enter', this.resss);
  },
  destroyed() {
    Bus.$off('id-selected', this.resss)
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
