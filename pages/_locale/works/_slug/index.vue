<template>
  <section id="details">
      <div class="container">
          <div class="row">
              <div class="span12">
                <h1 class="text-center">{{ title }}</h1>
              </div>
          </div>
          <div class="row">
              <div class="span12">
                  <img id="screenshot" :src="`/img/${screenshot}`" :alt="domain">
                  <h4 class="text-center"><a :href="live_url" title="domain" target="_blank">{{ domain }}</a></h4>
              </div>
          </div>
          <div class="row">
              <div class="span12">
                  <div v-html="bodyHtml"></div>
              </div>
          </div>
      </div>
  </section></template>
<script>
import { sourceFileArray, fileMap } from '../../../../contents/json/summary.json';
export default {
  validate ({ params, store }) {
    return sourceFileArray.includes(`contents/works/${params.slug}.${params.locale}.md`);
  },
  asyncData ({ params, store}) {
    const work = require(`~/contents/json/works/${params.slug}.${params.locale}.json`);
    store.state.backUrl = work.back_url;
    return Object.assign({}, work, { params });
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
<style scoped>
#screenshot {
	display: block;
	margin: 0px auto 20px;
	padding: 10px 0;
}
</style>
