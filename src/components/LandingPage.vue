<template>
  <v-container class="landing-container">
      <div id="content">
        <h3 class="introduction">
            <span class="name-intro">HOLA, MI NOMBRE ES </span>   
            <div class="my-name">
                OSCAR CASADO
            </div>
        </h3>
        <h3 class="introduction">
            <span class="brand-intro">Y </span> 
            <div class="brand-name">
                OSSO
            </div> 
            <span class="brand-intro"> ES MI MARCA PERSONAL </span> 
        </h3>
        <div class="roles">
            <p>Soy desarrollador web full-stack  </p>
            <p>
                y diseñador UX/UI
                <vue-typer  
                    :text='[ "", "(en proceso)"]'
                    :repeat='Infinity'
                    :shuffle='false'
                    initial-action='typing'
                    :pre-type-delay='70'
                    :type-delay='70'
                    :pre-erase-delay='5000'
                    :erase-delay='250'
                    erase-style='select-all'
                    :erase-on-complete='false'
                    caret-animation='blink' 
                ></vue-typer>
            </p>
        </div>
      </div> 
  </v-container> 
</template>

<script>
    import {VueTyper} from 'vue-typer'  

    export default {
        components:{
            VueTyper
        },
    }
</script>

<style>
    .landing-container { 
        background-size: cover; 
        height: 100%;

        display:flex;
        justify-content: center;
        align-items: center;
    }

    .introduction {
        text-align: center; 
    } 

    .name-intro, .brand-intro {
        -webkit-text-stroke: 2px #606887;
        font-size: 40px;
        color: transparent; 
    }

    .my-name, .brand-name {
        display: inline-block;
        font-size: 40px;
        color: #606887;
    }

    .roles {
        text-align: center; 
    }

    .roles p {
        margin-bottom: 0px !important; 
        font-size: 20px;
        color: #606887;
    }

    .custom.char {
        color:#606887;
    }
</style>