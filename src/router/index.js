import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home')
    },
    {
        path: '/organizingCommittiees',
        name: 'organizingCommittiees',
        component: () => import('../views/organizingCommittiees')
    },
   
    {
        path: '/programCommittiees',
        name: 'programCommittiees',
        component: () => import('../views/programCommittiees')
    },
    {
        path: '/importantDates',
        name: 'ImportantDates',
        component: () => import('../views/importantDates')
    },
    {
        path: '/paperSubmission',
        name: 'paper Submission',
        component: () => import('../views/paperSubmission')
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../views/Dashboard/Layout'),
        children: [
            {
                path: 'callforWorkshops',
                name: 'dashboard.callforWorkshops',
                component: () => import('../views/Dashboard/callforWorkshops')
            },
            
            {
                path: 'logs',
                name: 'dashboard.logs',
                component: () => import('../views/Dashboard/Logs')
            },
            
        ]
    },
    {
        path: '/venueandTravel',
        name: 'Venue& Travel',
        component: () => import('../views/venueandTravel/layout'),
        children: [
            {
                path: 'venueandAccomodations',
                name: 'travelandvenue.venueand Accomodations',
                component: () => import('../views/venueandTravel/venueandAccomodations')
            },
            {
                path: 'visa',
                name: 'travelandvenue.visa',
                component: () => import('../views/venueandTravel/visa')
            },
            {
                path: 'logs',
                name: 'dashboard.logs',
                component: () => import('../views/Dashboard/Logs')
            },
            
        ]
    }
]

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
