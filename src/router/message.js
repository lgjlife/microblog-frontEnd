// import message from '@/components/message'
// import at from "@/components/message/at"
// import like from "@/components/message/like"
// import comment from "@/components/message/comment"

let routers =[
    {
        path: '/message',
         component: resolve => require(['@/components/message'],resolve),
       // component: message,
        meta: {
            title: "消息"
        },
        children: [
            {
                path: "at",
                component: resolve => require(['@/components/message/At'],resolve),
                //component: at,
                meta: {
                    title: "@我的微博"
                },
            },
            {
                path: "comment",
                component: resolve => require(['@/components/message/Comment'],resolve),
                // component: comment,
                meta: {
                    title: "我的评论"
                },
            },
            {
                path: "like",
                 component: resolve => require(['@/components/message/Like'],resolve),
                //component: like,
                meta: {
                    title: "我的点赞"
                },
            },
        ]
    },
]

export  default routers;