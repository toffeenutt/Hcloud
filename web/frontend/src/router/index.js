import { createRouter, createWebHistory } from 'vue-router'
import FileList from '../components/files/file-list.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: 'FileList', params: { file_path: [] } }
    },
    {
      path: '/files/:file_path*',
      name: 'FileList',
      component: FileList,
    },
  ],
})

export default router
