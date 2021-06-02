import Vue from "vue";
import VueRouter from "vue-router";
import store from '../store/index.js'
import Home from "../views/Home.vue";
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import CommentsTable from "../components/CommentsTable.vue"
import Add from '../views/Add.vue'
import AddComment from '../views/AddComment.vue'
import Edit from '../views/Edit.vue'
import Delete from '../views/Delete.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/add',
    name: 'Add',
    component: Add,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/edit',
    name: 'Edit',
    component: Edit,
    props: true,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/delete',
    name: 'Delete',
    component: Delete,
    props: true,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/comments',
    name: 'Comments',
    component: CommentsTable,
    props: true,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/addComment',
    name: 'AddComment',
    component: AddComment,
    props: true,
    meta: {
      requiresAuth: true,
    },
  }
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

export default router;
