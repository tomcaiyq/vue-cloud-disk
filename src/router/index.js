import MainBody from '@/components/MainBody';
import AllFiles from '@/components/AllFiles';

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'MainBody',
            component: MainBody
        },
        {
            path: '/allFiles',
            name: 'AllFiles',
            component: AllFiles
        }
    ]
})