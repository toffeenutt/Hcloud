<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import File from './item.vue';

const route = useRoute();
const router = useRouter();

const files = ref([]);

async function fetchFiles() {
  let url = '/api/files';
  if (route.params.file_path) {
    url += '/' + route.params.file_path.join('/'); 
  }
  files.value = await fetch(url).then(res=>res.json());
}

function goParent() {
  if (route.params.file_path) {
    const newPath = route.params.file_path.slice(0, -1);
    router.push({ name: 'FileList', params: { file_path: newPath }});
  }
}

onMounted(() => {
  fetchFiles();
});

watch(()=>route.params, fetchFiles);
</script>

<template>
  <ul>
    <li
    @dblclick="goParent"
    style="user-select: none;"
    >
      ..
    </li>
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