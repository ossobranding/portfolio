<template>
  <v-container>
    <v-slide-group center-active style="width: 100%;">   
        
        
        <v-slide-item v-for="proyect in proyects" :key="proyect.name"  style="width: 500px;  " class="ma-5"> 
          <v-card  
            class="pa-3"  
            style="border-radius:10px;" 
          > 
            <v-img 
              :src= "require(`@/assets/illustrations/${proyect.image}`)" 
              eager 
              style="border-radius:10px;"
            ></v-img>
          <v-card-text>
            <v-chip-group
              v-model="selection"
              active-class="deep-purple accent-4 white--text"
              column
            >
              <v-chip v-for="tech in proyect.technologies" :key="tech.name">
                {{tech.name }}   
              </v-chip>  
            </v-chip-group>
          </v-card-text>

            <v-card-actions >
              <v-btn icon right > 
                <v-icon  >mdi-github</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        
        </v-slide-item> 
         
 </v-slide-group>
  </v-container>
</template>

<script>
export default {
  name: "ProjectsComponent",

  data(){
    return{
      proyects: [
        {
          name: "Logo design",
          image: 'Logotypes.jpg',
          technologies: [ 
            {name : "Illustrator"}
          ] 
        },
        {
          name: "osso brand",
          image: 'Inspiration.jpg',
          technologies: [
            {name : "VueJS"},
            {name : "JavaScript"},
            {name : "HTML"},
            {name : "CSS"}
          ]
        },
        {
          name: "API REST forum",
          image: 'Weare.jpg',
          technologies: [
            {name : "NodeJS"},
            {name : "Express"}
          ]
        }

      ]
    }
  }
}
</script>

<style>

</style>