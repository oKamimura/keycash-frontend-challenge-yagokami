import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from '@/pages/Home'
import imovel1 from '@/pages/imovel-venda-bandeira-paulista-594'
import imovel2 from '@/pages/imovel2.vue'
import imovel3 from '@/pages/imovel3.vue'
import imovel4 from '@/pages/imovel4.vue'
import imovel5 from '@/pages/imovel5.vue'
import imovel6 from '@/pages/imovel6.vue'
import imovel7 from '@/pages/imovel7.vue'
import imovel8 from '@/pages/imovel8.vue'
import imovel9 from '@/pages/imovel9.vue'
import imovel10 from '@/pages/imovel10.vue'
import imovel11 from '@/pages/imovel11.vue'
import imovel12 from '@/pages/imovel12.vue'
import imovel13 from '@/pages/imovel13.vue'
import imovel14 from '@/pages/imovel14.vue'
import imovel15 from '@/pages/imovel15.vue'
import imovel16 from '@/pages/imovel16.vue'
import imovel17 from '@/pages/imovel17.vue'
import imovel18 from '@/pages/imovel18.vue'
import imovel19 from '@/pages/imovel19.vue'
import imovel20 from '@/pages/imovel20.vue'
import imovel21 from '@/pages/imovel21.vue'
import imovel22 from '@/pages/imovel22.vue'
import imovel23 from '@/pages/imovel23.vue'
import imovel24 from '@/pages/imovel24.vue'



const routes = [
    {
        path: '/',
        component:Home
    },  
    {
        path: '/ab1a3fc0-80dc-4025-8192-b9ba39e67a39',
        component:imovel1
    },
    {
        path: '/b10284d0-69b6-4284-b841-10a2b36905d5',
        component:imovel2
    },
    {
        path: '/d4eda3c7-a111-4566-aec6-5573439e4376',
        component:imovel3
    },
    {
        path: '/6433a534-6193-4ade-bb8b-763bf06045b2',
        component:imovel4
    },
    {
        path: '/d7d6e940-368d-4978-ab28-8b431677ffcf',
        component:imovel5
    },
    {
        path: '/d9ac3077-98f4-4612-b261-6bfe5642fc32',
        component:imovel6
    },
    {
        path: '/0878cf5a-adb7-4013-9612-cc9cd81ad293',
        component:imovel7
    },
    {
        path: '/5370cba1-7197-4842-bff3-d6c5f9cb1cfc',
        component:imovel8
    },
    {
        path: '/b7a393d7-3ad1-4283-b519-778543de29ec',
        component:imovel9
    },
    {
        path: '/93fdf24d-ca8b-4ba3-9d7e-6eb6577922f6',
        component:imovel10
    },
    {
        path: '/7112337c-74ea-49d3-b5a5-b89f93e55325',
        component:imovel11
    },
    {
        path: '/45d54321-54e5-4418-8d97-017a5bf1ed69',
        component:imovel12
    },
    {
        path: '/7a2c3544-2fa8-4fd2-86bd-162529dc8348',
        component:imovel13
    },
    {
        path: '/f8d57ada-75cb-40a8-ac2c-c9bdcdddd807',
        component:imovel14
    },
    {
        path: '/2e3d4f03-54e2-4aec-ae5a-667cf2d37ba5',
        component:imovel15
    },
    {
        path: '/4511102f-ee13-4a44-898e-081b4fc93dab',
        component:imovel16
    },
    {
        path: '/5d6fab4c-d365-4639-a06e-f48d6d0b2904',
        component:imovel17
    },
    {
        path: '/5e23e06c-7783-476e-977d-76bf8ba14a73',
        component:imovel18
    },
    {
        path: '/a34c3632-3839-4f57-a695-b4d1c07ef15e',
        component:imovel19
    },
    {
        path: '/49a09dcc-f217-480a-afbb-79f75bf16527',
        component:imovel20
    },
    {
        path: '/6aaf51d1-de45-4c0a-8861-3197163fc4a3',
        component:imovel21
    },
    {
        path: '/b272f095-642c-4d7c-92d7-a5395f8a21ab',
        component:imovel22
    },
    {
        path: '/b1b081b2-6dcd-47b8-aedc-5d7e7425e5b2',
        component:imovel23
    },
   
    {
        path: '/b3bb6f60-a6c8-467f-a23c-b5dea21b038c',
        component:imovel24
    }
   
   
];

const router = new VueRouter ({
    routes,
    mode:'history'
});

export default router;