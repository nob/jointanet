<template>
  <section class="container">
    <section id="message">
        <div class="container">
            <img id="radio-wave" src="~/assets/img/radio-wave.png">
            <h1>{{ title }}</h1>
        </div>
    </section>
    <section id="services">
        <div class="container" v-for="(s, index) of services" :key="index">
            <h1 class="text-center hidden-desktop">ジョインタネットのサービス</h1>
            <section class="row featurette">
              <div :class="[index%2 === 0 ? 'pull-left' : 'pull-right', 'span6']">
                  <img class="featurette-image illustration" :src="`/img/${s.image}`" :alt="s.title"/>
              </div>
              <div class="span6">
                  <h2>{{ s.title }}<small><br>{{ s.subtitle }}</small></h2>
                  <div v-html="s.bodyHtml"></div>
                  <!-- <p class="text-right"><a class="btn btn-jointanet-2" href="{{ url }}">詳しく読む&nbsp;<i class="icon-forward icon-white"></i></a></p> -->
              </div>
            </section>
            <hr class="featurette-divider">
        </div>
    </section>
    <section id="price">
        <div class="container">
            <h1 class="text-center hidden-desktop">料金</h1>
            <section class="row featurette">
              <div class="span8 offset2">
                  <h2>{{ price.title }}</h2>
                  <div v-html="price.preview"></div>
                  <p class="text-right"><a class="btn btn-jointanet-2" :href="url">料金について詳しく&nbsp;<i class="icon-forward icon-white"></i></a></p>
              </div>
            </section>
        </div>
    </section>
    <section id="works">
        <div class="container">
            <h1 class="text-center hidden-desktop">制作事例</h1>
            <div class="row">
                <ul class="thumbnails">
                  <li class="span4">
                    <a href="/works/ippuku" class="thumbnail">
                      <img src="~/assets/img/ippuku-thumb.png" alt="">
                    </a>
                  </li>
                  <li class="span4">
                    <a href="/works/kioto" class="thumbnail">
                      <img src="~/assets/img/kioto-thumb.png" alt="">
                    </a>
                  </li>
                  <li class="span4">
                    <a href="/works/bglen" class="thumbnail">
                      <img src="~/assets/img/bglen-thumb.png" alt="">
                    </a>
                  </li>
                </ul>
            </div>
            <div class="row">
                <ul class="thumbnails">
                  <li class="span4">
                    <a href="/works/zionus" class="thumbnail">
                      <img src="~/assets/img/zionus-thumb.png" alt="">
                    </a>
                  </li>
                  <li class="span4">
                    <a href="/works/skfine" class="thumbnail">
                      <img src="~/assets/img/skfine-thumb.png" alt="">
                    </a>
                  </li>
                  <li class="span4 hidden-phone">
                    <a class="thumbnail">
                        <img src="~/assets/img/etc-thumb.png" alt="">
                    </a>
                  </li>
                </ul>
            </div>
            <p>We also <strong>offer strong support for those looking for a multi-lingual presence in the international marketplace</strong>, whether you are a Japanese company looking to enter an overseas market or an overseas company looking to make a stand in the Japanese market.  <strong>Creating multilingual websites</strong> is one our strong points . </p>
        </div>
    </section>
  </section>
</template>

<script>
import { sourceFileArray, fileMap } from '../../contents/json/summary.json';
export default {
  validate ({ params, store }) {
    return sourceFileArray.includes(`contents/index.${params.locale}.md`);
  },
  asyncData ({ params, store}) {
    const index = require(`~/contents/json/index.${params.locale}.json`);
    const price = require(`~/contents/json/price.${params.locale}.json`);
    const services = [
      require(`~/contents/json/services/production.${params.locale}.json`),
      require(`~/contents/json/services/operation.${params.locale}.json`),
      require(`~/contents/json/services/analysis.${params.locale}.json`),
      require(`~/contents/json/services/facebook.${params.locale}.json`),
    ];
    const objtmp = Object.assign({}, index, { price }, { services }, { params });
    // console.log(objtmp);
    return objtmp;
  },
};

</script>

<style>
</style>
