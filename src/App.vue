<template>
  <v-app>
    <v-container>
      <v-row justify="center" class="mt-5">
        <v-btn-toggle v-model="toggle_exclusive">
          <v-btn text style="border: none"> HOME </v-btn>

          <v-btn text style="border: none"> PROJECTS </v-btn>

          <v-btn text style="border: none"> ABOUT </v-btn>

          <v-btn text style="border: none"> RESUME </v-btn>
        </v-btn-toggle>
      </v-row>

      <v-row>
        <v-col  
          style="height: 276px; width:276px; min-height:276px; min-width:276px;">
          
          <v-card 
            class="fill-height" 
            style="background-color:#CCAB87;">  </v-card>
        </v-col>

        <v-col 
          class="pb-0" 
          style="height: 276px; width:276px; min-height:276px; min-width:276px;">

          <v-row style="height: 50%">
            <v-col class="ma-0">
              <v-card 
                class="fill-height"
                style="background-color:#00E0E0">  </v-card>
            </v-col>
          </v-row>

          <v-row style="height: 50%; margin-top: 12px">
            <v-col class="ma-0 pb-0">
              <v-card 
                class="fill-height"
                style="background-color:#E8E8E8;">   </v-card>
            </v-col>

            <v-col class="ma-0 pb-0">
              <v-card 
                class="fill-height"
                style="background-color:#E8E8E8;">  </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col  
          style="height: 276px; width:276px; min-height:276px; min-width:276px;">
          
          <v-card 
            class="fill-height" 
            style="background-color:#CCAB87;">  </v-card>
        </v-col>

        <v-col 
          class="pb-0" 
          style="height: 276px; width:276px; min-height:276px; min-width:276px;">

          <v-row style="height: 50%">
            <v-col class="ma-0">
              <v-card 
                class="fill-height"
                style="background-color:#00E0E0">  </v-card>
            </v-col>
          </v-row>

          <v-row style="height: 50%; margin-top: 12px">
            <v-col class="ma-0 pb-0">
              <v-card 
                class="fill-height"
                style="background-color:#E8E8E8;">   </v-card>
            </v-col>

            <v-col class="ma-0 pb-0">
              <v-card 
                class="fill-height"
                style="background-color:#E8E8E8;">  </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row justify="center" >
        <v-col 
          v-for="skill in skills" :key="skill.titulo"
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
        </v-col>
         
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      skills:[
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
      ]
    };
  },
};
</script>
