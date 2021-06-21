import Vue from 'vue'
import Vuex from 'vuex'

import createLogger from 'vuex/dist/logger';

import config from './app.config.js'



const files = require.context('./views', true, /store\.js$/)
const modules = {}

files.keys().forEach(key => {
  
  const item = files(key).default

  if ( item.name && item.namespaced ) {
    modules[ item.name ] = item
  }

})


Vue.use(Vuex)

export default new Vuex.Store({
  
  modules,

  state: {
  },
  getters: {
  },
  mutations: {
    
  },

  actions: {

  },

  strict: config.store.logger,
  plugins: config.store.logger ? [ createLogger() ] : []
  
  })


