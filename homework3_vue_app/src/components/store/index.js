import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'

//load Vuex
Vue.use(Vuex);

export default  new Vuex.Store( {
//to handle state
state: {
    posts: []
},

//to handle state
getters: {
    allPosts: (state) => state.posts
},

//to handle actions
actions: {
    getPosts({ commit }) {
        axios.get('https://private-517bb-wad20postit.apiary-mock.com/posts')
            .then(response => {
                commit('SET_POSTS', response.data)
            })
    }
},

mutations: {
    SET_POSTS(state, posts) {
        state.posts = posts
    }
}
})
//export store module
