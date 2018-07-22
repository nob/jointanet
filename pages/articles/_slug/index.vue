<template>
  <section>
    <h1>
      {{ title }} {{locale}}
    </h1>
    <hr>
    <div class="">
      <p class="ml-3">
        <b>{{ params.slug }}</b>
      </p>
      <div class="article-body" v-html="bodyHtml">
      </div>
    </div>
  </section>
</template>
<script>
// import moment from 'moment-timezone';
import { sourceFileArray, fileMap } from '../../../contents/json/summary.json';
export default {
  validate ({ params, store }) {
    return sourceFileArray.includes(`contents/articles/${params.slug}.${store.state.locale}.md`);
  },
  asyncData ({ params, store}) {
    const locale = store.state.locale
    return Object.assign({}, require(`~/contents/json/articles/${params.slug}.${locale}.json`), { params, locale });
  },
  mounted () {
    // this.article = require(`~/contents/json/articles/${this.$route.params.slug}.en.json`);
  },
  // head() {
  //   const title = `${this.title} - SUSTINA`;
  //   const url = `https://sustina.co/news/${this.params.date}/${this.params.slug}/`;
  //   return {
  //     title: title,
  //     meta: [
  //       { hid: 'og:url', property: 'og:url', content: url },
  //       { hid: 'og:title', property: 'og:title', content: title },
  //     ],
  //     link: [{ rel: 'canonical', href: url }],
  //   };
  // },
};
</script>
<style lang="stylus" scoped>
h1
  font-size: 15px
  font-weight: 700

.article-body
  h2
    font-size: 13px
</style>
