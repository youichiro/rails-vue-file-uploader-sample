import axios from "axios";

const apiUrlBase = "http://localhost:3000/api/posts";
const headers = {
  "Content-Type": "multipart/form-data"
};

const state = {
  posts: []
};

const getters = {
  posts: state => state.posts
};

const mutations = {
  setPosts: (state, posts) => (state.posts = posts),
  appendPost: (state, post) => (state.posts = [...state.posts, post])
};

const actions = {
  async fetchPosts({ commit }) {
    try {
      const response = await axios.get(`${apiUrlBase}`);
      commit("setPosts", response.data);
    } catch (e) {
      console.error(e);
    }
  },
  async createPost({ commit }, post) {
    try {
      const response = await axios.post(`${apiUrlBase}`, post, headers);
      commit("appendPost", response.data);
      return response.data;
    } catch (e) {
      console.error(e);
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
