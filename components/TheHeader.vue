<template>
  <header id="site-header">
      <div id="top-pad1"></div>
      <div id="top-pad2"></div>
      <div class="container clearfix">
          <a class="logo" :href="`/${this.$route.params.locale}`"><img src="~/assets/img/logo-l.png" alt="Jointanet"></a>
          <ul class="nav visible-desktop clearfix">
              <li class="text-center active"><a href="#services"><strong>{{ navi.sec1 }}</strong></a></li>
              <li class="text-center active"><a href="#price"><strong>{{ navi.sec2 }}</strong></a></li>
              <li class="text-center active"><a href="#works"><strong>{{ navi.sec3 }}</strong></a></li>
          </ul>
          <a v-if="this.$route.path !== 'en'" id="btn-back-to-home" class="btn btn-inverse pull-left hidden-desktop" href="" type="button"><i class="icon-chevron-left icon-white"></i>&nbsp;戻る</a>
      </div>
  </header>
</template>
<script>
export default {
  computed: {
		navi () {
			return this.$store.state.navi
		}
	},
}
</script>
