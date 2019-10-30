import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex);
var store = new Vuex.Store({
   state:{
       aaa:'Hello'
   }
})
export {
    store
}