import Vue from 'vue'
import App from './components/App.vue'
import { Button } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css'
Vue.use(Button);
new Vue({
    render:(h)=>h(App)
}).$mount('#root')