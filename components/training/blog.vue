<template>
  <div>
    <div class="col-md-3 col-xs-12">
      <h3>{{post.title}}</h3>
      <p>{{post.content}}</p>
      <button class="btn btn-outline-dark" v-on:click="$emit('enlarge', 0.1)">Englarge</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['post']
}
</script>