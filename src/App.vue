<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
            <div class="container px-4 px-lg-5">
                <router-link class="navbar-brand" to="/login"><img src="./assets/logo.png" width="90%" height="90%"/></router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto py-4 py-lg-0">
                        <li class="nav-item"><router-link class="nav-link px-lg-3 py-3 py-lg-4" to="/">Home</router-link></li>
                        <li class="nav-item"><router-link class="nav-link px-lg-3 py-3 py-lg-4" to="/about">About</router-link></li>
                        <li class="nav-item"><router-link class="nav-link px-lg-3 py-3 py-lg-4" to="/register">Register</router-link></li>
                        <li class="nav-item"><span v-if="isLoggedIn"><a class="nav-link px-lg-3 py-3 py-lg-4" @click="logout" href="">Logout</a></span></li>
                    </ul>
                </div>
            </div>
        </nav>
    <router-view/>
  </div>
</template>

<script>
  export default {
    computed : {
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
    },
    methods: {
      logout: function () {
        this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/login')
        })
      }
    },
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
