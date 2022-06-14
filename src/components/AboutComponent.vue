<template>
    <v-container>
      <v-row class="mt-4">
        <v-col class="pt-10"> 
           <h2 class="hobbie-title">  Books  </h2> 
         
          <h4  class="hobbie-text" >  
            La idea de OSSO surge de un chico de 21 años que tras dedicar toda su vida a los estudios decide dar con 
            la fórmula que convierta toda su energía, aprendizaje y aficiones en la mejor versión de sí mismo como profesional.
          </h4> 
        </v-col>

        <v-col class="mx-6"> 
          <h2 class="hobbie-title">  Sports  </h2> 
         
          <h4 class="hobbie-text" >  
            La idea de OSSO surge de un chico de 21 años que tras dedicar toda su vida a los estudios decide dar con 
            la fórmula que convierta toda su energía, aprendizaje y aficiones en la mejor versión de sí mismo como profesional.
          </h4> 
        </v-col>

        <v-col class="pt-10">
          <h2 class="hobbie-title">  Paint  </h2> 
         
          <h4 class="hobbie-text" >  
            La idea de OSSO surge de un chico de 21 años que tras dedicar toda su vida a los estudios decide dar con 
            la fórmula que convierta toda su energía, aprendizaje y aficiones en la mejor versión de sí mismo como profesional.
          </h4> 
        </v-col>
      </v-row>

      <v-row style="justify-content:center;" class="mt-5">
        <v-btn class="pa-5" style="background-color:#00E0E0">
          <v-icon > mdi-file-document-outline </v-icon> 
          <a  style="text-decoration:none;color:black;" class="ml-2"
              :href=  " '/files/CV.pdf' "   download = "CV.pdf"
          >
              RESUME
          </a>
        </v-btn>
      </v-row>
    </v-container> 
</template>

<style scoped>

  .hobbie-title{
    font-size:50px;  
    font-weight:bold; 
    text-align:center 
  }

  .hobbie-text{
    font-family:"Rubik-Light";
    font-size:20px; 
    color:grey; 
    text-align:justify;
  }
</style>

<script> 
export default {
    name: "AboutComponent", 

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