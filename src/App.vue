<template>
  <v-app> 
    <v-container>
      <v-row justify="center" class="mt-5">
        <v-btn-toggle v-model="toggle_exclusive">
          <v-btn text style="border:none;">
            HOME
          </v-btn>

          <v-btn text style="border:none;">
            PROJECTS
          </v-btn>

          <v-btn text style="border:none;">
            ABOUT
          </v-btn>

          <v-btn text style="border:none;">
            RESUME
          </v-btn>
        </v-btn-toggle>
      </v-row>

      <v-row style="height:300px;">
        <v-col> 
          <v-card class="fill-height"> 
            Hola
          </v-card> 
        </v-col>

        <v-col class="pb-0">
          <v-row  style="height:50%;">
            <v-col class="ma-0 ">
              <v-card class="fill-height">
                Holi
              </v-card>
            </v-col> 
          </v-row>

          <v-row style="height:50%; margin-top:12px;">
            <v-col class="ma-0 pb-0">
              <v-card class="fill-height">
                Hola
              </v-card> 
            </v-col>

            <v-col class="ma-0 pb-0">
              <v-card class="fill-height">
                Hola
              </v-card> 
            </v-col>
          </v-row> 
        </v-col>

        <v-col>
          <v-card class="fill-height">
            Hola
          </v-card> 
        </v-col>

        <v-col class="pb-0">
          <v-row  style="height:50%;">
            <v-col class="ma-0 ">
              <v-card class="fill-height">
                Holi
              </v-card>
            </v-col> 
          </v-row>

          <v-row style="height:50%; margin-top:12px;">
            <v-col class="ma-0 pb-0">
              <v-card class="fill-height">
                Hola
              </v-card> 
            </v-col>

            <v-col class="ma-0 pb-0">
              <v-card class="fill-height">
                Hola
              </v-card> 
            </v-col>
          </v-row> 
        </v-col>

      </v-row>
    </v-container>
  </v-app>
</template>

<script>
 

export default {
  name: 'App',

 

  data () {
    return {

    }
  }
};
</script>
