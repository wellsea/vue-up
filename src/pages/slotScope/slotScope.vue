<template>
  <div>
    <h1>作用域插槽使用场景：</h1>
    <h2>循环列表的时候，列表的样式有时候是由父组件决定的</h2>
    <child>
      <template slot-scope="props">
        <h3>{{props.content}}</h3>
      </template>
    </child>
  </div>
</template>

<script>
  export default {
    name: "slotScope",
    components: {
      child:{
        data:function () {
          return {
            list: [1, 2, 3, 4, 5]
          }
        },
        template: `<div>
                     <ul>
                        <slot v-for="(item, index) in list" :content="item"></slot>
                     </ul>
                 </div>`
      }
    }
  }
</script>

<style scoped>

</style>
