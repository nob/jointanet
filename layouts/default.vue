<template>
<!--[if lt IE 8]>
    <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
<![endif]-->
<div class="">
  <the-header/>
  <nuxt/>
  <the-footer/>
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
  <!--<script>window.jQuery || document.write('<script src="/js/vendor/jquery-1.9.1.min.js"><\/script>')</script>-->
  <script src="/js/vendor/jquery.tools.min.js?v=3"></script>
  <script src="/js/vendor/bootstrap.min.js"></script>
  <script src="/js/plugins.js"></script>
  <script src="/js/main.js"></script>
</div>
</template>
<script>
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheFooter
  }
}

</script>
<style>
</style>
