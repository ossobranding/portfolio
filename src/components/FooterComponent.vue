<template>
    <v-container>
        <v-footer width="100%" class="footer" >
            <v-row  style="width:100%; justify-content:center; "  class="pa-5 ">
                <a class="px-3" style="color:grey" v-on:click="scrollToElement({behavior: 'smooth'} , 'about')">About me</a>
                <a class="px-3" style="color:grey" v-on:click="scrollToElement({behavior: 'smooth'} , 'skills')">Knowledges</a>
                <a class="px-3" style="color:grey" v-on:click="scrollToElement({behavior: 'smooth'} , 'projects')"> Projects</a> 
                <a class="px-3" style="color:grey" v-on:click="scrollToElement({behavior: 'smooth'} , 'contact')">Contact</a>
            </v-row>

            

            <h4 style="text-align:center; width:100%"  class="pa-2">
                © OSSO. All rights reserved.
            </h4>
        </v-footer>
    </v-container>
</template> 

<style scoped>
    .footer{
        justify-content:center; 
        color:grey;
        background-color: transparent !important;
    }
</style> 

<script>
export default {

    methods: {  
        scrollToElement(options, focus) {
            const el = document.getElementsByClassName(focus)[0]; 
            console.log("VAMOS A HACER SCROLL A " + el )
            if (el) {
                el.scrollIntoView(options);
            }
        }  
    },

    
}
</script>

 