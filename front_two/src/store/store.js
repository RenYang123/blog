import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex)

var store=new Vuex.Store({
    state:{
       navData:null,
       articleData:null,
       state:false,
       somedata:null
    },
    actions:{
        getAllData({commit}){
           var dataNav= new Promise((resolve,reject)=>{
               this.axios.get("/api/front_article/getNav").then((data)=>{
                   commit("navData_m",data.data.data)
                })
            })
            var dataArticle= new Promise((resolve,reject)=>{
                 this.axios.get("/api/front_article/getArticleAll").then((data)=>{
                     console.log(1111)
                    commit("articleData_m",data.data.data)
                })
            })
            var dataSome=new Promise((resolve,reject)=>{
               this.axios.get("/some").then((data)=>{
                   commit("somedata_m",data)
                })
            })
            return {
                dataNav,
                dataArticle,
                dataSome
            }
          
       },
        defaultData({dispatch,commit}){
            Promise.all([dispatch("getAllData").dataNav,dispatch("getAllData").dataArticle,dispatch("getAllData").dataSome]).then(()=>{
                commit("state_m",true)
            })
            // dispatch(getAllData).dataNav.then((data)=>{

            // })
        },
        // getdata({commit}){
        //     return new Promise((resolve,reject)=>{
        //        this.axios.get("/some").then((data)=>{
        //            commit("somedata_m",data)
        //         })
        //     })
        // }
    },
    mutations:{
      navData_m(state,data){
          state.navData=data;
      },
      articleData_m(state,data){
          state.articleData=data;
      },
      somedata_m(state,data){
          state.somedata=data;
          console.log(state.somedata)
      },
      state_m(state,data){
          console.log(state)
          state.state=data;
      }
    }
})
export default store;