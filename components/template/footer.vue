<template>
  <div>
    	<div class="footer-section">
        <div class="text-center">
          Copyright &copy;<span style="color: #f2f7f8">{{date}}</span>  All rights reserved Tueloper loves <i class="fa fa-heart-o" aria-hidden="true"></i> You!!.....
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