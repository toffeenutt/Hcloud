<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

import File from './item.vue';

const route = useRoute();

const files = ref([]);

async function fetchFiles() {
  let url = '/api/files';
  if (route.params.file_path) {
    url += '/' + route.params.file_path.join('/'); 
  }
  files.value = await fetch(url).then(res=>res.json());
}

onMounted(() => {
  fetchFiles();
});

watch(()=>route.params, fetchFiles);
</script>

<template>
  <ul>
<!--     <li v-for="dir of files.directories"
    :aria-selected="isSelected"
    draggable="true">
      <RouterLink :to="{ name: 'FileList', params: { file_path: [...$route.params.file_path, dir.name] }}">{{ dir.name }}</RouterLink>
      <p>{{ dir.name }}</p>
      <p>-</p>
    </li> -->
    <File v-for="dir of files.directories" :item="dir" />
  </ul>
  <ul>
    <File v-for="file of files.files" :item="file" />
  </ul>
</template>

<style scoped>
ul {
  list-style-type: none;
}
</style>