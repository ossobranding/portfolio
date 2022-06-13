<template>
    <div>
        <!--BACKEND-->
        <v-row justify="center" >
            <v-col 
            v-for="skill in skillsBACK" :key="skill.titulo " eager
            cols="1"  
            align-self="center"  
            style="min-width:75px; ">
            <v-img
                class=" mb-3 anim"
                width="100%"
                contain
                aspect-ratio="1"
                :src= "require(`@/assets/logos/${skill.fichero}`)" 
                eager 
            ></v-img>
            <h5 class="mt-1" style="wdth:100%;text-align:center;">{{skill.titulo}}</h5>
            </v-col> 
        </v-row>

        <!--FRONTEND-->
        <v-row justify="center" class="mt-4">
            <v-col 
            v-for="skill in skillsFRONT" :key="skill.titulo"
            cols="1" 
            align-self="center"  
            style="min-width:75px;">
            
                <v-img
                class=" mb-3  anim"
                width="100%"
                contain
                aspect-ratio="1"
                :src= "require(`@/assets/logos/${skill.fichero}`)"  
                ></v-img>
             
            <h5 class="mt-1" style="wdth:100%;text-align:center;">{{skill.titulo}}</h5>
            </v-col> 
        </v-row>

        <!--DESIGN-->
        <v-row justify="center" class="mt-4">
            <v-col 
            v-for="skill in skillsDESIGN" :key="skill.titulo"
            cols="1" 
            align-self="center"  
            style="min-width:75px;">
            
                <v-img
                class=" mb-3  anim"
                width="100%"
                contain
                aspect-ratio="1"
                :src= "require(`@/assets/logos/${skill.fichero}`)"  
                ></v-img>
             
            <h5 class="mt-1" style="wdth:100%;text-align:center;">{{skill.titulo}}</h5>
            </v-col> 
        </v-row>
    </div>
        
 
</template>

<style scoped> 
    .anim {
        filter: grayscale(40%);  
    }

    .anim:hover{
        animation: bounce 2s infinite; 
        filter: grayscale( 0%);   
    }

  @keyframes bounce { 
      50%{
          transform: scale(1.2);
      }
      100%{
          transform: scale(1);
      }
  }
</style>

<script>
export default {
    name: "SkillsComponent",

    data() {
        return {
            BASE_URL: process.env.BASE_URL, 

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
                titulo: 'ES6',
                fichero:  'javascript.svg'
                },
                {
                titulo: 'Laravel',
                fichero:  'laravel.svg'
                },
                {
                titulo: 'Vue',
                fichero:  'vuejs.svg'
                }  
            ],

            skillsDESIGN : [
                {
                titulo: 'Photoshop',
                fichero:  'photoshop.svg'
                },
                {
                titulo: 'Illustrator',
                fichero:  'illustrator.svg'
                }, 
            ] 
        };
    },
};
 
</script>

<style>

    
</style>