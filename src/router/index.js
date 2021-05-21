import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const Home = () => import ('views/home/home.vue')
const Category = () => import ('views/category/category.vue')
const Cart = () => import ('views/cart/cart.vue')
const Profile = () => import ('views/profile/profile.vue')

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
