<template>
  <section id="details">
      <div class="container">
          <div class="row">
              <div class="span8 offset2">
                  <h1 class="text-center">{{ title }}<small><br>{{ subtitle }}</small></h1>
                  <div class="row">
                      <div class="span6 offset1">
                          <img class="illustration" :src="`${image}`" :alt="title"/>
                      </div>
                  </div>
                  <div v-html="bodyHtml"></div>
              </div>
          </div>
      </div>
  </section>
</template>
<script>
// import moment from 'moment-timezone';
import { sourceFileArray, fileMap } from '../../../../contents/json/summary.json';
export default {
  validate ({ params, store }) {
    return sourceFileArray.includes(`contents/articles/${params.slug}.${params.locale}.md`);
  },
  asyncData ({ params, store}) {
    const article = require(`~/contents/json/articles/${params.slug}.${params.locale}.json`);
    store.state.backUrl = article.back_url;
    return Object.assign({}, article, { params });
  },
  head () {
   return {
     title: `${this.title} | Jointanet - ジョインタネット`,
     meta: [
       { hid: 'description', name: 'description', content: this.bodyContent.substr(0, 500) }
     ]
    }
  }
};
</script>
