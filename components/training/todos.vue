<template>
  <div>
    <div class="col-lg-3 col-md-3">
      <div class="fact-box" :class="{'bg-red': isHover}">
        <div class="fact-content">
          <h1>{{item.heading}}</h1>
          <h2>{{item.id}}</h2>
          <p>{{item.text}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'todos',
  props: ['item'],
  data() {
    return {
      isHover: false
    }
  },

  mounted() {}
}
</script>

<style scoped>
.bg-red {
  background-color: red !important;
}
</style>