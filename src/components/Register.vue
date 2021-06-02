<template>
    <div class="container">
    <div class="card bg-light">
    <article class="card-body mx-auto" style="max-width: 400px;">
      <h4 class="card-title mt-3 text-center">Create Account</h4>
        <form @submit.prevent="register">
          <div class="form-group input-group">
                <input name="" class="form-control" placeholder="Name" type="text" v-model="name" required>
          </div> <!-- form-group// -->
          <div class="form-group input-group">
            <select class="form-select" style="max-width: 400px;" v-model="gender">
               <option value="" disabled selected>Gender</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
            </select>
          </div> <!-- form-group// -->
          <div class="form-group input-group">
                <input name="" class="form-control" placeholder="Birth date" type="date" v-model="birth">
          </div> <!-- form-group// -->
          <div class="form-group input-group">
                <input name="" class="form-control" placeholder="Email address" type="email" required v-model="email"> 
          </div> <!-- form-group// -->
          <div class="form-group input-group">
                <input class="form-control" placeholder="Create password" type="password" v-model="password" required>
          </div> <!-- form-group// -->
          <div class="form-group input-group">
                <input class="form-control" placeholder="Repeat password" type="password" v-model="password_confirmation" required>
          </div> <!-- form-group// -->            
          <br>                          
          <div class="form-group">
                <button type="submit" class="btn btn-primary btn-block"> Create Account  </button>
          </div> <!-- form-group// -->      
            <p class="text-center">Have an account? <router-link class="navbar-brand" to="/login">Log in</router-link> </p>                                                                 
        </form>
        </article>
    </div> <!-- card.// -->
</div>
</template>

<script>
  export default {
    data(){
      return {
        name : "",
        email : "",
        birth:"",
        gender:"",
        password : "",
        password_confirmation : "",
        is_admin : null
      }
    },
     methods: {
      register: function () {
        let data = {
          name: this.name,
          birth:this.birth,
          gender:this.gender,
          email: this.email,
          password: this.password
        };
        this.$store.dispatch('register', data)
       .then(() => this.$router.push('/'))
       .catch(err => console.log(err))
      }
    }
  }
  </script>