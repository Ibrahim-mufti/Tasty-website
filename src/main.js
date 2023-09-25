import './assets/style.css'
import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'

import { fab } from "@fortawesome/free-brands-svg-icons"

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import router from "./router"

library.add(fas, fab)

import { createApp } from 'vue'

import App from './App.vue'

createApp(App)
.use(router)
.component("fa", FontAwesomeIcon)
.mount('#app')
