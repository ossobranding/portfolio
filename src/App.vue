<template > 
   <v-app >
     <div class="cursor">
     </div>
     <v-main id="main">
       <landing-page></landing-page>
      
       <skills-component></skills-component> 
       <projects-component></projects-component>
       <footer-component></footer-component>
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
    width: 30px;
    height: 30px;
    border: 1px solid #606887;
    border-radius: 50%;
    position: absolute;
   
  } 
</style> 

<script>

import LandingPage from './components/LandingPage.vue'
 
import SkillsComponent from './components/SkillsComponent.vue' 
import ProjectsComponent from './components/ProyectsComponent.vue'
import FooterComponent from './components/FooterComponent.vue'


export default {
  name: "App",

  components:{
     LandingPage,  SkillsComponent, ProjectsComponent, FooterComponent
  },

  data() {
    return {  
    };
  },

  methods: {  
    moveCursor(event) { 
      var cursor = document.querySelector('.cursor');
      //e.pageX & e.pageY returns the location of the cursor in the screen
      cursor.setAttribute("style", "top:" + (event.pageY - 12) +"px; left:" + (event.pageX - 12) +"px;");  
    } 
  },

  mounted(){
    document.addEventListener("mousemove", this.moveCursor);
  }
};
</script>
