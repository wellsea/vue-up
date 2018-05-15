<template>
  <div>
    <transition name="fade">
      <h1 v-if="show" @click="handleClick"></h1>
    </transition>
    <transition name="fade">
      <h1 v-if="!show" @click="handleClick"></h1>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "fade",
    data: function () {
      return {
        show: true
      }
    },
    methods: {
      handleClick: function () {
        this.show = !this.show;
      }
    }
  }
</script>

<style scoped>
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    -webkit-transition: opacity 1.3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    -moz-transition: opacity 1.3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    transition: opacity 1.3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  h1 {
    height: 80px;
    margin: 10px auto;
    background-color: #f63;
  }

  h1 + h1 {
    background-color: #ff00ff;
  }
</style>
