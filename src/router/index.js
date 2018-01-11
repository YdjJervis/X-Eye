import Vue from 'vue'
import Router from 'vue-router'
import HouseFond from '../pages/indicators/HouseFond.vue'
import User from '../pages/user/User.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/houseFond',
            name: 'houseFond',
            component: HouseFond
        }, {
            path: '/user',
            name: 'user',
            component: User
        }
    ]
})