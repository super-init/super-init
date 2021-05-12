module.exports = {
    // base:"./",
    theme: 'reco',
    title:"yh的小破站",
    description:"有一份光，便有一份热",

    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],
    themeConfig: {
        author: 'yh',
        authorAvatar: 'assets/img/avatar.jpeg',
        // 博客配置
        type: 'blog',
        vssueConfig: {
                platform: 'github-v3',
                // 其他的 Vssue 配置
                owner: 'super-init',
                repo: 'yhxpz',
                clientId: 'ac022b0da0fe5f79279a',
                clientSecret: '64b770d33fa41a0e2e4815edd0410f14ebdee323',
                autoCreateIssue: true,//自动创建评论
        },
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
                    {text: "java",link:"/categories/java/"},
                    {text: 'python',link:'/categories/python/'},
                    {text: 'kotlin',link:'/categories/kotlin/'},
                    ]

            },
            {text:"留言板",link:'/recommend/',icon:'reco-suggestion'},
            {text:'github',link: "https://github.com/super-init",icon: "reco-github"},
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
        // '@vssue/vuepress-plugin-vssue': {
        //     // 设置 `platform` 而不是 `api`
        //     platform: 'github-v3',
        //     // 其他的 Vssue 配置
        //     owner: 'super-init',
        //     repo: 'yhxpz',
        //     clientId: 'ac022b0da0fe5f79279a',
        //     clientSecret: '64b770d33fa41a0e2e4815edd0410f14ebdee323',
        //     autoCreateIssue: true,//自动创建评论
        // },
        '@vuepress/back-to-top':true,
        "@vuepress-reco/vuepress-plugin-bgm-player":{
            audios: [
                // 本地文件示例
                {
                    name: '七里香',
                    artist: '周杰伦',
                    url: 'https://freetyst.nf.migu.cn/public%2Fproduct5th%2Fproduct35%2F2019%2F10%2F1618%2F2009%E5%B9%B406%E6%9C%8826%E6%97%A5%E5%8D%9A%E5%B0%94%E6%99%AE%E6%96%AF%2F%E5%85%A8%E6%9B%B2%E8%AF%95%E5%90%AC%2FMp3_64_22_16%2F60054701934.mp3',
                    cover: 'https://mcontent.migu.cn/newlv2/new/album/20200918/7949/s_XqFeoZdGOiPaNgY8.jpg'
                },
                // 网络文件示例
                {
                    name: '迷迭香',
                    artist: '周杰伦',
                    url: 'https://freetyst.nf.migu.cn/public%2Fproduct5th%2Fproduct27%2F2018%2F12%2F27%2F2009%E5%B9%B406%E6%9C%8826%E6%97%A5%E5%8D%9A%E5%B0%94%E6%99%AE%E6%96%AF%2F%E5%85%A8%E6%9B%B2%E8%AF%95%E5%90%AC%2FMp3_64_22_16%2F60054701969.mp3',
                    cover: 'https://mcontent.migu.cn/newlv2/new/album/20200813/7952/s_kIGBjwOvC0KkiCoi.jpg'
                },
                {
                    name: '花海',
                    artist: '周杰伦',
                    url: 'https://freetyst.nf.migu.cn/public%2Fproduct5th%2Fproduct33%2F2019%2F05%2F2314%2F2009%E5%B9%B406%E6%9C%8826%E6%97%A5%E5%8D%9A%E5%B0%94%E6%99%AE%E6%96%AF%2F%E5%85%A8%E6%9B%B2%E8%AF%95%E5%90%AC%2FMp3_64_22_16%2F60054702003.mp3',
                    cover: 'https://mcontent.migu.cn/newlv2/new/album/20210119/25578/s_vPL10Hr244aBlS33.jpg'
                }
            ]
        },
        "vuepress-plugin-auto-sidebar":{

        }
    },
}