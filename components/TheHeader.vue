<template>
  <header id="site-header">
      <div id="top-pad1"></div>
      <div id="top-pad2"></div>
      <div class="container clearfix">
          <a class="logo" href="/"><img src="~/assets/img/logo-l.png" alt="Jointanet"></a>
          <ul class="nav visible-desktop clearfix">
              <!-- <li class="text-center {{if segment_1 === 'services'}}active{{ endif }}"><a href="{{ if current_path !== '/' }}/{{ endif}}#services"><strong>Services</strong></a></li>
              <li class="text-center {{if segment_1 === 'price'}}active{{ endif }}"><a href="{{ if current_path !== '/' }}/{{ endif}}#price"><strong>Fees</strong></a></li>
              <li class="text-center {{if segment_1 === 'works'}}active{{ endif }}"><a href="{{ if current_path !== '/' }}/{{ endif}}#works"><strong>Works</strong></a></li> -->
          </ul>
          <!-- {{ if current_path !== '/' }} -->
          <!-- <a id="btn-back-to-home" class="btn btn-inverse pull-left hidden-desktop" href="{{ back-url }}" type="button"><i class="icon-chevron-left icon-white"></i>&nbsp;戻る</a> -->
          <!-- {{ endif }} -->
      </div>
  </header>
</template>
