import { createApp } from 'vue'
import 'normalize.css'
import './style.scss'
import App from './App.vue'
import router from './routers/index.js'
import pinia from '@/stores/index.js'

const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')
