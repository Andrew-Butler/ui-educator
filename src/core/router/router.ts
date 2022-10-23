import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from "@secure/dashboard/Dashboard.vue";
import Login from '@unsecure/App.vue';

const routes = [
    {
        path: '/',
        name: 'Dasgboard',
        component: Dashboard
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router