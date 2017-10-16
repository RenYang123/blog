<template>
     <el-table :data="tabledata" style="width: 600px;height:100%" class="table" @row-dblclick="dbclick">
      <el-table-column prop="article_name" label="标题" width="150"></el-table-column>
      <el-table-column prop="cnname_one" label="分类" width="150"></el-table-column>
      <el-table-column prop="editer" label="作者"></el-table-column>
      <el-table-column prop="time" label="发布时间" width="180"></el-table-column>
    </el-table> 
</template>
<script>
    export default{
        data(){
           return{
               tabledata:null
           }
        },
        watch:{
            $route(){
               this.tabledata=this.$route.query.data
            }
        },
        created(){
            this.tabledata=this.$route.query.data
        },
        methods:{
            dbclick(row){
                this.$router.push({path:"/detail",query:{data:row}})
            },
        }
    }
</script>