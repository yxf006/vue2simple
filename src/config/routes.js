
import userframe from '../frame/usersubroute'

import index from '../page/index'
import content from '../page/content'

import userIndex from '../page/user/index.vue'
import userLogin from '../page/user/login.vue'
import userSingin from '../page/user/signin.vue'

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
        component:userframe,
        children: [
            { path: '/', component: userIndex },
            { path: 'login', component: userLogin },
            { path: 'signin', component: userSingin }
        ]
    },
]