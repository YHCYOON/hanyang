import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8081'

// app 생성
const app = createApp(App)

// axios 전역사용
app.config.globalProperties.$axios = axios

// store 사용 설정
// router 사용 설정
// main id 가진 곳에 app 마운트
app.use(store).use(router).mount('#app')
