<template>
<v-container fluid class="fill-height pa-0">
  <v-row class="fill-height">
    <v-col  xl="9" lg="7" md="7" sm="12"  id="loginimg" :class="isMobile">
    </v-col>
    <v-col xl="3" lg="5" md="5" sm="12" >
      <loginForm/> 
    </v-col>
  </v-row>
</v-container>
</template>

<script>
  import loginForm from '@/components/login/loginForm'
  export default {
    name: 'Login',
    components:{
      loginForm
    },
    computed:{
      isMobile(){
        if(this.$vuetify.breakpoint.name== 'sm' || this.$vuetify.breakpoint.name== 'xs' ){
          return 'mobile'
        }else{
          return ''
        }
      }
    }
  }
</script>

<style scoped>
  #loginimg{
    background-image: url('../assets/images/login3.jpg');
    background-repeat: no-repeat;
    background-position: right;
    background-size: 100% 93%;
  }

  .mobile{
    display: none;
  }
</style>
