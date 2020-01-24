<template>
  <div>
    <div class="text-center bg-dark welcome p-3">
      <h3>{{welcome}}</h3>
    </div>
    <button class="btn btn-outline-dark" @click="showCaseToggle">Click Me</button>
    <div v-if="showCase" v-bind:title="message">Hover On me</div>

    <!-- for loop directive -->
    <ul>
      <li v-for="todo in todos" :key="todo.id">{{todo.text}}</li>
    </ul>

    <!-- two way binding -->
    <h4>{{display}}</h4>
    <input type="text" v-model="display" class="form-control" />

    <div class="row flex justify-content-center">
      <todoItem v-for="list in groceryList" :item="list" :key="list.id" />
    </div>
  </div>
</template>
<script>
import todoItem from './../../components/training/todos'

export default {
  layout: 'blog',

  components: {
    todoItem
  },

  data() {
    return {
      welcome: 'Training',
      message: `This was loaded at ${new Date().toLocaleString()}`,
      showCase: false,
      todos: [{ text: 'Learn Javascript' }, { text: 'Learn Vue' }],
      display: this.display,
      groceryList: [
        { id: 0, text: 'Vegetables', heading: 'VegiHead' },
        { id: 1, text: 'Cheese', heading: 'CheeseHead' },
        {
          id: 2,
          text: 'Whatever else humans are supposed to eat',
          heading: 'WhateverHead'
        }
      ]
    }
  },

  methods: {
    showCaseToggle() {
      this.showCase = !this.showCase
    }
  }
}
</script>

<style scoped>
.welcome h3 {
  color: white !important;
}
</style>