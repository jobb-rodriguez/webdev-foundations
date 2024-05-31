<template>
  <div>
    <h1>This is the conditional page</h1>
  </div>
  <div>
    <p>
      <span v-if="hasPurchased"> If it isn't our regular, what can I get for you? </span>
      <span v-else>
        Oh, I thought you were someone else... Look around and see if you find something you like.
      </span>
    </p>
    <button @click="hasPurchased = true">Purchase</button>
  </div>
  <hr />
  <div>
    <p>1 + 1 is?</p>
    <button @click="answer = MultipleChoice.A">A. 2</button> |
    <button @click="answer = MultipleChoice.B">B. 25</button> |
    <button @click="answer = MultipleChoice.C">C. 100</button>
    <hr />
    <div>
      <p v-if="answer === null">Tell us your answer, hotshot</p>
      <p v-else-if="answer === MultipleChoice.A">I guess you're not all talk</p>
      <p v-else-if="answer === MultipleChoice.B">Well, I guess my instincts were right</p>
      <p v-else>Someone needs to return to cram school</p>
      <button @click="answer = null">Reset</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue'

const hasPurchased: Ref<boolean> = ref(false)

enum MultipleChoice {
  A = 1,
  B = 2,
  C = 3
}
const answer: Ref<MultipleChoice | null> = ref(null)
</script>
