<template>
  <div class="content">
    <div class="login">
      <v-form class="auth-form" v-model="valid" @submit.prevent="login">
        <div class="title"></div>
        <v-img :width="128" aspect-ratio="16/9" cover src="../assets/images/logo.png"></v-img>
        <div class="subtitle">Sign in to your account</div>
        <v-text-field class="auth-form-input" v-model="email" label="Email" type="email" :rules="emailRules" required></v-text-field>
        <v-text-field
          class="auth-form-input"
          v-model="password"
          label="Password"
          :type="showPassword ? 'text' : 'password'"
          :rules="passwordRules"
          required
        >
          <template v-slot:append-inner>
            <v-icon @click="showPassword = !showPassword" :color="showPassword ? 'primary' : ''">
              {{ showPassword ? 'mdi-eye-off' : 'mdi-eye' }}
            </v-icon>
          </template>
        </v-text-field>
        <v-btn class="submit-btn" type="submit" :disabled="!valid" text-color="white">Login</v-btn>
      </v-form>
    </div>
    <div class="login-img"><v-img height="100vh" aspect-ratio="16/9" cover src="../assets/images/loginImage.png"></v-img></div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'LoginScreen',

  data: () => ({
    password: '',
    showPassword: false,
    valid: false,
    email: '',
    emailRules: [
      value => {
        if (value) return true

        return 'E-mail is required.'
      },
      value => {
        if (/.+@.+\..+/.test(value)) return true

        return 'E-mail must be valid.'
      }
    ],
    passwordRules: [
      value => {
        if (value) return true

        return 'Password is required'

      }
    ]
  }),

  methods: {
    async login() {
  try {
    const response = await axios.get('http://localhost:3000/accounts', {
      params: {
        email: this.email,
        password: this.password
      }
    })

    if (response.data === null) {
      console.log('Invalid email or password')
    } else if (response.data.userEmail === this.email && response.data.userPassword === this.password) {
      console.log('Authentication successful!')
       localStorage.setItem('user', JSON.stringify({ isAuthenticated: true }));
       window.history.pushState({}, null, '/pulse');

      // load the new page
      window.location.reload();
    } else {
      console.log('Invalid email or password')
    }
  } catch (error) {
    console.error(error)
  }
}
  }
}
</script>
  <style>
   
  .content {
    display: flex;
    width: 100vw;
    height: 100vh;
    align-items: center;
    flex-direction: row;
    font-family: 'Outfit';
    font-style: normal;
    color: #4B5563;
  }
  
  .login, .login-img {
    display: flex;
    align-items: center;
    width: 50vw;
    height: 100vh;
  }
  
  .auth-form{
    width: 100%;
    padding: 5rem;
  }
  
  .title, .subtitle {
    margin: 20px 0;
  }
  
  .subtitle {
    font-weight: 700;
    font-size: 25px;
  }
  
  .auth-form-input {
    height: auto; 
  }
  
  .submit-btn{
    width: 100%;
    text-decoration: none;
    box-shadow: none;
    background: #1A202C!important;
    color: white!important;;
    font-size: 16px;
    text-transform: capitalize;
    font-weight: 400;
  }
  
  </style>