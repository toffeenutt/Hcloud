<script setup>
import { useTemplateRef } from 'vue'
import { useRoute } from 'vue-router';
import { Icon } from "@iconify/vue";

const route = useRoute();
const file_input = useTemplateRef('fileInput');

function uploadFiles() {
  const form_data = new FormData();
  for (const file of file_input.value.files) {
    form_data.append('files', file);
  }

  let url = '/api/files';
  if (route.params.file_path) {
    url += '/' + route.params.file_path.join('/'); 
  }

  fetch(url, {
    method: 'POST',
    body: form_data
  });
}
</script>
<template>
  <button @click="file_input.click">
    <Icon icon="material-symbols:upload" />
  </button>
  <Icon icon="material-symbols:download" />

  <input
  hidden
  type="file"
  ref="fileInput"
  @change="uploadFiles"
  multiple/>
</template>