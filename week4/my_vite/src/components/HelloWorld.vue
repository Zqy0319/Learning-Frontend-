<template>
  <h1>{{ msg }}</h1>
  <p>{{ $store.state.counter }}</p>

  <p>{{ t('hello') }}</p>

  <el-button @click="state.count++">count is: {{ state.count }}</el-button>
  <p></p>
</template>

<script setup>
import { defineProps, reactive } from "vue";
import { useI18n } from "vue-i18n";

defineProps({
  msg: String,
});

const state = reactive({ count: 0 });
const { locale, t } = useI18n({
  inheritLocale: true,
});
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
