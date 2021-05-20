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

  <el-button @click="state.count++">count is: {{ state.count }}</el-button>
  <el-button @click="emit('myclick')">emit</el-button>
</template>

<script setup>
import { defineProps, reactive, defineEmit } from 'vue';
import comp from 'comps/Comp.vue'

defineProps({
  msg: String
})

const emit = defineEmit(['myclick'])

const state = reactive({ count: 0 })

fetch('/api/getUsers')
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
</script>