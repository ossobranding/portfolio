<template>
    <v-container>
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
                  <v-img :src= "require(`@/assets/images/${fotografia.fichero}`)" eager> 
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
    </v-container>
</template>

<script>
import {VueTyper} from 'vue-typer'

export default {
    name: "AboutComponent",

    components:{
        VueTyper 
    },

    data (){
        return {
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
        }
    }
}
</script>

<style>

</style>