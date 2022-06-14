<template>
 
  <v-row justify="center" sty class="mt-4">
 
    <v-col xs= "12" sm="12" lg="4" md="4" >
      <form 
        ref="form" 
        class="contact-container" 
        @submit.prevent="sendEmail"> 
        
        <div id="contact-name-input" class="input-container column">
          <label>Name:
            <span class="input-error" v-if="!nameIsValid && this.checkFormErrors">Please enter your name</span> 
          </label> 
          <input
            id="contact-name-input-field" 
            class="input-field"  
            name="user_name" 
            v-model="form.name"
            > 
        </div>

        <div id="contact-email-input" class="input-container column">
          <label >Email:
            <span class="input-error" v-if="!emailIsValid && this.checkFormErrors">Please enter a valid email address</span> 
          </label> 
          <input 
            id="contact-name-input-field" 
            class="input-field" 
            name="user_email" 
            v-model="form.email"
            > 
        </div>
        <label class="spam-advertisement">
            <v-icon color="grey">mdi-lock-check</v-icon>
            I won't send you spam 
        </label>

        <div 
          id="contact-message-input" 
          class="input-container column" 
          >
          <label>Message:
            <span class="input-error" v-if="!msgIsValid && this.checkFormErrors">Please enter a valid email address</span> 
          </label> 
          
          <textarea 
            id="contact-message-input-field" 
            class="input-field" 
            name="message"
            v-model="form.msg"  
            rows="8"> 
          </textarea>
        </div> 

          <v-card-actions class="networks-container"> 
            <div >
              <v-btn class="mr-3" icon v-for="red in rrss" :key="red.titulo"  
                :href= red.url target="_blank"  
                >
                <v-icon size="40px" > {{red.icono}}</v-icon>
              </v-btn>
            </div>
            <v-btn type="submit" class="submit-button" value="Send">Submit </v-btn>
        </v-card-actions> 
      </form>
    </v-col>

    <v-col  class = "image" xs= "12" sm="12" lg="4" md="4" >
      <v-img contain style="max-height: 575px;" src= "../assets/images/degradada.png" eager> 
      </v-img> 
    </v-col>
    
  </v-row>
 
 
</template>

<style scoped>
  .contact-container{ 
    background-color: white;
    border-radius: 10px;
    padding: 20px 20px 20px 20px;
  }

  .column{
    display: flex;
    flex-direction: column;
  }

  .input-container{
    width: 100%;
    box-sizing: border-box;
    background: #F5F5F5;
    color: #ACACAC;
    border-radius: 13px;
    padding: 7px;
    padding-left: 15px;
    border: 2px solid #F5F5F5;
  }

  .input-error{
    color: red; 
  }

  .input-field{
    outline: none;
  }

  #contact-name-input{
    margin-bottom: 20px;
  }

 

  #contact-email-input{
  
  }

  .spam-advertisement{ 
    color: grey;  
  }

  #contact-message-input{
    margin-top: 20px;
  }

  #contact-message-input-field{
  resize: none;
  }

  .networks-container{
    margin-top:20px; 
    position: relative; 
    height: 40px;
  }

  .submit-button{
    position: absolute;
    right: 10px; 
  }

  .image{ 
  }
 
</style>



<script>
import emailjs from '@emailjs/browser';
import config from '../../config.js'; 

export default {  
  methods: { 

    sendEmail() { 
      this.checkFormErrors = true;

      if(this.nameIsValid && this.emailIsValid && this.msgIsValid){
        emailjs.sendForm( config.EMAILJS_SERVICE_ID , config.EMAILJS_TEMPLATE_ID , this.$refs.form, config.EMAILJS_PUBLIC_KEY)
        .then((result) => {
            console.log('SUCCESS!', result.text);
        }, (error) => {
            console.log('FAILED...', error.text);
        });
      } 
    }
  },

  computed:{
    nameIsValid(){
      return !!this.form.name && this.form.name.length > 3;
    },

    emailIsValid(){
      var regularExpr = /\S+@\S+\.\S+/;   
      return regularExpr.test(String(this.form.email).toLowerCase());
    },

    msgIsValid(){
      return !!this.form.msg
    },
 
  },

  data() {
    return { 
      checkFormErrors : false,

      form: {
        name: null,
        email: null,
        msg: null
      },

      rrss:[
        {
          titulo: 'Linkedin',
          icono: 'mdi-linkedin',
          url: 'https://es.linkedin.com/in/oscarcasadolorenzo'
        },
        {
          titulo: 'Github',
          icono: 'mdi-github',
          url: 'https://github.com/ossobranding'
        },
        {
          titulo: 'Instagram',
          icono: 'mdi-instagram',
          url: 'https://www.instagram.com/osso.branding/'
        } 
      ], 
    };
    },
}
</script>

 