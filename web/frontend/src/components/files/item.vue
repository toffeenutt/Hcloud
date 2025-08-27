<script setup>
import router from '@/router';
import { ref } from 'vue';

const props = defineProps({
  item: Object
})

const isSelected = ref(false);
</script>

<template>
  <li 
  @click="isSelected = !isSelected"
  :class="{ 'selected': isSelected }"
  @dblclick="router.push({ name: 'FileList', params: { file_path: [...$route.params.file_path, item.name] }})"
  >
    <span>{{ item.name }}</span>
    <span>{{ item.size }}</span>
  </li>
</template>

<style scoped>
li {
  display: flex;
  justify-content: space-between;
}

.selected {
  background-color: #d3d3d3;
}
</style>