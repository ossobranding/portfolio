<template > 
   <v-app  class="app ">
     <div class="cursor">
     </div>
    
      <landing-page></landing-page>
      <h1 style="position: sticky; top:20px; margin-left:40px; margin-top: 20px; ">OSSO</h1>
      <h1 class="custom-header about">About me</h1>
      <about-component></about-component>  

      <h1 class="custom-header skills">Knowledges</h1>
      <skills-component></skills-component> 

      <h1 class="custom-header projects"> Projects</h1>
      <projects-component></projects-component>

      <h1 class="custom-header contact">Contact</h1>
      <contact-component></contact-component>

      <footer-component></footer-component>  
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
  
  .app{
    font-family:Rubik-Regular;
    background-color: #E8E8E8 !important; 
  }

  .cursor{
    width: 30px;
    height: 30px;
    border: 3px solid #606887;
    border-radius: 50%;
    position: absolute;
    z-index: 1;
    pointer-events: none;
   
  } 

  .custom-header{
    font-family: Emberly; 
    font-size: 10vw; 
    padding: 20px; 
    text-align: center;  
    opacity: 0.8 ;
  }
</style> 

<script>

import LandingPage from './components/LandingPage.vue'
import AboutComponent from './components/AboutComponent.vue'
import SkillsComponent from './components/SkillsComponent.vue' 
import ProjectsComponent from './components/ProyectsComponent.vue'
import ContactComponent from './components/ContactComponent.vue'
import FooterComponent from './components/FooterComponent.vue'


export default {
  name: "App",

  components:{
     LandingPage,  AboutComponent, SkillsComponent, ProjectsComponent, ContactComponent, FooterComponent
  },

  data() {
    return {  
    };
  },

  methods: {  
    moveCursor(event) { 
      var cursor = document.querySelector('.cursor');
      //e.pageX & e.pageY returns the location of the cursor in the screen
      cursor.setAttribute("style", "top:" + (event.pageY - 15) +"px; left:" + (event.pageX - 15) +"px;");  
    }
  },

  mounted(){
    document.addEventListener("mousemove", this.moveCursor);
  }
};
</script>
