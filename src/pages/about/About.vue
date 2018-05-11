<template>
  <div>
    <h1>About</h1>
    <child @click.native="dadClick"></child>
    <h1 class="red">{{hText}}</h1>
    <h1 class="red">{{hText}}</h1>
    <h1 class="red">{{hText}}</h1>
    <h1 class="red">{{hText}}</h1>
    <h1 class="red">{{hText}}</h1>
  </div>
</template>

<script>
  import Bus from '../../bus/Bus.js'
  export default {
    name: "About",
    data: function () {
      return {
        hText: '当你点击我上面的兄弟，我的内容就变成了他'
      }
    },
    components: {
      child: {
        data: function () {
          return {
            txt: '尝试点击我，看看有什么奇迹发生?!'
          }
        },
        template: '<h1 @click="handleClick">{{txt}}</h1>',
        methods: {
          handleClick: function () {
            Bus.$emit('good', this.txt)
          }
        }
      }
    },
    mounted: function () {
      var that = this;
      Bus.$on('good', (msg) => {
        that.hText = msg
      })
    },
    methods:{
      dadClick: function () {
        alert('组件触发原生点击事件，native')
      }
    }
  }
</script>

<style scoped>
  h1 {
    margin: 15px 0;
    cursor: pointer;
  }

  .red {
    color: #ff0000;
  }
</style>
