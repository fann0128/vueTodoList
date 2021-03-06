import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Todo from '@/components/Todo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }, {
      path: '/todo',
      name: 'Todo',
      component: Todo
    }
  ]
})
