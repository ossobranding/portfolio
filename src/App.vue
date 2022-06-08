<template > 
   <v-app style="font-family:Rubik-Regular">
    
    <v-container>
       <h1 
          class="osso"
          style="line-height:100px; height:110px;width:100% ;font-size:100px;  font-weigth:bold; text-align:center;"  
          >
          osso
        </h1>

      <v-row justify="center" class="ma-1">
 
          <v-btn v-on:click="scrollToElement({behavior: 'smooth'} , 'about')"
                text style="border: none"> SOBRE MI </v-btn>

          <v-btn v-on:click="scrollToElement({behavior: 'smooth'} , 'proyects')"
                text style="border: none"> PROYECTOS </v-btn>

          <v-btn v-on:click="scrollToElement({behavior: 'smooth'} , 'knowledges')"
                text style="border: none"> CONOCIMIENTOS </v-btn>

          <v-btn v-on:click="scrollToElement({behavior: 'smooth'} , 'skills')" 
                text style="border: none"> HABILIDADES </v-btn>

          <v-btn v-on:click="scrollToElement({behavior: 'smooth'} , 'contact')"
                text style="border: none"> CONTACTO </v-btn>
 
      </v-row>

      <v-divider></v-divider>

      <h3  class="mt-4 about" style='font-family:"Emberly"; font-size:35px; text-align:center'>
        Sobre mi
      </h3>

      <about-component ></about-component>
      
      <!--

      
      <h3 class="mt-4 proyects" style='font-family:"Emberly"; font-size:35px; text-align:center'>
        Proyectos
      </h3>

      <projects-component ></projects-component>
      
      <h3 class="mt-4 knowledges" style='font-family:"Emberly"; font-size:35px; text-align:center'>
        Conocimientos
      </h3>
      
       
      <v-img  :src= "require(`@/assets/illustrations/Inspiration.jpg`)" eager ></v-img>
      <v-img  :src= "require(`@/assets/illustrations/Logotypes.jpg`)" eager ></v-img>
      <v-img  :src= "require(`@/assets/illustrations/Weare.jpg`)" eager ></v-img>
     
      

      <h3 class="mt-4 skills" style='font-family:"Emberly"; font-size:35px; text-align:center'>
        Habilidades
      </h3>  

      <skills-component ></skills-component>
 
 
      <h3 class="mt-4 contact" style='font-family:"Emberly"; font-size:35px; text-align:center'>
        Contacto
      </h3>  

      <v-row justify="center" class="mt-4">
        <v-form>
          <v-text-field outlined single-line label="Correo electrónico" placeholder="jhon@gmail.com"></v-text-field>
          <v-text-field outlined single-line label="Asunto" ></v-text-field>
          <v-text-field outlined single-line label="Escribe aquí tu mensaje"></v-text-field>
          <v-btn>Enviar</v-btn>
        </v-form>
      </v-row>
      -->
    </v-container>

    
   
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
      rrss:[
        {
          titulo: 'Linkedin',
          icono: 'mdi-linkedin',
          url: 'https://es.linkedin.com/in/oscarcasadolorenzo'
        },
        {
          titulo: 'Instagram',
          icono: 'mdi-instagram',
          url: 'https://www.instagram.com/osso.branding/'
        },
        {
          titulo: 'Email',
          icono: 'mdi-gmail',
          url: 'oscarcl.work@gmail.com'
        } 
      ],

      
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
