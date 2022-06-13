<template> 

  <v-row
    class="works"
    >
    <v-col
      class="project-slot"
      
      v-for="proyect in proyects" 
      :key="proyect.name"  
      :id="proyect.name" 
      >  
      
      <v-card  
        @click="proyect.selected = !proyect.selected" 
        :ripple="false" 
        class="project-card d-flex flex-column " 
      >
        <v-img 
          :src= "require(`@/assets/illustrations/${proyect.image}`)"  
          :class=" ['project-image', {'project-image-blur' : !proyect.selected}]"
          eager  
        ></v-img>
        
        <v-card-title class="project-title">{{proyect.name}}</v-card-title>
        <v-card-text>
          <v-chip-group  
            class="project-tags"
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
            v-if="proyect.selected == true"
            > 
            <v-icon  light>mdi-code-tags</v-icon>
          </v-btn>

          <v-btn 
            class="source-code-button  button-disabled "
            v-if="!proyect.selected "
              depressed disabled
            > 
            <v-icon light >mdi-code-tags</v-icon>
          </v-btn> 

          <v-btn  
            class="state-button button-disabled"
            v-if="!proyect.selected "
            color="warning"
            >
              ?
          </v-btn>

          <v-btn  
            class="state-button "
            v-if="proyect.selected "
            color="warning"
            >
              Hola
          </v-btn>
        </v-card-actions> 
      </v-card>
    </v-col>
  </v-row>

   
    

 
</template>

<style scoped>
  .works{ 
    margin: 12px 12px 12px 12px;
  }

  .project-slot{
    width: 400px; 
  }

  .project-card{ 
    margin: 20px 20px 20px 20px;
    padding: 15px 15px 15px 15px;
    border-radius:10px !important; 
  } 
  
  .project-image{
    min-height: 370px;
    max-height: 370px;
    border-radius:10px;
    transition: 0.5s filter linear;
  }

  .project-image-blur{ 
    filter: blur(40px);
  }

  .project-title{ 
    padding: 5px 5px 5px 20px !important;
    font-size: 40px !important;
    font-weight: bold !important;
  }

  .project-tags{
    margin-top: 5px;
    margin-bottom:15px;
  }
  
  .project-description{
    font-size: 20px !important;
  }

  .button-disabled{
    opacity: 0.5;
    transition: 0.5s opacity linear;
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
          description: "Portfolio de logotipos propios enfocados a la digitalización de empresas",
          image: 'Logotypes.jpg',
          state: 'In process',
          selected: false, 
          technologies: [ 
            {name : "Illustrator"}
          ] 
        },
        {
          name: "OSSO",
          description: "Proyecto de branding para mi marca personal y desarrollo de la web",
          image: 'Inspiration.jpg',
          state: 'In process', 
          selected: false, 
          technologies: [
            {name : "VueJS"},
            {name : "JavaScript"},
            {name : "HTML"},
            {name : "CSS"}
          ]
        },
        {
          name: "brind.design" ,
          description: "Colaboración con @brind.design para el desarrollo  de su web como diseñador gráfico",
          image: 'Inspiration.jpg',
          state: 'In process', 
          selected: false, 
          technologies: [
            {name : "NodeJS"},  
            {name : "mongoDB"},
            {name : "API REST"}
          ]
        },
        {
          name: "Forum API",
          description: "Servicio web para gestión de la lógica de negocio de un foro y sus usuarios",
          image: 'Weare.jpg',
          state: 'In process', 
          selected: false, 
          technologies: [ 
            {name : "NodeJS"}, 
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