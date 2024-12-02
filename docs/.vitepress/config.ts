import { defineConfig } from "vitepress";

export default defineConfig({
    // 中文本地化配置
    lang: 'zh-CN',
    title: "info知识库",
    description: "使用 VitePress 创建的文档站点",
    themeConfig: {
        siteTitle: '<i class="iconfont icon-a-BasicInformationzhuanhuan" style="font-size: 1.2em; margin-right: 5px; background: linear-gradient(120deg, #3eaf7c, #6d9ee7); -webkit-background-clip: text; -webkit-text-fill-color: transparent;" > </i>info知识库',

        nav: [
            { text: '首页', link: '/' },
            {
                text: '快速开始',
                items: [
                    { text: '前端开发', link: '/docs-notes/frontend/frontend-start.md' },
                ]
            }
        ],
        sidebar: {
            '/docs-notes/frontend/html/': [
                {
                    text: 'HTML5指南',
                    link: '/docs-notes/frontend/html/1.menu.md',
                    collapsed: true,
                    items: [
                        
                    ]
                },
                {
                    text: 'HTML基础概念',
                    collapsed: true,
                    items: [
                        { text: 'HTML简介', link: '/docs-notes/frontend/html/Basic_Concepts/Introduction.md' },
                    ]
                },
                {
                    text: '基础篇',
                    collapsed: true,
                    items: [
                        { text: "1 HTML5文档结构结构", link: "/docs-notes/frontend/html/Basis/1.structure/1.1.md" },
                        { text: "2 语义化标签", link: "/docs-notes/frontend/html/Basis/1.structure/1.2.md" },
                        { text: "3 页面布局基础", link: "/docs-notes/frontend/html/Basis/1.structure/1.3.md" },
                        { text: "4 文本格式化", link: "/docs-notes/frontend/html/Basis/2.test/1.1.md" },
                        {text:  "5 序列标签",link:"/docs-notes/frontend/html/Basis/2.test/1.4.md"},
                        { text: "6 链接和图片", link: "/docs-notes/frontend/html/Basis/2.test/1.2.md" },
                        { text: "7 表格应用", link: "/docs-notes/frontend/html/Basis/2.test/1.3.md" },
                        { text: "表单基础", link: "/docs-notes/frontend/html/Basis/3.form/1.1.md" },
                        { text: "8 新增表单元素", link: "/docs-notes/frontend/html/Basis/3.form/1.2.md" },
                        { text: "9 表单验证", link: "/docs-notes/frontend/html/Basis/3.form/1.3.md" }
                    ]
                },
                {
                    text: "进阶",
                    collapsed: true,
                    items: [
                        { text: "1 Canvas绘图", link: "/docs-notes/frontend/html/Advanced/draw/1.1.md" },
                        { text: "2 Canvas渐变", link: "/docs-notes/frontend/html/Advanced/draw/1.2.md" },
                        { text: "3 Canvas路径", link: "/docs-notes/frontend/html/Advanced/draw/1.3.md" },
                        { text: "4 Canvas绘制圆形", link: "/docs-notes/frontend/html/Advanced/draw/1.5.md" },
                        { text: "5 Canvas变换", link: "/docs-notes/frontend/html/Advanced/draw/1.6.md" },
                        { text: "6 高级绘图", link: "/docs-notes/frontend/html/Advanced/draw/1.7.md" },
                        { text: "7 图形阴影", link: "/docs-notes/frontend/html/Advanced/draw/1.8.md" },
                        { text: "8 绘制图像", link: "/docs-notes/frontend/html/Advanced/drawImage/1.1.md" },
                        { text: "9 绘制文字", link: "/docs-notes/frontend/html/Advanced/drawImage/1.2.md" }
                    ]
                }
            ]
        },
        docFooter: {
            prev: '上一页',  
            next: '下一页'
        },
        search: {
            provider: 'local'  
        }
    }
})