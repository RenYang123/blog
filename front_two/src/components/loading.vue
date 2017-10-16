<template>
       <div>{{name}}</div>
</template>
<script>
    import {mapActions} from "vuex";
    export default{
        data(){
            return{
                name:"123"
            }
        },
        created(){
            this.defaultData();
        },
        methods:{
            ...mapActions([
                "defaultData"
            ])
        }
    }
</script>