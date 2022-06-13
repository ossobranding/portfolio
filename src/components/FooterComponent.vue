<template>
    <v-container>
        <v-footer width="100%" class="footer" >
            <v-row  style="width:100%; justify-content:center; "  class="pa-5 ">
                <a class="px-3" style="color:grey">Sobre mi</a>
                <a class="px-3" style="color:grey">Proyectos</a>
                <a class="px-3" style="color:grey"> Conocimientos</a>
                <a class="px-3" style="color:grey">Habilidades</a>
                <a class="px-3" style="color:grey">Contacto</a>
            </v-row>

            <v-btn icon v-for="red in rrss" :key="red.titulo"  
                :href= red.url target="_blank"  >
                <v-icon color="grey"> {{red.icono}}</v-icon>
            </v-btn>

            <h4 style="text-align:center; width:100%"  class="pa-2">
                © OSSO. Todos los derechos reservados.
            </h4>
        </v-footer>
    </v-container>
</template> 

<style scoped>
    .footer{
        justify-content:center; 
        color:grey;
        background-color: transparent;
    }
</style> 

<script>
export default {
    data() {
        return { 
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
            ], 
        };
    },
}
</script>

 