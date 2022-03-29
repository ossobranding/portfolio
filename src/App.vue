<template > 
   <v-app style="font-family:Rubik-Regular">
    
    <v-container>
       <h1 
          style="line-height:100px; height:110px;width:100% ;font-size:100px;  font-weigth:bold; text-align:center;"  
          >
          osso
        </h1>

      <v-row justify="center" class="ma-1">
        <v-btn-toggle  >
          <v-btn text style="border: none"> SOBRE MI </v-btn>

          <v-btn text style="border: none"> PROYECTOS </v-btn>

          <v-btn text style="border: none"> CONOCIMIENTOS </v-btn>

          <v-btn text style="border: none"> SKILLS </v-btn>

          <v-btn text style="border: none"> CONTACTO </v-btn>
        </v-btn-toggle>
      </v-row>

      <v-divider></v-divider>

      <h3 class="mt-4" style='font-family:"Emberly"; font-size:35px; text-align:center'>
        Sobre mi
      </h3>

      <v-row class="mt-4">
        <v-col sm="6" lg="6" md="6">
          <v-carousel 
            cycle
            show-arrows-on-hover
            hide-delimiter-background
          >
            <v-carousel-item v-for="fotografia in fotografias" :key="fotografia.id" >
              <v-row
                class="fill-height"
                align="center"
                justify="center"
              >
                  <v-img :src= "require(`@/assets/imagenes/${fotografia.fichero}`)"> 
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
              :pre-erase-delay='2000'
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
              <v-icon > mdi-page</v-icon> 
              <a  
                :href=  "`${BASE_URL}its_me.pdf`"   download 
              >
                  Descargar CV
              </a>
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
      
      <h3 class="mt-4" style='font-family:"Emberly"; font-size:35px; text-align:center'>
        Proyectos
      </h3>

      <v-row class="mt-4">
        <v-col  
          style="height: 276px; width:276px; min-height:276px; min-width:276px;">
          
          <v-card 
            class="fill-height d-flex flex-column" 
            style="background-color:#CCAB87;">  
            <v-spacer></v-spacer>
            <v-card-actions >
              <v-btn icon right> 
                <v-icon>mdi-github</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col 
          class="pb-0" 
          style="height: 276px; width:276px; min-height:276px; min-width:276px;">

          <v-row style="height: 50%">
            <v-col class="ma-0">
              <v-card 
                class="fill-height d-flex flex-column"
                style="background-color:#00E0E0"> 
                <v-spacer></v-spacer>
                <v-card-actions >
                  <v-btn icon right> 
                    <v-icon>mdi-github</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>

          <v-row style="height: 50%; margin-top: 12px">
            <v-col class="ma-0 pb-0 ">
              <v-card 
                class="fill-height  d-flex flex-column"
                style="background-color:#E8E8E8;">   
                <v-spacer></v-spacer>
                <v-card-actions >
                  <v-btn icon right> 
                    <v-icon>mdi-github</v-icon>
                  </v-btn>
                </v-card-actions>  
              </v-card>
            </v-col>

            <v-col class="ma-0 pb-0">
              <v-card 
                class="fill-height  d-flex flex-column"
                style="background-color:#E8E8E8;">   
                <v-spacer></v-spacer>
                <v-card-actions >
                  <v-btn icon right> 
                    <v-icon>mdi-github</v-icon>
                  </v-btn>
                </v-card-actions>  
              </v-card>
            </v-col>
          </v-row>
        </v-col>

        <v-col  
          style="height: 276px; width:276px; min-height:276px; min-width:276px;">
          
          <v-card 
            class="fill-height d-flex flex-column" 
            style="background-color:#CCAB87;">  
            <v-spacer></v-spacer>
            <v-card-actions >
              <v-btn icon right> 
                <v-icon>mdi-github</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col 
          class="pb-0" 
          style="height: 276px; width:276px; min-height:276px; min-width:276px;">

          <v-row style="height: 50%">
            <v-col class="ma-0">
              <v-card 
                class="fill-height d-flex flex-column"
                style="background-color:#00E0E0"> 
                <v-spacer></v-spacer>
                <v-card-actions >
                  <v-btn icon right> 
                    <v-icon>mdi-github</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>

          <v-row style="height: 50%; margin-top: 12px">
            <v-col class="ma-0 pb-0 ">
              <v-card 
                class="fill-height  d-flex flex-column"
                style="background-color:#E8E8E8;">   
                <v-spacer></v-spacer>
                <v-card-actions >
                  <v-btn icon right> 
                    <v-icon>mdi-github</v-icon>
                  </v-btn>
                </v-card-actions>  
              </v-card>
            </v-col>

            <v-col class="ma-0 pb-0">
              <v-card 
                class="fill-height  d-flex flex-column"
                style="background-color:#E8E8E8;">   
                <v-spacer></v-spacer>
                <v-card-actions >
                  <v-btn icon right> 
                    <v-icon>mdi-github</v-icon>
                  </v-btn>
                </v-card-actions>  
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <h3 class="mt-4" style='font-family:"Emberly"; font-size:35px; text-align:center'>
        Conocimientos
      </h3>

      <!--FRONTEND-->
      <v-row justify="center" class="mt-4">
        <v-col 
          v-for="skill in skillsFRONT" :key="skill.titulo"
          cols="1" 
          align-self="center"  
          style="min-width:75px;">
          <v-img
            class="mx-auto"
            width="75%"
            contain
            aspect-ratio="1"
            :src= "require(`@/assets/logos/${skill.fichero}`)"  
          ></v-img>
          <h5 class="mt-1" style="wdth:100%;text-align:center;">{{skill.titulo}}</h5>
        </v-col> 
      </v-row>

      <!--BACKEND-->
      <v-row justify="center" >
        <v-col 
          v-for="skill in skillsBACK" :key="skill.titulo"
          cols="1" 
          align-self="center"  
          style="min-width:75px;">
          <v-img
            class="mx-auto"
            width="75%"
            contain
            aspect-ratio="1"
            :src= "require(`@/assets/logos/${skill.fichero}`)"  
          ></v-img>
          <h5 class="mt-1" style="wdth:100%;text-align:center;">{{skill.titulo}}</h5>
        </v-col> 
      </v-row>

      <h3 class="mt-4" style='font-family:"Emberly"; font-size:35px; text-align:center'>
        Skills
      </h3>  

      <h3 class="mt-4" style='font-family:"Emberly"; font-size:35px; text-align:center'>
        Contacto
      </h3>  
      
    </v-container>

    <v-footer width="100%" style="justify-content:center;" class="mt-4">
      <h4 style="text-align:center; width:100%">
        OSSO
      </h4>
 
      <v-btn icon v-for="red in rrss" :key="red.titulo"  
        :href= red.url target="_blank"
        >
          <v-icon > {{red.icono}}</v-icon>
      </v-btn>
 
 
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


export default {
  name: "App",

  components:{
    VueTyper
  },

  data() {
    return {
      BASE_URL: process.env.BASE_URL,

      skillsFRONT:[
        {
          titulo: 'HTML5',
          fichero:  'html5.svg'
        },
        {
          titulo: 'CSS3',
          fichero:  'css3.svg'
        },
        {
          titulo: 'JavaScript',
          fichero:  'javascript.svg'
        },
        {
          titulo: 'Laravel',
          fichero:  'laravel.svg'
        },
        {
          titulo: 'Vue',
          fichero:  'vuejs.svg'
        },
        {
          titulo: 'Photoshop',
          fichero:  'photoshop.svg'
        },
        {
          titulo: 'Illustrator',
          fichero:  'illustrator.svg'
        }, 
      ],

      skillsBACK:[
        {
          titulo: 'Java',
          fichero:  'java.svg'
        },
        {
          titulo: 'C++',
          fichero:  'cpp.svg'
        },
        {
          titulo:'NodeJS',
          fichero: 'nodejs.svg'
        },
        {
          titulo:'MySQL',
          fichero: 'mysql.svg'
        },
        {
          titulo:'mongoDB',
          fichero: 'mongodb.svg'
        } 
      ],

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
