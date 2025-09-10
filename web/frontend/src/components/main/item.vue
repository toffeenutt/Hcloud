<script setup>
import { ref } from 'vue';

const props = defineProps({
  item: Object
})

const is_selected = ref(false);
</script>

<template>
  <li 
  @click="is_selected = !is_selected"
  :class="{ 'selected': is_selected }"
  @dblclick="$router.push({
    name: 'FileManager',
    params: { file_path: [...$route.params.file_path, item.name] }
    })"
  draggable="true"
  >
    <span>{{ item.name }}</span>
    <span>{{ item.size || '-' }}</span>
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