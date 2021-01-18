<template>
  <div>
    <div class="footer-section">
      <div class="text-center">
        Copyright &copy;
        <span>{{date}}</span> Tueloper loves
        <i class="fa fa-heart" aria-hidden="true"></i> You!!.....
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      date: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.footer-section {
  width: 100%;
}
</style>