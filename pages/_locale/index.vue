<template>
  <section class="container">
    <section id="message">
        <div class="container">
            <img id="radio-wave" src="~/assets/img/radio-wave.png">
            <h1>{{ title }}</h1>
        </div>
    </section>
    <section id="services">
        <div class="container">
            <h1 class="text-center hidden-desktop">ジョインタネットのサービス</h1>
            <section class="row featurette">
              <div class="span6 pull-left">
                  <img class="featurette-image illustration" src="~/assets/img/service-1-l.png" alt="{{ sec1-title }}"></img>
              </div>
              <div class="span6">
                  <h2>{{ sec1-title }}<small><br>{{ sec1-subtitle }}</small></h2>
                  {{ sec1-desc }}
                  <!-- <p class="text-right"><a class="btn btn-jointanet-2" href="{{ url }}">詳しく読む&nbsp;<i class="icon-forward icon-white"></i></a></p> -->
              </div>
            </section>
            <hr class="featurette-divider">
            <section class="row featurette">
              <div class="span6 pull-right">
                  <img class="featurette-image illustration" src="~/assets/img/service-2-l.png" alt="{{ sec2-title }}"></img>
              </div>
              <div class="span6">
                  <h2>{{ sec2-title }}<small><br>{{ sec2-subtitle }}</small></h2>
                  {{ sec2-desc }}
                  <!-- <p class="text-right"><a class="btn btn-jointanet-2" href="{{ url }}">詳しく読む&nbsp;<i class="icon-forward icon-white"></i></a></p> -->
              </div>
            </section>
            <hr class="featurette-divider">
            <section class="row featurette">
              <div class="span6 pull-left">
                  <img class="featurette-image illustration" src="~/assets/img/service-3-l.png" alt="{{ sec3-title }}"></img>
              </div>
              <div class="span6">
                  <h2>{{ sec3-title }}<small><br>{{ sec3-subtitle }}</small></h2>
                  {{ sec3-desc }}
                  <!-- <p class="text-right"><a class="btn btn-jointanet-2" href="{{ url }}">詳しく読む&nbsp;<i class="icon-forward icon-white"></i></a></p> -->
              </div>
            </section>
            <hr class="featurette-divider">
            <section class="row featurette">
              <div class="span6 pull-right">
                  <img class="featurette-image illustration" src="~/assets/img/service-4-l.png" alt="{{ sec4-title }}"></img>
              </div>
              <div class="span6">
                  <h2>{{ sec4-title }}<small><br>{{ sec4-subtitle }}</small></h2>
                  {{ sec4-desc }}
                  <!-- <p class="text-right"><a class="btn btn-jointanet-2" href="{{ url }}">詳しく読む&nbsp;<i class="icon-forward icon-white"></i></a></p> -->
              </div>
            </section>
        </div>
    </section>
    <section id="price">
        <div class="container">
            <h1 class="text-center hidden-desktop">料金</h1>
            <section class="row featurette">
              <div class="span8 offset2">
              <!-- {{ pages:listing folder="price"}}
                  <h2>{{ title }}</h2>
                  {{ content|truncate:1214 }}
                  <p class="text-right"><a class="btn btn-jointanet-2" href="{{ url }}">料金について詳しく&nbsp;<i class="icon-forward icon-white"></i></a></p>
              {{ /pages:listing }} -->
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
    return Object.assign({}, require(`~/contents/json/index.${params.locale}.json`), { params });
  },
};

</script>

<style>
</style>
