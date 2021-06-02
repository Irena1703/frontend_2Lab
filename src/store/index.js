import Vue from "vue";
import Vuex from "vuex";
import User from "@/model/User.js";
import Article from "../model/Article";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: new Map(),
    loggedIn: false,
    Articles: [],
  },
  mutations: {
    register: (state, user) => {
      if (state.users.has(user.email)) {
        alert("User with such email already registered");
        return;
      }
      let userToAdd = new User(
        user.name,
        user.email,
        user.password,
        user.gender,
        user.birth
      );
      state.users.set(userToAdd.email, userToAdd);
    },
    login: (state, user) => {
      if (
        state.users.has(user.email) &&
        state.users.get(user.email).password == btoa(user.password)
      )
        state.loggedIn = true;
      else {
        alert("No such user registered");
      }
    },
    logout: (state) => {
      state.loggedIn = false;
    },
    add: (state, articleData) => {
      let article = new Article(articleData.title, articleData.text);
      state.Articles.push(article);
    },
    addComment: (state, commentData) => {
      let article = state.Articles.pop((a) => a.id == commentData.article.id);
      article.AddComment(commentData.text);
      state.Articles.push(article);
    },
    delete: (state, id) => {
      let index = state.Articles.findIndex((el) => el.id == id);
      state.Articles.splice(index, 1);
    },
    edit: (state, newArticle) => {
      let article = state.Articles.pop((el) => el.id == newArticle.id);
      article.ChangeText(newArticle.text);
      article.ChangeDescription(newArticle.title);
      state.Articles.push(article);
    },
  },
  actions: {
    login: (context, user) => {
      context.commit("login", user);
    },
    register: (context, user) => {
      context.commit("register", user);
    },
    logout: (context) => {
      context.commit("logout");
    },
    add: (context, articleData) => {
      context.commit("add", articleData);
    },
    addComment: (context, commentData) => {
      context.commit("addComment", commentData);
    },
    delete: (context, id) => {
      context.commit("delete", id);
    },
    edit: (context, article) => {
      context.commit("edit", article);
    },
  },
  getters: {
    isLoggedIn: (state) => state.loggedIn,
  },
  modules: {},
});
