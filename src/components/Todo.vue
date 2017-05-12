<template>
  <div class="todo">
    <h1>{{ pageName }}</h1>
    <input type="text" v-model="myInput" @keyup="updateMsg">
    <button @click="addNewTodo">Add To List</button>
    <br>
    <ul>
      <li v-for="todo in myTodos" v-if="!todo.compelete"> {{ todo.description }} <a v-if="!todo.compelete" @click="todoDone(todo.description)">Done</a> </li>
    </ul>
    <h1>My Done List</h1>
    <ul>
      <li v-for="todo in myTodos" v-if="todo.compelete"> {{todo.description}} <a v-if="todo.compelete" @click="todoNotDone(todo.description)">Not Done</a></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'todo',
  data () {
    return {
      pageName: 'My todo List', myInput: '', myTodos: [{description: 'Eat', compelete: true}, {description: 'Movie', compelete: false}, {description: 'Gym', compelete: false}, {description: 'Sleep', compelete: false}]
    }
  },
  methods: {
    updateMsg: function () {
      this.msg = this.myInput
    },
    addNewTodo: function () {
      var oneTodo = {description: this.myInput, compelete: false}
      if (oneTodo.description.length > 0) { this.myTodos.push(oneTodo) }
      this.myInput = ''
    },
    todoDone: function (desc) {
      this.myTodos.find(function (todo) { if (todo.description === desc) { todo.compelete = true } })
    },
    todoNotDone: function (desc) {
      this.myTodos.find(function (todo) { if (todo.description === desc) { todo.compelete = false } })
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
</style>
