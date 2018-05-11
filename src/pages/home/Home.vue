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
    </div>
</template>

<script>
    export default {
      name: "Home",
      data:function () {
        return {
          isError:false,
          txt:'',
          list:[],
          ko:[]
        }
      },
      methods:{
        submit:function () {
          if(this.txt.length){
            this.list.push(this.txt);
            this.txt='';
            this.isError=false;
          }else{
            this.isError=true;
          }

        },
        done:function (index,item) {
          this.list.splice(index, 1);
          this.ko.push(item);
        }
      }
    }
</script>

<style scoped>
  .todo>div input{
    border: 1px solid #d9d9d9;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    padding: 8px 16px;
    width: 300px;
  }
  .todo>div small{
    color: #e84252;
    margin-left: 20px;
  }
  .list{
    width: 750px;
  }
  .list>ul{
    width: 46%;
  }
  .list li{
    padding: 6px 16px;
    margin-top: 18px;
    background-color: #0badff;
    color: #fff;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }
  .list .fr li{
    background-color: #d3dce6;
    color: #666;
  }
</style>
