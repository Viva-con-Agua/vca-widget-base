import VcABox from './components/VcABox.vue'
import VcAColumn from './components/VcAColumn.vue'
import VcAFrame from './components/VcAFrame.vue'
import VcAInfoBox from './components/VcAInfoBox.vue'
import VcAFilterTag from './components/VcAFilterTag.vue'
import VueI18n from 'vue-i18n'
import en from './lang/en.json'
import de from './lang/de.json'

function getLang (Vue, options) {
  function exists (options) {
    return (typeof options !== 'undefined') && options.hasOwnProperty('i18n') && (typeof options.i18n !== 'undefined') && options.i18n !== null
  }

  if (!exists(options)) {
    Vue.use(VueI18n)

    const i18n = new VueI18n({
      locale: 'de-DE',
      fallbackLocale: 'en-US',
      messages: { 'en-US': en, 'de-DE': de }
    })

    Vue.prototype.$vcaI18n = i18n
  } else {
    options.i18n.mergeLocaleMessage('de-DE', de)
    options.i18n.mergeLocaleMessage('en-US', en)
    Vue.prototype.$vcaI18n = options.i18n
  }
  return Vue
}

VcABox.install = function (Vue, options) {
  Vue = getLang(Vue, options)
  Vue.component('vca-box', VcABox)
}

VcAColumn.install = function (Vue, options) {
  Vue = getLang(Vue, options)
  Vue.component('vca-column', VcAColumn)
}

VcAFrame.install = function (Vue, options) {
  Vue = getLang(Vue, options)
  Vue.component('vca-frame', VcAFrame)
}

VcAInfoBox.install = function (Vue, options) {
  Vue = getLang(Vue, options)
  Vue.component('vca-info-box', VcAInfoBox)
}

VcAFilterTag.install = function (Vue, options) {
  Vue = getLang(Vue, options)
  Vue.component('vca-filter-tag', VcAFilterTag)
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VcABox)
  window.Vue.use(VcAColumn)
  window.Vue.use(VcAFrame)
  window.Vue.use(VcAInfoBox)
  window.Vue.use(VcAFilterTag)
}

export default VcAFrame
const version = '__VERSION__'
// Export all components too
export {
  VcABox,
  VcAColumn,
  VcAFrame,
  VcAInfoBox,
  VcAFilterTag,
  version
}
