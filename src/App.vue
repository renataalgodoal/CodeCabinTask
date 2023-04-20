<template>
  <!-- <LoginScreen v-show="false"></LoginScreen> -->
  <div class="pages">
    <router-view></router-view>
  </div> 
</template>

<script>
//import LoginScreen from './components/loginScreen.vue'
//import SideMenu from './components/sideMenu.vue'
// import PulseSurvey from './components//pulseSurvey.vue'
//import UserDetails from './components/userDetails.vue'


export default {
  name: 'App',
  components: {
    //LoginScreen,
    //SideMenu,
    //PulseSurvey,
    //UserDetails
  }
}

</script>

<style>
   @font-face {
    font-family: 'Outfit';
    src: url('~@/assets/fonts/Outfit-VariableFont_wght.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  .pages {
    display: flex;
    flex-direction: row;
  }

  .menu{
    width: 250px;
  }

  .header-body-footer {
    width: calc(100% - 250px);
  }
</style>