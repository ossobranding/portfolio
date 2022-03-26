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

      <v-footer
        dark
        padless
      >
        <v-card
          flat
          tile
          class="indigo lighten-1 white--text text-center"
        >
          <v-card-text>
            <v-btn
              v-for="red in rrss"
              :key="red"
              class="mx-4 white--text"
              icon
              :href= red.url
              target="_blank" 
            > 
              <v-icon size="24px">
                {{ red.icono }}
              </v-icon>
            </v-btn>
          </v-card-text>

          <v-card-text class="white--text pt-0">
            Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text class="white--text">
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
          </v-card-text>
        </v-card>
    </v-footer>
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
      ]
    };
  },
};
</script>
