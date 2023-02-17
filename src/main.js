import {createApp, defineCustomElement} from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import addComponent from '@/components/add-Component.vue'

const addEelement = defineCustomElement(addComponent)

customElements.define('my-add', addEelement)


createApp(App).use(store).use(router).mount('#app')
