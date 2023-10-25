import './assets/main.css'

import 'element-plus/dist/index.css';
import ElementPlus from 'element-plus';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


const pinia=createPinia();

pinia.use(piniaPluginPersistedstate)

const app = createApp(App)

app.use(ElementPlus)
app.use(pinia)
app.use(router)


// currencey change globally

app.config.globalProperties.$filters={
    currencySymbol(value){
        return "$ " + value.toLocaleString()
    },

}




app.mount('#app')