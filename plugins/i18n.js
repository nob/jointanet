import Vue from 'vue'
import VueI18n from 'vue-i18n'

// import en from '~/locales/en.yaml'
// import ja from '~/locales/ja.yaml'

Vue.use(VueI18n)

export default ({ app, store }) => {
  console.log('inside plugin');
  console.log(store.state.locale);
  console.log('inside plugin');
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'en',
    // messages: {
    //   en, ja
    // }
  })
}
