<template > 
   <v-app  >
    
     <v-main id="main">
       <landing-page></landing-page>
     </v-main>

    
   
  </v-app>
</template>

<style>
 
  @font-face {
    font-family: "Emberly";
    src: local("Emberly"), 
          url(./fonts/Emberly-ExtraBoldItalic.ttf) format("truetype");        
  }
  @font-face {
    font-family: "Rubik-Regular"; 
    src: local("Rubik-Regular"), 
          url(./fonts/Rubik-Regular.ttf) format("truetype");        
  }
  @font-face {
    font-family: "Rubik-Light"; 
    src: local("Rubik-Light"), 
          url(./fonts/Rubik-Light.ttf) format("truetype");        
  } 
</style> 

<script>

/*
import SkillsComponent from './components/SkillsComponent.vue'

import ProjectsComponent from './components/ProyectsComponent.vue'

import AboutComponent from './components/AboutComponent.vue'
*/
import LandingPage from './components/LandingPage.vue'


export default {
  name: "App",

  components:{
     LandingPage
  },

  data() {
    return {  
    };
  },

  methods: { 
  }
};
</script>
