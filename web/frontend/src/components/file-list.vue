<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const files = ref([]);
const route = useRoute();

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
    <li v-for="dir of files.directories">
      <RouterLink :to="{ name: 'FileList', params: { file_path: [...$route.params.file_path, dir.name] }}">{{ dir.name }}</RouterLink>
    </li>
  </ul>
  <ul>
    <li v-for="file of files.files">
      <p>{{ file.name }}</p>
      <p>{{ file.size }}</p>
    </li>
  </ul>
</template>
