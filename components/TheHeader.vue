<template>
  <header id="site-header">
      <div id="top-pad1"></div>
      <div id="top-pad2"></div>
      <div class="container clearfix">
          <a class="logo" :href="`/${this.$route.params.locale}/`"><img src="~/assets/img/logo-l.png" alt="Jointanet"></a>
          <ul class="nav visible-desktop clearfix">
              <li class="text-center"><a href="#services"><strong>{{ navi.sec1 }}</strong></a></li>
              <li class="text-center"><a href="#price"><strong>{{ navi.sec2 }}</strong></a></li>
              <li class="text-center"><a href="#works"><strong>{{ navi.sec3 }}</strong></a></li>
          </ul>
          <a v-if="!(/(en|ja)\/*$/i.test(this.$route.path))" id="btn-back-to-home" class="btn btn-inverse pull-left hidden-desktop" :href="backUrl" type="button"><i class="icon-chevron-left icon-white"></i>&nbsp;戻る</a>
      </div>
      <div class="lang-btns">
        <a :class="['btn-en', this.$route.params.locale === 'en' ? 'active' : '']" :href="this.$route.fullPath.replace(/^\/(en|ja)\/*/, '/en/')">English</a>
        <a :class="['btn-ja', this.$route.params.locale === 'ja' ? 'active' : '']" :href="this.$route.fullPath.replace(/^\/(en|ja)\/*/, '/ja/')">日本語</a>
      </div>
  </header>
</template>
<script>
export default {
  computed: {
		navi () {
			return this.$store.state.navi;
		},
    backUrl() {
      return this.$store.state.backUrl;
    }
	},
}
</script>
