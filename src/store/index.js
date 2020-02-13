import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // state: {
  //   //url: 'http://localhost:3000'  
  //  url: 'https://nuevaluz-backend-pg.herokuapp.com'
  // },
  getters:{
    enviar(){
      return true
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
