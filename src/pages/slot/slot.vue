<template>
  <div>
    <p>插槽的使用场景</p>
    <p>子组件里的内容有时并不是自己决定的，而是由父组件传递过来的</p>
    <p>具名插槽</p>
    <child-Component content="hello world">
      <!--<h1 slot="header">header</h1>-->
      <h1 slot="footer">footer</h1>
    </child-Component>
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
            template:`<div class="slot">
                        <slot name="header">我是默认文字--header</slot>
                        <p>{{content}}</p>
                        <slot name="footer">我是默认的footer文字</slot>
                      </div>`
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
  .slot{
    background-color: #36baff;
    color: #fff;
    padding: 20px;
    line-height: 3;
  }
</style>
