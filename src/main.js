import Vue from 'vue'
import App from './components/App.vue'
import {store} from '../store'
import  "pixi.js";
import 'pixi-spine'
new Vue({
    store,
    render:(h)=>h(App)
}).$mount('#root')