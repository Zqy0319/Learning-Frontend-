<template>
  <h1>{{ msg }}</h1>
  <comp></comp>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button @click="state.count++">count is: {{ state.count }}</button>
  <button @click="emit('myclick')">emit</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script setup>
import { defineProps, reactive, defineEmit } from 'vue';
import comp from '../components/Comp.vue'

defineProps({
  msg: String
})

const emit = defineEmit(['myclick'])

const state = reactive({ count: 0 })
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
