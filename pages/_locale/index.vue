<template>
  <div>
    <section id="message">
        <div class="container">
            <img id="radio-wave" src="~/assets/img/radio-wave.png">
            <h1>{{ title }}</h1>
        </div>
    </section>
    <section id="services">
        <div class="container">
            <h1 class="text-center hidden-desktop">{{ navi.sec1 }}</h1>
            <section class="row featurette" v-for="(s, index) of services" :key="index">
              <div :class="[index%2 === 0 ? 'pull-left' : 'pull-right', 'span6']">
                  <img class="featurette-image illustration" :src="`${s.image}`" :alt="s.title"/>
              </div>
              <div class="span6">
                  <h2>{{ s.title }}<small><br>{{ s.subtitle }}</small></h2>
                  <div v-html="s.bodyHtml"></div>
                  <!-- <p class="text-right"><a class="btn btn-jointanet-2" href="{{ url }}">詳しく読む&nbsp;<i class="icon-forward icon-white"></i></a></p> -->
              </div>
              <hr v-if="!(services.length -1 === index)" class="featurette-divider">
            </section>
        </div>
    </section>
    <section id="price">
        <div class="container">
            <h1 class="text-center hidden-desktop">{{ navi.sec2 }}</h1>
            <section class="row featurette">
              <div class="span8 offset2">
                  <h2>{{ price.title }}<small><br>{{ price.subtitle }}</small></h2>
                  <div v-html="price.bodyHtml.substring(0, 550) + '…'"></div>
                  <p class="text-right"><a class="btn btn-jointanet-2" :href="`/${params.locale}/price`">{{ price.btn_label_home }}&nbsp;<i class="icon-forward icon-white"></i></a></p>
              </div>
            </section>
        </div>
    </section>
    <section id="works">
        <div class="container">
            <h1 class="text-center">{{ navi.sec3 }}</h1>
            <div class="row">
                <ul class="thumbnails">
                  <li class="span4">
                    <a :href="`/${params.locale}/works/ippuku`" class="thumbnail">
                      <img src="~/assets/img/ippuku-thumb.png" alt="">
                    </a>
                  </li>
                  <li class="span4">
                    <a :href="`/${params.locale}/works/kioto`" class="thumbnail">
                      <img src="~/assets/img/kioto-thumb.png" alt="">
                    </a>
                  </li>
                  <li class="span4">
                    <a :href="`/${params.locale}/works/bglen`" class="thumbnail">
                      <img src="~/assets/img/bglen-thumb.png" alt="">
                    </a>
                  </li>
                </ul>
            </div>
            <div class="row">
                <ul class="thumbnails">
                  <li class="span4">
                    <a :href="`/${params.locale}/works/zionus`" class="thumbnail">
                      <img src="~/assets/img/zionus-thumb.png" alt="">
                    </a>
                  </li>
                  <li class="span4">
                    <a :href="`/${params.locale}/works/skfine`" class="thumbnail">
                      <img src="~/assets/img/skfine-thumb.png" alt="">
                    </a>
                  </li>
                  <li class="span4">
                    <a :href="`/${params.locale}/works/ippuku15`" class="thumbnail">
                      <img src="~/assets/img/ippuku15-thumb.png" alt="">
                    </a>
                  </li>
                </ul>
            </div>
            <div class="row">
                <ul class="thumbnails">
                  <li class="span4">
                    <a :href="`/${params.locale}/works/soratoiro`" class="thumbnail">
                      <img src="~/assets/img/soratoiro-thumb.png" alt="">
                    </a>
                  </li>
                  <li class="span4">
                    <a :href="`/${params.locale}/works/sustina`" class="thumbnail">
                      <img src="~/assets/img/sustina-thumb.png" alt="">
                    </a>
                  </li>
                  <li class="span4 hidden-phone">
                    <a class="thumbnail">
                        <img src="~/assets/img/etc-thumb.png" alt="">
                    </a>
                  </li>
                </ul>
            </div>
            <div v-html="bodyHtml"></div>
        </div>
    </section>
  </div>
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
    return Object.assign({}, index, { price }, { services }, { params });
  },
  head () {
   return {
     meta: [
       { hid: 'description', name: 'description', content: `${this.title} - ${this.bodyContent.substr(0, 500)}` }
     ]
    }
  },
  computed: {
    navi () {
      return this.$store.state.navi;
    },
  }
};

</script>

<style>
</style>
