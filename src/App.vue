<template > 
   <v-app style="font-family:Rubik-Regular">
    
     

    
   
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

export default {
  name: "App",

  components:{
    //AboutComponent, SkillsComponent, ProjectsComponent 
  },

  data() {
    return {  
    };
  },

  methods: {
  scrollToElement(options, focus) {
    const el = this.$el.getElementsByClassName(focus)[0];
    
    if (el) {
      el.scrollIntoView(options);
    }
  },
   
  }
};
</script>
