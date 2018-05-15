<template>
  <div id="app">
    <nav class="header">
      <router-link to="/" exact>TodoList</router-link>
      <router-link to="/list">父子组件传值(props, $emit)</router-link>
      <router-link to="/about">非父子组件传值(中转站)</router-link>
      <router-link to="/slot">插槽 slot</router-link>
      <router-link to="/slotScope">作用域插槽</router-link>
      <router-link to="/activeCompent">动态组件与v-once指令</router-link>
      <router-link to="/fade">过渡</router-link>
      <router-link to="/animate">动画</router-link>
    </nav>
    <p class="tac"><i class="iconfont icon-biaoqingxianxing"></i></p>
    <section class="main">
      <router-view/>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>
<style>
  html,body,#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin: 0;
    padding: 0;
    font-size: 16px;
  }
  i{
    font-size: 80px!important;
    color: #ff4d51;
  ;
  }
  .header {
    padding: 0 10%;
    /*height: 60px;*/
    background-color: #2c3e50;
  }
  .main{
    padding: 20px 10%;
  }
  nav a {
    font-size: 12px;
    padding: 0 10px;
    line-height: 60px;
    color: #fff;
    text-decoration: none;
    display: inline-block;
    height: 100%;
  }
  .router-link-exact-active{
    background-color: #43be87;
  }
</style>
