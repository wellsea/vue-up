<template>
  <div class="todo">
    <div>
      <input type="text" v-model="txt" placeholder="自定义内容" @keyup.enter="submit">
      <small v-if="isError">请输入文本内容,在进行提交~</small>
    </div>
    <div class="clearfix list">
      <ul class="fl">
        <li style="background: #13ce66;">正在进行中</li>
        <li v-for="(item, index) in list" @click="done(index,item)">{{index+1}}、{{item}}</li>
      </ul>
      <ul class="fr">
        <li style="background: rgba(68,77,99,0.36);">已完结</li>
        <li v-for="(item, index) in ko">{{index+1}}、{{item}}</li>
      </ul>
    </div>
    <!--<h1>初次使用stylus</h1>-->
    <ul>
      <li class="cold" v-for="(item, index) of coldData" :key="index">
        <img :src="item.logo">
        <div>
          <h3>{{item.title}}</h3>
          <p>{{item.codeLave1}}-{{item.codeLave2}}</p>
          <p>{{item.provincename}}-{{item.cityname}}-{{item.areaName}}-{{item.detlAddress}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import http from '../../../static/http.js'
  export default {
    mixins: [http],
    name: "Home",
    data: function () {
      return {
        isError: false,
        txt: '',
        list: [],
        coldData: [],
        ko: []
      }
    },
    methods: {
      submit: function () {
        if (this.txt.length) {
          this.list.push(this.txt);
          this.txt = '';
          this.isError = false;
        } else {
          this.isError = true;
        }

      },
      done: function (index, item) {
        this.list.splice(index, 1);
        this.ko.push(item);
      },
      getData:function () {
        this.get('/i/ShareRdcController/getColumnRdc',{params:{dataType:3,typeCode:1}})
          .then((res)=>{
            this.coldData=res;
          },(res)=>{
            alert('请求出错~')
          })
      }
    },
    mounted(){
      this.getData();
    }
  }

</script>

<style scoped lang="stylus">
  vendor(props, args)
    -webkit-{props} args
    -moz-{props} args
    -ms-{props} args
    {props} args

  border-radius()
    vendor('border-radius', arguments)

  padding = 6px 15px

  .todo
    > h1
      color #ff4d51
    input
      border 1px solid #d9d9d9
      border-radius 5px 2px 10px 29px
      padding padding
      width 300px
      color mediumvioletred
      &:hover
        color #0400ff
    small
      color #ff4d51
      margin-right 20px
    .list
      width 750px
      ul
        width 45%
        li
          padding padding
          margin-top 18px
          background-color #00ffff
          color #fff
          border-radius 30px 6px/8px 1px
      .fr
        li
          background #d3dce6
          color #666
  .cold
    padding padding
    background #efefef
    margin-bottom 18px
    display flex
    div
      flex 1
      padding-left 16px
      line-height 2
    img
      width 120px
      height 100px
</style>
