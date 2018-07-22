import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'

import '../assets/css/bootstrap.css'

import '../assets/css/bootstrap-responsive.css'

import '../assets/css/main.css'


let layouts = {

  "_default": () => import('../layouts/default.vue'  /* webpackChunkName: "layouts/default" */).then(m => m.default || m)

}

let resolvedLayouts = {}

export default {
  head: {"title":"nuxt-test-1","meta":[{"charset":"utf-8"},{"http-equiv":"X-UA-Compatible","content":"IE=edge,chrome=1"},{"name":"viewport","content":"width=device-width, initial-scale=1, maximum-scale=1"},{"hid":"description","name":"description","content":"Nuxt.js project"}],"htmlAttrs":{"lang":"ja","class":"no-js"},"bodyAttrs":{"data-spy":"scroll","data-target":"#site-header","data-offset":"200"},"script":[{"src":"https:\u002F\u002Fajax.googleapis.com\u002Fajax\u002Flibs\u002Fjquery\u002F1.9.1\u002Fjquery.min.js"},{"src":"\u002Fmodernizr-2.6.2-respond-1.1.0.min.js"}],"link":[{"rel":"stylesheet","href":"http:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Open+Sans:400,400italic,700,700italic"},{"rel":"shortcut icon","type":"image\u002Fx-icon","href":"\u002Fassets\u002Fimg\u002Ffavicon.ico"},{"rel":"apple-touch-icon","href":"\u002Fassets\u002Fimg\u002Fapple-touch-icon-57x57.png"},{"rel":"apple-touch-icon","sizes":"72x72","href":"\u002Fassets\u002Fimg\u002Fapple-touch-icon-72x72.png"},{"rel":"apple-touch-icon","sizes":"114x114","href":"\u002Fassets\u002Fimg\u002Fapple-touch-icon-114x114.png"},{"rel":"apple-touch-icon","sizes":"144x144","href":"\u002Fassets\u002Fimg\u002Fapple-touch-icon-144x144.png"}],"style":[]},
  render(h, props) {
    const loadingEl = h('nuxt-loading', { ref: 'loading' })
    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      }
    }, [ templateEl ])

    return h('div',{
      domProps: {
        id: '__nuxt'
      }
    }, [
      loadingEl,
      transitionEl
    ])
  },
  data: () => ({
    layout: null,
    layoutName: ''
  }),
  beforeCreate () {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created () {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },
  
  mounted () {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  
  methods: {
    
    errorChanged () {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },
    
    setLayout (layout) {
      if (!layout || !resolvedLayouts['_' + layout]) layout = 'default'
      this.layoutName = layout
      let _layout = '_' + layout
      this.layout = resolvedLayouts[_layout]
      return this.layout
    },
    loadLayout (layout) {
      if (!layout || !(layouts['_' + layout] || resolvedLayouts['_' + layout])) layout = 'default'
      let _layout = '_' + layout
      if (resolvedLayouts[_layout]) {
        return Promise.resolve(resolvedLayouts[_layout])
      }
      return layouts[_layout]()
      .then((Component) => {
        resolvedLayouts[_layout] = Component
        delete layouts[_layout]
        return resolvedLayouts[_layout]
      })
      .catch((e) => {
        if (this.$nuxt) {
          return this.$nuxt.error({ statusCode: 500, message: e.message })
        }
      })
    }
  },
  components: {
    NuxtLoading
  }
}

