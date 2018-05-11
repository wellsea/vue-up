<template>
  <div>
    <p>插槽的使用场景</p>
    <p>子组件里的内容有时并不是自己决定的，而是由父组件传递过来的</p>
    <p>具名插槽</p>
    <child-Component content="hello world"></child-Component>
  </div>
</template>

<script>
    export default {
        name: "Slots",
        components:{
          childComponent:{
            props:{//属性校验
              content:{
                type: String,
                default:'我是一个组件',
                required:false,
                validator:function(val){
                  return (val.length>2)
                }
              }
            },
            template:'<div>{{content}}</div>'
          }
        }
    }
</script>

<style scoped>
  p{
    line-height: 2.2;
    font-size: 18px;
    font-weight: bold;
  }
</style>
