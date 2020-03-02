<template>
  <div>
    <div class="text-center bg-dark welcome p-3">
      <h3>{{welcome}}</h3>
    </div>
    <button class="btn btn-outline-dark" @click.prevent="showCaseToggle">Click Me</button>
    <a v-if="showCase" :title="message" :[attributeName]="url">Hover On me</a>

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

    <!-- <div class="text-center">
      <quiz />
    </div>-->

    <template v-if="Math.random() > 2 ">
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </template>
    <div v-else>There are numbers less 2</div>

    <ul v-for="set in sets" :key="set.id">
      <li v-for="n in even(set)" :key="n">{{ n }}</li>
    </ul>

    <todoLoop>
      <li>
        {{title}}
        <button class="btn btn-danger" @click="$emit('remove')">Remove</button>
      </li>
    </todoLoop>

    <div>
      <button @click.prevent="greet">Greet</button>
    </div>

    <!-- only call `vm.submit()` when the `key` is `Enter` -->
    <input v-model="enval" v-on:keyup.enter="submit(enval)" />

    <!-- using of communication between child and parent component -->
    <div class="row" style="width: 100%;" :style="{ fontSize: postFontSize + 'em'}">
      <Blog
        v-for="post of posts"
        :key="post.id"
        :post="post"
        v-on:enlarge="postFontSize += $event"
      />
    </div>

    <!-- using basic slot component -->
    <segmeted>
      <template v-slot:header>
        <Header />
      </template>

      <template #default>
        <About />
      </template>

      <template #footer>
        <Footer />
      </template>
    </segmeted>
  </div>
</template>
<script>
import todoItem from './../../components/training/todos'
import Blog from './../../components/training/blog'
import todoLoop from './../../components/training/loop'
import segmeted from './../../components/training/slot'
import About from './../../components/landing/about'
import Header from './../../components/template/headerP'
import Footer from './../../components/template/footer'

export default {
  layout: 'blog',

  components: {
    todoItem,
    Blog,
    todoLoop,
    segmeted,
    About,
    Footer,
    Header
  },

  data() {
    return {
      welcome: 'Training',
      message: `This was loaded at ${new Date().toLocaleString()}`,
      showCase: false,
      todos: [{ text: 'Learn Javascript' }, { text: 'Learn Vue' }],
      display: '',
      groceryList: [
        { id: 0, text: 'Vegetables', heading: 'VegiHead' },
        { id: 1, text: 'Cheese', heading: 'CheeseHead' },
        {
          id: 2,
          text: 'Whatever else humans are supposed to eat',
          heading: 'WhateverHead'
        }
      ],
      url: '/',
      attributeName: 'href',
      sets: [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]],
      new_todo: '',
      todors: [
        {
          id: 1,
          title: 'Do the dishes'
        },
        {
          id: 2,
          title: 'Take out the trash'
        },
        {
          id: 3,
          title: 'Mow the lawn'
        }
      ],
      nextTodoId: 4,
      posts: [
        {
          id: 1,
          title: 'My journey with Vue',
          content: 'This is where i learnt some crazy things'
        },
        {
          id: 2,
          title: 'Blogging with Vue',
          content: 'This is where i learnt some crazy things'
        },
        {
          id: 3,
          title: 'Why Vue is so fun',
          content: 'This is where i learnt some crazy things'
        }
      ],
      postFontSize: 1,
      title: ''
    }
  },

  methods: {
    showCaseToggle() {
      this.showCase = !this.showCase
    },
    even(numbers) {
      return numbers.filter(number => {
        return number % 2 === 0
      })
    },

    greet(e) {
      alert('Hello Tochi')
      alert(`I am ${e.target.tagName}`)
    },
    submit(enval) {
      alert(enval)
    }
  }
}
</script>

<style scoped>
.welcome h3 {
  color: white !important;
}
</style>