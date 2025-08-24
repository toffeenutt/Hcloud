import { createRouter, createWebHistory } from 'vue-router'
import FileList from '../components/file-list.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/files/:file_path*',
      name: 'FileList',
      component: FileList,
    },
  ],
})

export default router
