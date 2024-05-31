<script setup lang="ts">
import { emit } from 'vue'
defineProps<{
  name: string
}>()
defineEmits(['care-package'])
</script>
<template>
  <div>
    <h2>Hello, {{ name }}</h2>
    <button @click="$emit('care-package', 'Especially for you')">Emit Care Package</button>
  </div>
</template>
