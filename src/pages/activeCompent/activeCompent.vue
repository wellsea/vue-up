<template>
  <div>
    <h3>动态组件 compoment</h3>
    <transition name="fade">
      <compoment :is="type"></compoment>
    </transition>
    <h3>防止重复渲染dom，v-once缓存作用</h3>
    <child1 v-if="type==='child1'"></child1>
    <child2 v-if="type==='child2'"></child2>
    <button @click="toggleShow">动态切换child</button>
  </div>
</template>

<script>
  var child1 = {
    template: '<div v-once>child-1</div>'
  };
  var child2 = {
    template: '<div v-once>child-2</div>'
  };
  export default {
    name: "activeCompent",
    data: function () {
      return {
        type: 'child1'
      }
    },
    methods: {
      toggleShow: function () {
        this.type = (this.type === 'child1' ? 'child2' : 'child1')
      }
    },
    components: {
      child1,
      child2
    }
  }
</script>

<style scoped>
  .fade-enter,
  .fade-leave-to{
    opacity: 0;
  }
  .fade-enter-active,
  .fade-leave-active{
    -webkit-transition: opacity 3s;
    -moz-transition: opacity 3s;
    -ms-transition: opacity 3s;
    -o-transition: opacity 3s;
    transition: opacity 3s;
  }
</style>
