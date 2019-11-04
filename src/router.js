import Vue from 'vue'
import Router from 'vue-router'
import LoginForms from './components/LoginForms.vue'
import Table from './components/Table.vue'
import Edit from './components/Edit.vue'
import store from './store'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            component: LoginForms
        },
        {
            name: 'Table',
            path: '/table',
            component: Table,
            meta: { order: false },
            props: true,
            beforeEnter: (to, from, next) => {
                if (to.meta.order == store.state.order) {
                    alert('Please log in')
                    next({
                        path: '/',
                        component: LoginForms
                    })
                } else {
                    next()
                }
            }
        },
        {
            path: '/edit/:postID/:dateID',
            component: Edit,
            props: true
        }
    ]
})