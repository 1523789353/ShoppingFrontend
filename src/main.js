import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'

// 引入jQuery、bootstrap
import 'jquery'
import 'bootstrap'

// 引入bootstrap样式
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

(
    createApp(App)
    .use(ElementPlus, { size: 'small', zIndex: 3000 })
    .use(router)
    .mount('#app')
)