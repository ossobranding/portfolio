<template > 
   <v-app style="font-family:Rubik-Regular">
    
    <v-container>
       <h1 
          style="line-height:100px; height:110px;width:100% ;font-size:100px;  font-weigth:bold; text-align:center;"  
          >
          osso
        </h1>

      <v-row justify="center" class="ma-1">
 
          <v-btn text style="border: none"> SOBRE MI </v-btn>

          <v-btn text style="border: none"> PROYECTOS </v-btn>

          <v-btn text style="border: none"> CONOCIMIENTOS </v-btn>

          <v-btn text style="border: none"> HABILIDADES </v-btn>

          <v-btn text style="border: none"> CONTACTO </v-btn>
 
      </v-row>

      <v-divider></v-divider>

      <h3 class="mt-4" style='font-family:"Emberly"; font-size:35px; text-align:center'>
        Sobre mi
      </h3>

      <about-component></about-component>
      
      <h3 class="mt-4" style='font-family:"Emberly"; font-size:35px; text-align:center'>
        Proyectos
      </h3>

      <projects-component></projects-component>
      
      <h3 class="mt-4" style='font-family:"Emberly"; font-size:35px; text-align:center'>
        Conocimientos
      </h3>

      

      <h3 class="mt-4" style='font-family:"Emberly"; font-size:35px; text-align:center'>
        Habilidades
      </h3>  

      <skills-component></skills-component>
 
 
      <h3 class="mt-4" style='font-family:"Emberly"; font-size:35px; text-align:center'>
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
    </v-container>

    <v-footer width="100%" style="justify-content:center; color:grey;" class="mt-4">
      <v-row  style="width:100%; justify-content:center; "  class="pa-5 ">
        <a class="px-3" style="color:grey">Sobre mi</a>
        <a class="px-3" style="color:grey">Proyectos</a>
        <a class="px-3" style="color:grey"> Conocimientos</a>
        <a class="px-3" style="color:grey">Habilidades</a>
        <a class="px-3" style="color:grey">Contacto</a>
      </v-row>

      <v-btn icon v-for="red in rrss" :key="red.titulo"  
        :href= red.url target="_blank"  >
          <v-icon color="grey"> {{red.icono}}</v-icon>
      </v-btn>

      <h4 style="text-align:center; width:100%"  class="pa-2">
        © OSSO. Todos los derechos reservados.
      </h4>
   </v-footer>
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

import SkillsComponent from './components/SkillsComponent.vue'
import ProjectsComponent from './components/ProyectsComponent.vue'
import AboutComponent from './components/AboutComponent.vue'

export default {
  name: "App",

  components:{
    AboutComponent, SkillsComponent, ProjectsComponent 
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
};
</script>
