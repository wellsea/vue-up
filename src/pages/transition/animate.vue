<template>
  <div id="app">
    <button @click="show = !show">click</button>
    <transition
      name="fade"
      type="transition"
      appear
      appear-active-class="animated fadeInUp"
      :duration="5000"
      enter-active-class="animated bounceOut fade-enter-active"
      leave-active-class="animated bounceOutUp fade-leave-active"
    >
      <h2 v-if="show">hello</h2>
    </transition>
    <button v-on:click="add">Add</button>
    <button v-on:click="remove">Remove</button>
    <transition-group name="list" tag="p">
      <span v-for="item in items" v-bind:key="item" class="list-item">
        {{ item }}
      </span>
    </transition-group>
  </div>
</template>

<script>
  export default {
    name: "animated",
    data: function () {
      return {
        show: true,
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        nextNum: 10
      }
    },
    methods: {
      randomIndex: function () {
        return Math.floor(Math.random() * this.items.length)
      },
      add: function () {
        this.items.splice(this.randomIndex(), 0, this.nextNum++)
      },
      remove: function () {
        this.items.splice(this.randomIndex(), 1)
      },
    }
  }
</script>

<style scoped>
  h2 {
    padding: 50px 0;
    background-color: #00ffff;
    margin: 20px 0;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    -webkit-transition: all 5s;
    transition: all 5s
  }

  .list-item {
    display: inline-block;
    margin-right: 10px;
  }

  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }

  .list-enter, .list-leave-to
    /* .list-leave-active for below version 2.1.8 */
  {
    opacity: 0;
    transform: translateY(30px);
  }
</style>
