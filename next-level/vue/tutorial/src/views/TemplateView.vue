<template>
  <div>
    <h1 :id="header">This is the template page</h1>
    <span>{{ message }}</span>
    <div v-html="messageInRawHTML"></div>
    <button :disabled="isButtonDisabled">Continue</button>
    <p>{{ 1 + 2 }} | {{ isButtonDisabled ? 'Yes' : 'No' }}</p>
  </div>
</template>
<script setup lang="ts">
const message: string = 'The world continuously revolves.'
// WARNING: Dynamically rendering arbitrary HTML on your website can be very dangerous because it can easily lead to XSS vulnerabilities. Only use v-html on trusted content and never on user-provided content.
const messageInRawHTML: string = '<p><em>Please believe me.</em></p>'

const header: string = 'template-header'

const isButtonDisabled: boolean = true
</script>
