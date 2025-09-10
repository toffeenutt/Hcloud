import { createRouter, createWebHistory } from 'vue-router'
import FileManager from '../components/main/file-manager.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: 'FileManager', params: { file_path: [] } }
    },
    {
      path: '/files/:file_path*',
      name: 'FileManager',
      component: FileManager,
    },
  ],
})

export default router
