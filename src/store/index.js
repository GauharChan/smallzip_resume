//  引入vue及vuex
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count:1
}

const mutations = {
    ADD(state,val) {
        state.count = val
    }
}

const actions = {
  add({commit},val) {
      commit('ADD',val)
  }
}

const getters = {
  /*
      Vuex 允许我们在 store 中定义『getters』
      （可以认为是 store 的计算属性）。
      就像计算属性一样，getters的返回值会根据它的依赖被缓存起来，
      且只有当它的依赖值发生了改变才会被重新计算。
      所以这里的计算放到了需要计算值的组件的cumputer里面
      例如:fontSize每次触发会在mutation中计算,
           而getters就把最后算好的值放到了组件中显示

      Getters 接受 state 作为其第一个参数
      （这是es6语法 ↓）
      state => state.notes为箭头函数等价于：
      function (state){
          return state.notes 
      }
  */
  count: state => state.count,

}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
