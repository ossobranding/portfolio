<template>
    <v-container>
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
            v-for="skill in skillsBACK" :key="skill.titulo " eager
            cols="1" 
            class="anim"
            align-self="center"  
            style="min-width:75px;">
            <v-img
                class="mx-auto"
                width="75%"
                contain
                aspect-ratio="1"
                :src= "require(`@/assets/logos/${skill.fichero}`)" 
                eager 
            ></v-img>
            <h5 class="mt-1" style="wdth:100%;text-align:center;">{{skill.titulo}}</h5>
            </v-col> 
        </v-row>
    </v-container> 
</template>

<script>
export default {
    name: "SkillsComponent",

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
        };
    },
};
 
</script>

<style>

    .anim:hover{
        animation: bounce 1s infinite;   
    }

    @keyframes bounce {
        0%{
            transform: scale(0);
        }
        50%{
            transform: scale(1.5);
        }
        100%{
            transform: scale(1);
        }
    }
</style>