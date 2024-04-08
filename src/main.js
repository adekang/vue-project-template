import { createApp } from 'vue'
import './main.css'
import 'normalize.css'
import App from './App.vue'
import router from './routers/index.js'
import pinia from '@/stores/index.js'

const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')
