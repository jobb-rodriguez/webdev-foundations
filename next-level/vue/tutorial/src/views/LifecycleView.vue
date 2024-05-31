<template>
  <div>
    <h1>This is the lifecycle page</h1>
    <div>
      <p class="green">{{ message }}</p>
      <h2>Lifecycle Hooks Diagram</h2>
      <img src="https://vuejs.org/assets/lifecycle.MuZLBFAS.png" alt="Lifecycle Hooks Diagram" />
      <p>
        <a href="https://vuejs.org/api/composition-api-lifecycle.html" target="_blank"
          >Lifecycle Hooks API</a
        >
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, Ref } from 'vue'
const message: Ref<string> = ref('')
onMounted(() => {
  setTimeout(() => {
    message.value = "Now, we're mounted!"
  }, 3000)
})
</script>
<style scoped>
img {
  width: 100%;
}
</style>
