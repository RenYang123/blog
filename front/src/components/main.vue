<template>
 <div class="box">
    <header>
        <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1"><h3>个人博客</h3></el-menu-item>
        <el-submenu :index="item.onedata.cnname" v-for="item in oldData">
          <template slot="title">{{item.onedata.cnname}}</template>
            <el-menu-item :index="items.cnname" v-for="items in item.twodata">{{items.cnname}}</el-menu-item>           
        </el-submenu>
      </el-menu>
    </header>
    <section>
      <el-breadcrumb separator="/" class="banner">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{onename}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{twoname}}</el-breadcrumb-item>
      </el-breadcrumb>
      <template>
      <div class="content">
        <div class="router">
          <router-view></router-view>
        </div>
        <div class="right">
          <div class="all">全站搜索</div>
          <div class="input">
            <el-input v-model="input" placeholder="请输入内容" style="width:270px;margin-top:10px;margin-right:20px;"></el-input>
            <el-button type="primary">搜索</el-button>
            <el-table :data="articles" @row-dblclick="dbclick" style="width: 100%;height:162px;margin-top:10px;text-align:center" :default-sort = "{prop: 'visitors', order: 'descending'}">
              <el-table-column prop="article_name" style="text-align:center;" label="点击排行"></el-table-column> 
              <el-table-column prop="visitors" style="text-align:center"></el-table-column>
            </el-table> 
             <el-table :data="articles" style="width: 100%;height:162px;margin-top:10px;text-align:center" :default-sort = "{prop: 'time', order: 'descending'}">
              <el-table-column prop="article_name" style="text-align:center;" label="最新文章"></el-table-column> 
              <el-table-column prop="time" style="text-align:center"></el-table-column>
            </el-table> 
          </div>
        </div>
      </div>
  </template>
    </section>
 </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        oldData:[],
        onename:"",
        twoname:"",
        articles:null,
        tabledata:[],
        input:"",
        newData:[]
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        this.onename=keyPath[0];
        this.twoname=keyPath[1];
        this.changedata(keyPath[0],keyPath[1]);
        console.log(key, keyPath);
      },
      changedata(one,two){
        console.log(1)
        this.tabledata=[];
         this.articles.forEach((i)=>{
           if(i.cnname_one===one&&i.cnname_two===two){
               this.tabledata.push(i);
           }
         })
          this.$router.push({name:"table",query:{data:this.tabledata}})
      },
         dbclick(row){
            this.$router.push({path:"/detail",query:{data:row}})
         },
    },
    created(){
       this.axios.get("/api/front_article/getNav").then((data)=>{
         this.oldData=data.data.data;
         this.onename=this.oldData[0].onedata.cnname;
         this.twoname=this.oldData[0].twodata[0].cnname;
       })
         this.axios.get("/api/front_article/getArticleAll").then((data)=>{
            this.articles=data.data.data;
          // console.log(data.data.data);
       })
    }
  }
</script>
<style scoped>
  h3{
    color:white;
  }
  .banner{
    line-height: 30px;
    padding-left: 20px;
  }
  
</style>