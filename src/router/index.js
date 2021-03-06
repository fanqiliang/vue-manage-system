import Vue from 'vue'
import VueRouter from 'vue-router'

const Main = () => import('@/views/Main.vue')
const Home = () => import('@/views/home/Home.vue')
const VideoManage = () => import('@/views/VideoManage/VideoManage.vue')
const UserManage = () => import('@/views/UserManage/UserManage.vue')
const PageOne = () => import('@/views/other/PageOne.vue')
const PageTwo = () => import('@/views/other/PageTwo.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/main',
    component: Main,
    children: [
      {
        path: '/home',
        name: 'home',
        component: Home
      },
      {
        path: '/video',
        name: 'video',
        component: VideoManage
      },
      {
        path: '/user',
        name: 'user',
        component: UserManage
      },
      {
        path: '/page1',
        name: 'page1',
        component: PageOne
      },
      {
        path: '/page2',
        name: 'page2',
        component: PageTwo
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
