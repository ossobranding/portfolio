<template> 

  <v-slide-group
    v-model="model"
    class="pa-4"
    center-active
    show-arrows
  >
    <v-slide-item
      class="project-slot"
      v-for="proyect in proyects" 
      :key="proyect.name"  
      v-slot="{ active, toggle }"
 
    >
      <v-card 
        class="project-card d-flex flex-column "   
        @click="toggle"
      >
        <v-img 
          :src= "require(`@/assets/illustrations/${proyect.image}`)" 
          eager 
          style="border-radius:10px;"
        ></v-img>
        
        <v-card-title class="project-title">{{proyect.name}}</v-card-title>
        <v-card-text>
          <v-chip-group  
            column
          >
            <v-chip v-for="tech in proyect.technologies" :key="tech.name">
              {{tech.name }}   
            </v-chip>  
          </v-chip-group>
          <div class="project-description">{{proyect.description}}</div>
        </v-card-text>

        <v-spacer></v-spacer>

        <v-card-actions>
 <v-btn 
          class="source-code-button"
          depressed
           
          v-if="active"
            > 
          <v-icon  light>mdi-code-tags</v-icon>
        </v-btn>

        <v-btn 
          class="source-code-button "
          v-if="!active"
            depressed disabled> 
          <v-icon  light >mdi-code-tags</v-icon>
        </v-btn> 

        <v-btn  class="state-button"   color="warning">Hola</v-btn>
        </v-card-actions>
       
        
      </v-card>

    </v-slide-item>
  </v-slide-group>

    

 
</template>

<style >
  .works{
    justify-content: center;
    align-items: center;
  }

  .project-slot{
    width: 400px; 
  }

  .project-card{ 
    margin: 20px 20px 20px 20px;
    padding: 15px 15px 15px 15px;
    border-radius:10px !important; 
  }

  .project-title{
    padding: 5px 5px 5px 20px !important;
    font-size: 30px !important;
    font-weight: bold !important;
  }
  
  .state-button{
    width: 80%;
  }
</style>

<script>
export default {
  name: "ProjectsComponent",

  data(){
    return{
      proyects: [
        {
          name: "Logo design",
          description: "Recopilación de logotipos propios ",
          image: 'Logotypes.jpg',
          state: 'In process', 
          technologies: [ 
            {name : "Illustrator"}
          ] 
        },
        {
          name: "OSSO brand",
          description: "Diseño y desarrollo de mi marca personal",
          image: 'Inspiration.jpg',
          state: 'In process', 
          technologies: [
            {name : "VueJS"},
            {name : "JavaScript"},
            {name : "HTML"},
            {name : "CSS"}
          ]
        },
        {
          name: "brind.design's web",
          description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa a aa a a a aaa",
          image: 'Inspiration.jpg',
          state: 'In process', 
          technologies: [
            {name : "NodeJS"},
            {name : "Express"},
            {name : "JWT"} ,
            {name : "mongoDB"},
            {name : "API REST"}
          ]
        },
        {
          name: "SSL sockets",
          description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa a aa a a a aaa",
          image: 'Weare.jpg',
          state: 'In process', 
          technologies: [
            {name : "SSL"},
            {name : "Express"},
            {name : "JWT"} ,
            {name : "mongoDB"},
            {name : "API REST"}
          ]
        },
        {
          name: "SS1 sockets",
          description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa a aa a a a aaa",
          image: 'Weare.jpg',
          state: 'Visit it!', 
          technologies: [
            {name : "SSL"},
            {name : "Express"},
            {name : "JWT"} ,
            {name : "mongoDB"},
            {name : "API REST"}
          ]
        }
      ]
    }
  }
}
</script>

<style>

</style>