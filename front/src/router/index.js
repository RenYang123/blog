import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import table from "@/components/pages/table.vue"
import detail from "@/components/pages/detail.vue"
import index from "@/components/pages/index.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main,
      children:[
        {
          path: 'table',
          name: 'table',
          component: table,
        },
        {
          path: 'detail',
          name: 'detail',
          component: detail,
        },
         {
          path: 'index',
          name: 'index',
          component: index,
        },
        {
          path: '/',
          name: 'index',
          redirect:"/index"
        }
      ]
    }
  ]
})
