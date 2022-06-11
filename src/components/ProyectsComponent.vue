<template>
  
 

  <!-- 
     <v-row>
    <v-slide-group center-active show-arrows  >   
        <v-slide-item 
          v-for="proyect in proyects" 
          :key="proyect.name"  
          style="width: 400px;  " 
          class="ma-5 works"
         
          > 
          
          <v-card  
         
           
          > 
             
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
    </v-row>
    -->

    <v-slide-group
      v-model="model"
      class="pa-4"
      center-active
      show-arrows
    >
      <v-slide-item
        v-for="proyect in proyects" 
        :key="proyect.name"  
        v-slot="{ active, toggle }"
        style="width: 400px; " 
      >
        <v-card 
          class="ma-4 pa-3"  
          style="border-radius:10px;" 
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
            >
              <v-chip v-for="tech in proyect.technologies" :key="tech.name">
                {{tech.name }}   
              </v-chip>  
            </v-chip-group>
            <div class="project-description">{{proyect.description}}</div>
          </v-card-text>

            <v-card-actions >
              <v-btn 
                v-if="active"
                icon right > 
                <v-icon  >mdi-github</v-icon>
              </v-btn>

              <v-btn 
                v-if="!active"
                icon right disabled> 
              <v-icon  >mdi-github</v-icon>
            </v-btn>

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

  .project-title{
    padding: 5px 5px 5px 5px !important;
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
          description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa a aa a a a aaa",
          image: 'Logotypes.jpg',
          technologies: [ 
            {name : "Illustrator"}
          ] 
        },
        {
          name: "osso brand",
          description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa a aa a a a aaa",
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
          description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa a aa a a a aaa",
          image: 'Weare.jpg',
          technologies: [
            {name : "NodeJS"},
            {name : "Express"}
          ]
        },
        {
          name: "API REST forum",
          description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa a aa a a a aaa",
          image: 'Weare.jpg',
          technologies: [
            {name : "NodeJS"},
            {name : "Express"}
          ]
        },
        {
          name: "API REST forum",
          description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa a aa a a a aaa",
          image: 'Weare.jpg',
          technologies: [
            {name : "NodeJS"},
            {name : "Express"}
          ]
        },
        {
          name: "API REST forum",
          description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa a aa a a a aaa",
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