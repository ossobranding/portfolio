<template > 
   <v-app >
     <div class="cursor">
     </div>
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

  .cursor{
    width: 20px;
    height: 20px;
    border: 1px solid black;
    border-radius: 50%;
    position: absolute;
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
    moveCursor(event) { 
      var cursor = document.querySelector('.cursor');
      //e.pageX & e.pageY returns the location of the cursor in the screen
      cursor.setAttribute("style", "top:" + (event.pageY - 10) +"px; left:" + (event.pageX - 10) +"px;");  
    } 
  },

  mounted(){
    document.addEventListener("mousemove", this.moveCursor);
  }
};
</script>
