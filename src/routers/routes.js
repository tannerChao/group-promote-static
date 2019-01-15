import {
    Home,

    User,
    HasNoUser,

    Login,
    Register

} from '../view'
// import asyncComponent from '../decorator/AsyncComponent '

// const AsyncHome = asyncComponent(() => import(Home))
// const AsyncUser = asyncComponent(() => import(User))
// const AsyncHasNoUser = asyncComponent(() => import(HasNoUser))
// const AsyncIntroduce = asyncComponent(() => import(Introduce))

export const routes = [
    {
        path: '/home',
        component: Home,
        routes: [
            // 用户信息
            {
                path: '/home/user',
                component: User,
                login: true
            },

        ]
    },
    {
        path: '/has-no-login',     //登录控制器
        component: HasNoUser
    },
    {
        path: '/Register',
        component: Register
    },
    {
        path: '/',     //用户登录
        component: Login,
    },
]
