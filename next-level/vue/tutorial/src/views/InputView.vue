<template>
  <div>
    <h1>This is the input page</h1>
    <div>
      <form>
        <label for="name">Name</label>&nbsp;
        <input v-model.trim="name" id="name" />
        <br />
        <label for="message">Message</label><br />
        <textarea v-model="message" id="message" placeholder="Message"></textarea>
        <br />
        <button @click.prevent>Submit</button>
      </form>
      <hr />
      <p>Name: {{ name }}</p>
      <div>
        <span>Multiline message is:</span>
        <p style="white-space: pre-line">{{ message }}</p>
      </div>
    </div>
    <a href="https://vuejs.org/guide/essentials/forms.html" target="_blank">Read more here</a>
  </div>
</template>
<script setup lang="ts">
import { ref, Ref } from 'vue'
const name: Ref<string> = ref('')
const message: Ref<string> = ref('')
</script>
