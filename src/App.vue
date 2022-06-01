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

      <v-row class="mt-4">
        <v-col sm="6" lg="6" md="6" >
          <v-carousel 
            cycle
            show-arrows-on-hover
            hide-delimiter-background
            style="border-radius:5px;"
          >
            <v-carousel-item v-for="fotografia in fotografias" :key="fotografia.id" eager>
              <v-row
                class="fill-height"
                align="center"
                justify="center"
              >
                  <v-img :src= "require(`@/assets/imagenes/${fotografia.fichero}`)" eager> 
                  </v-img> 
              </v-row>
            </v-carousel-item>
          </v-carousel>
        </v-col>

        <v-col lg12 md12>
          <h2 
            style="font-size:50px;  font-weigth:bold; text-align:center"
            >
            Oscar Casado Lorenzo
          </h2>

          <h3 style="font-size:35px; color:#CCAB87; text-align:center;">
            <vue-typer
              :text='["Desarrollador FullStack", "Diseñador gráfico"]'
              :repeat='Infinity'
              :shuffle='false'
              initial-action='typing'
              :pre-type-delay='70'
              :type-delay='70'
              :pre-erase-delay='5000'
              :erase-delay='250'
              erase-style='select-all'
              :erase-on-complete='false'
              caret-animation='blink'
 
            ></vue-typer>
          </h3>
 
         
          <h4 class="mt-3"  style='font-family:"Rubik-Light";font-size:20px; color:grey; text-align:justify;'>  
            La idea de OSSO surge de un chico de 21 años que tras dedicar toda su vida a los estudios decide dar con 
            la fórmula que convierta toda su energía, aprendizaje y aficiones en la mejor versión de sí mismo como profesional.
          </h4>

          <v-row style="justify-content:center;" class="mt-5">
            <v-btn class="pa-5" style="background-color:#00E0E0">
              <v-icon > mdi-file-document-outline </v-icon> 
              <a  style="text-decoration:none;color:black;" class="ml-2"
                 :href=  " '/files/CV.pdf' "  download = "CV.pdf"
              >
                  VER CURRICULUM
              </a>
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
      
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
import {VueTyper} from 'vue-typer'
import SkillsComponent from './components/SkillsComponent.vue'
import ProjectsComponent from './components/ProyectsComponent.vue'

export default {
  name: "App",

  components:{
    VueTyper, SkillsComponent, ProjectsComponent 
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

      fotografias:[ 
        {
          id:'1',
          fichero: '1.jpg'
        },
        {
          id:'2',
          fichero: '2.jpg'
        },
        {
          id:'3',
          fichero: '3.jpg'
        },
        {
          id:'4',
          fichero: '4.jpeg'
        },
        {
          id:'5',
          fichero: '5.jpeg'
        },
        {
          id:'6',
          fichero: '6.jpeg'
        },
        {
          id:'7',
          fichero: '7.jpeg'
        }
      ]
    };
  },
};
</script>
