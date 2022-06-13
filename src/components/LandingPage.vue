<template>
  <div class="landing-container">
      <div id="content">
        
        <vue-typer  
            class = "typer"
            :text='[ "OSCAR CASADO", "OSSO"]'
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
        <h1 style="text-align: center;  "> Desarrollador web fullsack</h1>
        <h1 style="text-align: center;  ">& diseñador gráfico</h1>  
      </div> 
        
  </div> 
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
        height:100vh;
        width: 100%;   
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #E8E8E8;
    }

    .typer{
        height: 20vw;
        min-height: 20vw;
        display: inline-block;
        text-align: center;
        width: 100%;
    }

    .custom.caret{
       display: none;
    }

    .introduction {
        text-align: center; 
    } 

    .custom.char {
        -webkit-text-stroke: 2px #606887;
        font-size: 5vw;
        color: transparent; 
    }

    .my-name, .brand-name {
        display: inline-block;
        font-size: 5vw;
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
        font-size: 8vw;
    }
</style>