<template>
  <div>
    <h1>This is the component page</h1>
    <Greet :name="name" @care-package="updateMessage" />
    <hr>
    <label for="name">Name</label>&nbsp;
    <input type="text" name="name" id="name" v-model="name" />
    <hr />
    <h2>{{ msg }}</h2>
    <hr>
    <p>
      <a href="https://vuejs.org/guide/components/registration.html" target="_blank"
        >Advanced Component Lessons for your personal reading</a
      >
    </p>
  </div>
</template>
<script setup lang="ts">
import Greet from '@/components/Greet.vue'
import { ref, Ref } from 'vue'
const name: Ref<string> = ref('')

const msg: Ref<string> = ref("You'll always be a part of me")
const updateMessage = (message: string): void => {
  msg.value = message;
}
</script>
