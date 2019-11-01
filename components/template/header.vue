<template>
  <div>
    	<!-- Header section start -->
	<header class="header-section">
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-4">
					<div class="site-logo">
						<h2><a href="/">Tueloper</a></h2>
						<p>Experience More than What You See......</p>
					</div>
				</div>
				<div class="col-md-8 text-md-right header-buttons">
					<nuxt-link to="/download" class="site-btn">Download CV</nuxt-link>
					<nuxt-link to="/blog" class="site-btn">Blog</nuxt-link>
				</div>
			</div>
		</div>
	</header>
	<!-- Header section end -->
  </div>
</template>

<script>
export default {
  name: 'header'
}
</script>