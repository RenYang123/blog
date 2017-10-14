<template>
    <div class="left">
         {{content}}
         <el-button type="primary" @click="fn">返回</el-button>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                content:null,
                datas:null,
            }
        },
        created(){
            this.datas=this.$route.query.data;
            this.content=this.datas.content;
        },
        methods:{
            fn(){
                 this.$router.go(-1)
            }
        }
    }
</script>
<style scoped>
    .left{
        width: 600px;
    }
</style>