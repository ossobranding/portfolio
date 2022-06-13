<template>
  <v-container>
    <v-row justify="center" class="mt-4">
      <form ref="form" @submit.prevent="sendEmail">
        <label>Name</label>
        <input type="text" name="user_name">
        <label>Email</label>
        <input type="email" name="user_email">
        <label>Message</label>
        <textarea name="message"></textarea>
        <input type="submit" value="Send">
    </form>
    </v-row>
  </v-container>
</template>

<script>
import emailjs from '@emailjs/browser';
import config from '../../config.js';

export default {
  methods: {
    sendEmail() {
      emailjs.sendForm( config.EMAILJS_SERVICE_ID , config.EMAILJS_TEMPLATE_ID , this.$refs.form, config.EMAILJS_PUBLIC_KEY)
        .then((result) => {
            console.log('SUCCESS!', result.text);
        }, (error) => {
            console.log('FAILED...', error.text);
        });
    }
  }
}
</script>

<style>

</style>