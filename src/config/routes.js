import Home from '../components/Home'

import userFrame from '../frame/userFrame'

import index from '../page/index'
import content from '../page/content'

import userIndex from '../page/user/index.vue'
// import userLogin from '../page/user/login.vue'
import userLogin from '../components/Login.vue'
import userSingin from '../page/user/signin.vue'

import Table from '../page/nav1/Table'

export default [
    {
        path: '/',
        component: index
    },
    {
        path: '/content',
        component: content
    },
    {
        path: '/user',
        component:userFrame,
        children: [
            { path: '/', component: userIndex },
            { path: 'login', component: userLogin },
            { path: 'signin', component: userSingin }
        ]
    },

    {
        path:'/',
        component:Home,
        children:[
            {path:'/table',component:Table,name:'Table'}
        ]
    }
]