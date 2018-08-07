<template>
  <section id="details">
      <div class="container">
          <div class="row">
  	        <div class="span8 offset2">
              <h1 class="text-center">{{ title }}<small><br>{{ subtitle }}</small></h1>
              <div v-html="bodyHtml"></div>
  	        </div>
          </div>
      </div>
  </section>
</template>

<script>
import { sourceFileArray, fileMap } from '../../contents/json/summary.json';
export default {
  validate ({ params, store }) {
    return sourceFileArray.includes(`contents/404.${params.locale}.md`);
  },
  asyncData ({ params, store}) {
    return Object.assign({}, require(`~/contents/json/404.${params.locale}.json`), { params });
  },
};
</script>

<style>
</style>
