module.exports = {
    theme: 'reco',
    title:"yh的个人小破站",
    description:"有一份光，便有一份热",
    subSidebar: 'auto',
    themeConfig: {
        author: 'yh',
        authorAvatar: 'assets/img/avatar.jpeg',
        // 博客配置
        type: 'blog',
        blogConfig: {
            category: {
                location: 2,     // 在导航栏菜单中所占的位置，默认2
                text: '分类' // 默认文案 “分类”
            },
            tag: {
                location: 3,     // 在导航栏菜单中所占的位置，默认3
                text: '标签'      // 默认文案 “标签”
            },
            socialLinks: [     // 信息栏展示社交信息
                {icon: 'reco-github', link: 'https://github.com/super-init'},
                {icon: 'reco-npm', link: 'https://www.npmjs.com/~reco_luan'}
            ]
        },
        nav: [
            {text:"主页",link:'/',icon: 'reco-home'},
            {text: '时间轴', link: '/timeline/', icon: 'reco-date'},
            {text:"音乐",link:'/music',icon:'reco-qq'},
            {
                text:"分类",
                items:[
                    {text: "java",link:"/note/"},
                    {text: 'python',link:'/note/python/'}
                    ]

            },
            {text:"留言板",link:'/recommend/',icon:'reco-suggestion'},
            {text:'github',link: "https://github.com/super-init",icon: "reco-github"},
            {text:'关于',link:'/about',icon: 'reco-three'}
        ],
        friendLink: [
            {
                title: 'vuepress-theme-reco',
                desc: '一个简单而好看的博客主题',
                logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
                link: 'https://vuepress-theme-reco.recoluan.com'
            },
            {
                title: '午后南杂',
                desc: 'Enjoy when you can, and endure when you must.',
                email: 'recoluan@qq.com',
                link: 'https://www.recoluan.com'
            },
        ]
    },
    plugins: {
        '@vssue/vuepress-plugin-vssue': {
            // 设置 `platform` 而不是 `api`
            platform: 'github-v4',
            // 其他的 Vssue 配置
            owner: 'super-init',
            repo: 'yhxpz',
            clientId: 'ac022b0da0fe5f79279a',
            clientSecret: '64b770d33fa41a0e2e4815edd0410f14ebdee323',
            // autoCreateIssue: true,//自动创建评论
        },
        '@vuepress/back-to-top':true
    },
}