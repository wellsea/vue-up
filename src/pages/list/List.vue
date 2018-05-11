<template>
  <div class="count">
    <counter text="0" @change="handleAdd"></counter>
    <counter text="0" @change="handleAdd"></counter>
    <counter text="0" @change="handleAdd"></counter>
    <h2>sum:{{sum}}</h2>
  </div>
</template>

<script>
  var counter = {
    props: ['text'],
    data: function () {
      return {
        selfText: this.text
      }
    },
    template: '<h1 @click="add">{{selfText}}</h1>',
    methods: {
      add: function () {
        this.selfText++;
        this.$emit('change', 1)
      }
    }
  };
  export default {
    name: "List",
    data: function () {
      return {
        sum: 0
      }
    },
    components: {
      counter
    },
    methods: {
      handleAdd: function (step) {
        this.sum += step;
      }
    }
  }
</script>

<style scoped>
  .count h1 {
    background-color: #0badff;
    width: 60px;
    text-align: center;
    line-height: 30px;
    margin-bottom: 16px;
    color: #fff;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    cursor: pointer;
  }
</style>
